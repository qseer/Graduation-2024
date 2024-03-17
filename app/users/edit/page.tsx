/*
 * @Author: zhang_quan
 * @Date: 2024-03-17 16:29:42
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-17 21:23:08
 * @FilePath: \nextjs-dashboard\app\users\edit\page.tsx
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  User,
  Image,
  Button,
} from '@nextui-org/react';

export default function App() {
  return (
    <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-medium font-medium">编辑资料</h4>
        <p className="text-small text-default-400">
          Beautiful, fast and modern React UI library.
        </p>
      </div>
      <Divider className="my-4" />
      <div className="text-small flex h-5 items-center space-x-4">
        <div>Blog</div>
        <Divider orientation="vertical" />
        <div>Docs</div>
        <Divider orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
