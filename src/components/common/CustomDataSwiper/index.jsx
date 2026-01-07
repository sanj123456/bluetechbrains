"use client";
import "./customdataswiper.scss";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import SwipeButton from "../SwipeButton";
import dynamic from "next/dynamic";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Colors } from "@/styles/colors";

const StaggerComponent = dynamic(() => import("../../StaggerEffect/Stagger"), {
  ssr: false,
});

export default function CustomDataSwiper({
  smallTitle,
  title,
  description,
  btnText,
  slides,
  bgTheme,
  preBtnClass = "",
  nextBtnClass = "",
  breakpoints,
  extraDiv,
  btnLink,
}) {
  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseDown = (state) => {
    if (state === "down") {
      setMouseDown(true);
    } else if (state === "up") {
      setMouseDown(false);
    }
  };

  return (
    <MaxWidthWrapper
      backgroundColor={
        bgTheme === "blue"
          ? `${Colors.$primary_color} !important `
          : `linear-gradient(
    180deg,
    rgba(248, 247, 246, 0) 29.73%,
    #f8f7f6 97.06%
  );`
      }
    >
      <div id="data-swiper" className={bgTheme === "blue" ? "theme-blue" : ""}>
        <div className="services-container">
          <div className="info">
            <div className="content">
              <h3 className="head-span">{smallTitle}</h3>
              <h2 className="title">
                <StaggerComponent text={title} />
              </h2>
              <p className="detail">{description}</p>
              <SwipeButton text={btnText} href={btnLink} />
            </div>
            <div className="swiper-buttons">
              <button className={`swipe-btn ${preBtnClass}`}>
                <FaLongArrowAltLeft />
              </button>
              <button className={`swipe-btn ${nextBtnClass}`}>
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>

          <div className="right-box">
            <div
              className={`swiper-container`}
              onMouseDown={() => handleMouseDown("down")}
              onMouseUp={() => handleMouseDown("up")}
              onTouchStart={() => handleMouseDown("down")}
              onTouchEnd={() => handleMouseDown("up")}
            >
              <Swiper
                spaceBetween={50}
                slidesPerView={1.1}
                pagination={{
                  dynamicBullets: true,
                }}
                touchStartPreventDefault={false}
                modules={[Navigation, Pagination]}
                grabCursor={true}
                navigation={{
                  nextEl: nextBtnClass ? `.${nextBtnClass}` : "",
                  prevEl: preBtnClass ? `.${preBtnClass}` : "",
                }}
                breakpoints={breakpoints}
              >
                {slides?.length > 0 &&
                  slides?.map((slide, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div
                          className={`card-box ${
                            mouseDown ? "scale-down" : ""
                          }`}
                        >
                          {slide}
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            {extraDiv}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
