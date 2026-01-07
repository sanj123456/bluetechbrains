import React from "react";
import "./portfolioswiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

export default function PortfolioSwiper({ images }) {
  return (
    <MaxWidthWrapper>

      <div id="portfolio-swiper">
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={105}
          pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {images?.map((image, i) => {
            return (
              <SwiperSlide key={i}>
                <figure>
                  <Image height={1009.08} width={1480} src={image} />
                </figure>
              </SwiperSlide>
            );
          })}
          <div className="swiper-button swiper-button-next">
            <FaLongArrowAltRight />
          </div>
          <div className="swiper-button swiper-button-prev">
            <FaLongArrowAltLeft />
          </div>
        </Swiper>
      </div>
    </MaxWidthWrapper>
  );
}
