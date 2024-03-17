/*
 * @Author: zhang_quan
 * @Date: 2024-03-10 21:27:50
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-17 21:00:17
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

export default function Header({ children }: { children: React.ReactNode }) {
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
    </Navbar>
  );
}
