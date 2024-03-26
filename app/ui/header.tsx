/*
 * @Author: zhang_quan
 * @Date: 2024-03-10 21:27:50
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-26 10:19:32
 * @FilePath: \nextjs-dashboard\app\ui\header.tsx
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
import React from 'react';
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

export default function Header({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) {
  // const tmp;
  let tmp2 = (
    <NavbarContent justify="end">
      <NavbarItem className="hidden md:block lg:flex">
        <Link href="#">Sign in</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="/login" variant="flat">
          Login
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
  if (type == 'content' || type == 'post')
    tmp2 = (
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:block lg:flex">
          {/* <Link href="#">Sign in</Link> */}
        </NavbarItem>
        {type == 'content' ? (''
        ) : (
          <NavbarItem>
            <Button
              color="primary"
              variant="flat"
              onClick={() => {
                alert('已发布');
              }}
            >
              发布
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    );
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/">
          <Image width={20} src="/images/arrow.svg" />
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-4 sm:flex" justify="center">
        <NavbarItem isActive>
          <Link href="#"> {children}</Link>
        </NavbarItem>
      </NavbarContent>
      {tmp2}
    </Navbar>
  );
}
