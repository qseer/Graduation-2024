/*
 * @Author: zhang_quan
 * @Date: 2024-03-17 17:00:58
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-17 17:01:39
 * @FilePath: \nextjs-dashboard\app\providers.tsx
 * @Description: 
 * Copyright (c) 2024 by TWT, All Rights Reserved. 
 */
// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}