/*
 * @Author: zhang_quan
 * @Date: 2024-03-19 17:42:25
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-19 17:42:36
 * @FilePath: \nextjs-dashboard\app\content\demo\items.tsx
 * @Description: 
 * Copyright (c) 2024 by TWT, All Rights Reserved. 
 */
import React from 'react'
import { Swiper, Toast } from 'react-vant'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

export const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div
      onClick={() => {
        Toast.info(`你点击了卡片 ${index + 1}`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))
