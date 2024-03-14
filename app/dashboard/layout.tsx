/*
 * @Author: zhang_quan
 * @Date: 2024-03-14 23:22:47
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-14 23:22:54
 * @FilePath: \nextjs-dashboard\app\dashboard\layout.tsx
 * @Description: 
 * Copyright (c) 2024 by TWT, All Rights Reserved. 
 */
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}