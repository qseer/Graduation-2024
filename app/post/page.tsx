/*
 * @Author: zhang_quan
 * @Date: 2024-03-14 21:49:37
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-17 21:02:32
 * @FilePath: \nextjs-dashboard\app\post\page.tsx
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import Image from 'next/image';
import styles from '@/app/ui/home.module.css';
import Header from '@/app/ui/header';
import { Textarea, Image } from '@nextui-org/react';

export default function Page() {
  const title = '发布笔记'
  return (
    <div>
      <Header>{title}</Header>
      <Textarea
        label="Description"
        placeholder="Enter your description"
        className="p-5"
      />
      <Image className="w-20" src="/images/sample.png"></Image>
    </div>
  );
}
