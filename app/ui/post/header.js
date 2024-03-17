/*
 * @Author: zhang_quan
 * @Date: 2024-03-10 21:27:50
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-17 20:38:27
 * @FilePath: \nextjs-dashboard\app\ui\post\header.js
 * @Description: 
 * Copyright (c) 2024 by TWT, All Rights Reserved. 
 */
import React from "react";
import {Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/">
        <Image width={20} src="/images/arrow.svg"/>
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#">
          发布笔记
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex md:block">
          <Link href="#">Sign in</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            发布
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}