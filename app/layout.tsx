/*
 * @Author: zhang_quan
 * @Date: 2024-03-14 21:49:37
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-17 17:25:47
 * @FilePath: \nextjs-dashboard\app\layout.tsx
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Tabs, Tab } from '@nextui-org/react';
import Tabbar from './tabbar';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="m-auto max-w-screen-md bg-red-50">
            {/* <div className="w-full bg-red-100">123</div> */}
            {/* <p className="bg-red-200">123</p> */}
            {children}
            <div className="z-999 fixed bottom-0 w-full max-w-screen-md bg-red-200">
              <div className="flex justify-center">123456</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
