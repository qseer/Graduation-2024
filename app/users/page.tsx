/*
 * @Author: zhang_quan
 * @Date: 2024-03-17 16:29:42
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-17 21:22:23
 * @FilePath: \nextjs-dashboard\app\users\page.tsx
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
    <Card>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="/images/fruits.svg"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
        <Button as={Link} 
        // className='-end'
        color="primary" href="/users/edit" variant="flat">
          编辑
        </Button>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="">我的毕业笔记</p>
      </CardBody>
      <Divider />
      <CardBody>
        <p className="text-sm">我的亲友团</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <ul>
          <li>
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: '/images/fruits.svg',
              }}
            />
          </li>
          <li>
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: '/images/fruits.svg',
              }}
            />
          </li>
          <li>
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: '/images/fruits.svg',
              }}
            />
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}
