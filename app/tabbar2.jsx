/*
 * @Author: zhang_quan
 * @Date: 2024-03-17 17:13:29
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-17 17:13:54
 * @FilePath: \nextjs-dashboard\app\tabbar.jsx
 * @Description: 
 * Copyright (c) 2024 by TWT, All Rights Reserved. 
 */
import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';
// import { GalleryIcon } from './GalleryIcon';
// import { MusicIcon } from './MusicIcon';
// import { VideoIcon } from './VideoIcon';

export default function App() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              {/* <GalleryIcon /> */}
              <span>Photos</span>
            </div>
          }
        />
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              {/* <MusicIcon /> */}
              <span>Music</span>
            </div>
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              {/* <VideoIcon /> */}
              <span>Videos</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
