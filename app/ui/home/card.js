/*
 * @Author: zhang_quan
 * @Date: 2024-03-12 10:54:21
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-19 17:04:30
 * @FilePath: \nextjs-dashboard\app\ui\home\card.js
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
import React from "react";
import Link from 'next/link';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function App() {
  const list = [
    {
	key: '1',
      title: "Orange",
      img: "/images/fruits.svg",
      price: "$5.50",
    },
    {
	key: '2',
      title: "Tangerine",
      img: "/images/fruit-icons-04.svg",
      price: "$3.00",
    },
    {
	key: '3',
      title: "Raspberry",
      img: "/images/fruit-icons-06.svg",
      price: "$10.00",
    },
  ];
  const list2 = [
    {
	key: '4',
      title: "Lemon",
      img: "/images/fruit-icons-08.svg",
      price: "$5.30",
    },
    {
	key: '5',
      title: "Avocado",
      img: "/images/fruit-icons-07.svg",
      price: "$15.70",
    },
    {
	key: '6',
      title: "Lemon 2",
      img: "/images/fruit-icons-09.svg",
      price: "$8.00",
    },
    {
	    key: '7',
      title: "Banana",
      img: "/images/fruit-icons-04.svg",
      price: "$7.50",
    },
    {
	key: '8',
      title: "Watermelon",
      img: "/images/fruit-icons-09.svg",
      price: "$12.20",
    },
  ];

  return (
    <div>
      {/* 前 3 名 */}
      <div className="grid grid-cols-3 gap-3 justify-items-center">
        {list.map((item, index) => (
          <Link href="/content" 
            key={index}
		>
          <Card
            className="inline-block"
            shadow="sm"
            isPressable
          >
            <CardBody className="flex justify-center overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
          </Link>
        ))}
      </div>
      <p>推荐图文</p>
      {/* 普通图文 */}
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {list2.map((item, index) => (
          <Card
            className="inline"
            shadow="sm"
            key={index}
            isPressable
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
