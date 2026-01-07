"use client";
import React from "react";
import "./ourjourney.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import SectionTitle from "@/components/common/SectionTitle";
export default function OurJourney() {
  const journeyData = [
    {
      year: "2007",
      stepImage: AppImages.Step1,
      journeyImage: AppImages.Journey1,
      title: "Initiated with a Vision",
      detail: "we were started by Samir Bhimbha in Ahmedabad, India.",
    },
    {
      year: "2008",
      stepImage: AppImages.Step2,
      journeyImage: AppImages.Journey2,
      title: "New Beginning of the Journey",
      detail:
        "Launched new siciliantech website and won prestigious “SOTD Award” by Awwwards.com",
    },
    {
      year: "2009",
      stepImage: AppImages.Step3,
      journeyImage: AppImages.Journey3,
      title: "Built a Skilled Team",
      detail:
        "Assembled a dream team with 5 industry experts in design and development",
    },
    {
      year: "2010",
      stepImage: AppImages.Step3,
      journeyImage: AppImages.Journey3,
      title: "Built a Skilled Team",
      detail:
        "Assembled a dream team with 5 industry experts in design and development",
    },
    {
      year: "2011",
      stepImage: AppImages.Step3,
      journeyImage: AppImages.Journey3,
      title: "Built a Skilled Team",
      detail:
        "Assembled a dream team with 5 industry experts in design and development",
    },
    {
      year: "2012",
      stepImage: AppImages.Step3,
      journeyImage: AppImages.Journey3,
      title: "Built a Skilled Team",
      detail:
        "Assembled a dream team with 5 industry experts in design and development",
    },
    {
      year: "2013",
      stepImage: AppImages.Step3,
      journeyImage: AppImages.Journey3,
      title: "Built a Skilled Team",
      detail:
        "Assembled a dream team with 5 industry experts in design and development",
    },
    {
      year: "2014",
      stepImage: AppImages.Step3,
      journeyImage: AppImages.Journey3,
      title: "Built a Skilled Team",
      detail:
        "Assembled a dream team with 5 industry experts in design and development",
    },
  ];
  return (
    <MaxWidthWrapper>

    <div id="our-journey">
      <SectionTitle topTitle={"Steps of Success"} title={"Our Journey"}/>
      <div className="journey-swiper-box">
        <Swiper
          slidesPerView={1}
          touchStartPreventDefault={false}
          grabCursor={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {journeyData.map((journey,i) => {
            return (
              <SwiperSlide key={i}>
                <div class="journey-box">
                  <div class="journey-year">
                    <h2>{journey.year}</h2>
                    <span>
                      <Image src={journey.stepImage} height={26} width={30} alt=""/>
                    </span>
                  </div>
                  <div class="journey-info-box">
                    <div class="journey-img">
                      <figure>
                        <Image src={journey.journeyImage} height={114} width={114} alt=""/>
                      </figure>
                    </div>
                    <div class="journey-details">
                      <span></span>
                      <h4>{journey.title}</h4>
                      <p>{journey.detail}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
    </MaxWidthWrapper>
  );
}
