/*
 * @Author: zhang_quan
 * @Date: 2024-03-19 17:54:57
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-19 18:06:27
 * @FilePath: \nextjs-dashboard\app\content\index-carousel.tsx
 * @Description: 
 * Copyright (c) 2024 by TWT, All Rights Reserved. 
 */
"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image"


function IndexCarousel() {

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
          <Image src={"/images/sample.png"}
            width={800} height={200} alt={""}
            className="rounded-md cursor-pointer w-full"
            />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/images/sample.png"}
            width={800} height={200} alt={""}
            className="rounded-md cursor-pointer w-full"
            />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/images/sample.png"}
            width={800} height={200} alt={""}
            className="rounded-md cursor-pointer w-full"
            />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/images/sample.png"}
            width={800} height={200} alt={""}
            className="rounded-md cursor-pointer w-full"
            />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default IndexCarousel

const tmp = (    <>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide className="w-full" style={{ background: "lightblue", height: 300 }}>
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ background: "lightblue", height: 300 }}>
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ background: "lightblue", height: 300 }}>
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="w-full" style={{ background: "lightblue", height: 300 }}>
          Slide 4
        </SwiperSlide>
      </Swiper>
    </>)