/*
 * @Author: zhang_quan
 * @Date: 2024-03-14 21:49:37
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-24 21:24:30
 * @FilePath: \nextjs-dashboard\app\login\page.tsx
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
'use client'
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="text"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                // minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton />
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  return (
    <Button className="mt-4 w-full" onClick={judge}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

function judge() {
  alert(123)
}

async function handleSubmit(e) {
  e.preventDefault();
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      // 登录成功，重定向到应用主页或其他页面
      router.push('/app/home');
    } else {
      // 登录失败，显示错误消息
      alert(data.message);
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
}
