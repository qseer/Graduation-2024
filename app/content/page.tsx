/*
 * @Author: zhang_quan
 * @Date: 2024-03-14 21:49:37
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-26 10:42:08
 * @FilePath: \nextjs-dashboard\app\content\page.tsx
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
'use client';
// import React, { useState } from 'react';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import Image from 'next/image';
import styles from '@/app/ui/home.module.css';
import Header from '@/app/ui/header';
import { Textarea, Button, Image } from '@nextui-org/react';
import { items } from './demo/items';
import IndexCarousel from './index-carousel';
import UserCard from './user-card';
import { useState } from 'react';

export default function Page() {
  const [likes, setLikes] = useState(10)
  const title = 'XXX' + '的毕业笔记';
  const contentTitle = '毕业的盛夏夺目又耀眼';
  const content =
    '故事的开头总是这样，适逢其会，猝不及防。\n 故事的结局总是这样，花开两朵，天各一方。';
  // const likes = 10
  return (
    <div>
      <Header type="content">{title}</Header>
      <div className="w-full max-w-screen-xl overflow-hidden">
        <IndexCarousel />
        <h1 className="text-xl"> {contentTitle} </h1>
        <p> {content} </p>
        <UserCard likes={likes}></UserCard>
        {/* {likes} */}
        <Button onClick={() => {setLikes(likes+1)}} className="m-auto block mt-5">为 TA 加油！</Button>
        <input type='text' placeholder='发个友善的弹幕吧！' className='w-full mt-5 bg-slate-200'></input>
      </div>
    </div>
  );
}
