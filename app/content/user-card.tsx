/*
 * @Author: zhang_quan
 * @Date: 2024-03-19 18:12:58
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-26 10:45:36
 * @FilePath: \nextjs-dashboard\app\content\user-card.tsx
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/react';

export default function UserCard({likes}: {likes:number}) {
  const name = 'XXX';
  // const likes = 110;
  const rank = 3;
  const dis = 5;
  return (
    <div>
      <div className="m-auto w-24 h-24 bg-red-100 relative pt-10">
        {/* 123456 */}
        <Avatar
          className="w-full h-full text-tiny absolute -bottom-5"
        //   size="lg"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </div>
      <div className="bg-cardblue p-10">
        <div className="flex justify-between ">
          <div className="w-32 flex-initial">
            <p className="text-center">{likes}</p>
            <p className="text-center">加油值</p>
          </div>
          <div className="w-32 flex-initial">
            <p className="text-center">{rank}</p>
            <p className="text-center">当前排名</p>
          </div>
          <div className="w-32 flex-initial bg-red-100">
            <p className="text-center">{dis}</p>
            <p className="text-center">距离上一名</p>
          </div>
        </div>
      </div>
    </div>
  );
}
