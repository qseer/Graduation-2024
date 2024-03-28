/*
 * @Author: zhang_quan
 * @Date: 2024-03-14 21:49:37
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-28 23:31:04
 * @FilePath: \nextjs-dashboard\app\page.tsx
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Header from '@/app/ui/header';
import Cards from '@/app/ui/home/card';
import { Image } from '@nextui-org/react';
import { useState } from 'react';

async function getData(userId:number) {
  console.log('开始获取数据');
  const data = { userId: userId };
  const res = await fetch('http://182.92.130.40:8087/pub/posts/selectPosts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('获取成功');
      return data;
    })
    .catch((error) => {
      console.log(error);
      return 404;
    });
  return res.data;
}

export default async function Page() {
  const posts = await getData(4);
  const title = '「旧照翻拍」领奖品毕业季活动';
  return (
    <div>
      <Header type="home">{title}</Header>
      <div className="flex justify-center">
        <Image
          width={500}
          // className="max-screen-md"
          src="/images/sample.png"
        />
      </div>
      {/* {res} */}
      <p>排行榜</p>
      <Cards posts={posts}></Cards>
    </div>
  );
}
