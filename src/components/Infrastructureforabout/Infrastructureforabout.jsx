"use client";
import React from "react";
import "./Infrastructureforabout.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import SwipeButton from "../common/SwipeButton";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import Image from "next/image";
// import { Swiper, SwiperSlide } from 'swiper/react';

const Infrastructureforabout = () => {
  const data = [
    {
      img: "/brown-grey.webp",
    },
    {
      img: "/view-future.webp",
    },
    {
      img: "/brown-grey.webp",
    },
    {
      img: "/view-future.webp",
    },
    {
      img: "/brown-grey.webp",
    },
    {
      img: "/view-future.webp",
    },
    {
      img: "/brown-grey.webp",
    },
  ];
  return (
    <MaxWidthWrapper>

    <div className="about-main-infrastructure">
      <div className="wrapper-div">
        <div className="content-wrapper">
          {/* <span className='top-title'>LIFE IS A ROUND OF siciliantech</span> */}
          <h2 className="bottom-title">LIFE @ siciliantech</h2>
          <p className="bottom-para">
            siciliantech stands out as a workplace where work and enjoyment
            combine effortlessly. Team bonding, support, and a vibrant
            atmosphere come together, to cultivate the right balance of
            productivity and a cheerful work environment.
          </p>
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
              <Image className="card-box" src={item.img} alt={`Slide ${index}`} height={500} width={500}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="btn-div">
        <SwipeButton text={"Get In Touch"} href="/get-a-quote"/>
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default Infrastructureforabout;
