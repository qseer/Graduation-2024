/*
 * @Author: zhang_quan
 * @Date: 2024-03-14 21:49:37
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-24 20:59:11
 * @FilePath: \nextjs-dashboard\app\layout.tsx
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Tabs, Tab } from '@nextui-org/react';
import { Providers } from './providers';
import NavLinks from '@/app/ui/nav-links';
// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext(null);   

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="m-auto max-w-screen-md">
            {/* <div className="w-full bg-red-100">123</div> */}
            {/* <p className="bg-red-200">123</p> */}
            {children}
            <div className="h-20"></div>
            <div className="z-50 fixed bottom-0 w-full max-w-screen-md bg-back-blue">
              <div className="flex grow flex-row justify-between space-x-2">
                <NavLinks />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
