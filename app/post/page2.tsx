/*
 * @Author: zhang_quan
 * @Date: 2024-03-14 21:49:37
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-28 19:14:07
 * @FilePath: \nextjs-dashboard\app\post\page.tsx
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
'use client';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import Image from 'next/image';
import styles from '@/app/ui/home.module.css';
import Header from '@/app/ui/header';
import { Textarea, Image, Button, Input } from '@nextui-org/react';
import { useState } from 'react';

function addData() {
  const data = {
    userId: 3,
    postContent: con,
    postImage: img,
  };
  fetch('http://182.92.130.40:8087/pub/posts/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export default function Page() {
  const title = '发布笔记';
  const [img, setImg] = useState(''); //把vaule的值存起来，方便其他地方用;
  const [con, setCon] = useState('');

  const onChange = (value: any) => {
    setImg(value.target.value);
  };
  const onChange1 = (value: any) => {
    setCon(value.target.value);
  };
  return (
    <div>
      <Header type="post">{title}</Header>
      <form className="space-y-3">
        <Textarea
          label="Description"
          placeholder="Enter your description"
          className="p-5"
          value={con}
          onChange={onChange1}
          required
        />
        <Image className="w-20" src="/images/addImage.svg"></Image>
        <p>图片链接：</p>
        <Input value={img} onChange={onChange} required/>
        <LoginButton />
      </form>
    </div>
  );
}

function LoginButton() {
  return (
    <Button className="mt-4 w-full" onClick={judge}>
      发布 <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

function judge() {
  alert(123);
}
