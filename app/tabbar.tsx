/*
 * @Author: zhang_quan
 * @Date: 2024-03-17 17:22:27
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-17 17:25:14
 * @FilePath: \nextjs-dashboard\app\tabbar.tsx
 * @Description: 
 * Copyright (c) 2024 by TWT, All Rights Reserved. 
 */
// app/tabs/page.tsx
"use client";

import {usePathname} from "next/navigation";
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';


export default function ExampleClientRouterWithTabs() {
  const pathname = usePathname();

  return (
    <Tabs aria-label="Options" selectedKey={pathname}>
      <Tab key="photos" title="Photos" href="/photos">
        <Card>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </CardBody>
        </Card>
      </Tab>
      <Tab key="music" title="Music" href="/music">
        <Card>
          <CardBody>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </CardBody>
        </Card>
      </Tab>
      <Tab key="videos" title="Videos" href="/videos">
        <Card>
          <CardBody>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
}