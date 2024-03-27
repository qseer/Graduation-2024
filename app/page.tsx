/*
 * @Author: zhang_quan
 * @Date: 2024-03-14 21:49:37
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-17 21:06:44
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

export default function Page() {
  const title = '「旧照翻拍」毕业季活动'
  return (
    <div>
      <Header type='home'>{title}</Header>
      <div className="flex justify-center">
        <Image
          width={500}
          // className="max-screen-md"
          src="/images/sample.png"
        />
      </div>
      <p>排行榜</p>
      <Cards></Cards>
    </div>
  );
}
