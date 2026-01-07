"use client";
import React from "react";
import "./celebretion.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
 
 
 
import SwipeButton from "@/components/common/SwipeButton";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
export default function Celebration() {
 
    const data = [
      {
        img: AppImages.birth.src,
      },
      {
        img: AppImages.food.src,
      },
      {
        img: AppImages.officeGame.src,
      },
      {
        img: AppImages.outting.src,
      },
      {
        img: AppImages.festOffice.src,
      },
      {
        img: AppImages.outting.src,
      },
      {
        img: AppImages.festOffice.src,
      },
      {
        img: AppImages.outting.src,
      },
      {
        img: AppImages.festOffice.src,
      },
       
      
    ];
  return (
      <MaxWidthWrapper>
      
      <div className="main-infrastructuree">
        <div className="wrapper-div">
          <div className="content-wrapper">
            {/* <span className='top-title'>LIFE IS A ROUND OF siciliantech</span> */}
            <h2 className="bottom-title">Team Celebrations</h2>
          </div>
        </div>
        <div className="Image-gallery">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            freeMode={true}
            modules={[Navigation, FreeMode, Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1536: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  className="card-box"
                  src={item.img}
                  alt={`Slide ${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      </MaxWidthWrapper>
    );
}
