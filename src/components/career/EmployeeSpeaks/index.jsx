"use client";
import React from "react";
import "./employeespeaks.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { AppImages } from "@/assets/AppImages";
import { Autoplay, EffectFade } from "swiper/modules";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Colors } from "@/styles/colors";

export default function EmployeeSpeaks() {
  const employeeSpeaksData = [
    {
      employeeName: "Manish Patel",
      position: "Sr. React Developer",
      image: '/client1.svg',
      says: "“My ideas of what a workplace ought to be have been reframed by this organization. I could tell as soon as I joined this firm 3 years ago that I had struck gold. we are more than simply a place to work; it's a home full of exceptional individuals that are passionate about what they do. I am sincerely grateful to be a part of this amazing journey, and I am looking forward to what we will be able to do together in the future.”",
    },
    {
      employeeName: "Rohan Patel",
      position: "Sr. Node Developer",
      image: '/client1.svg',
      says: " “I'm grateful to have worked with ScilianTech for more than 4 years now. The supportive culture and dedication to innovation make it an exceptional place to be. Fun activities & celebrations make it more joyful & overall we can have a good mix of fun & learning. I've seen the company growing each day & I’m proud to be a part of the team.”",
    },
    {
      employeeName: "Mayur Patel",
      position: "Sr. Node Developer",
      image: '/client1.svg',
      says: " “Associated with ScilianTech  for 3 years now, I can say it is the best company for any experience. The company encourages employees to take on new challenges & expand their skill sets. Regular performance evaluations and feedback sessions help all to track their progress and identify areas for improvement.  The supportive and nurturing work environment, with growth opportunities, makes the company an excellent place for long-term career development.”",
    },
    {
      employeeName: "Keyur Patel",
      position: "Sr. Node Developer",
      image: '/client1.svg',
      says: "“My ideas of what a workplace ought to be have been reframed by this organization. I could tell as soon as I joined this firm 3 years ago that I had struck gold. we are more than simply a place to work; it's a home full of exceptional individuals that are passionate about what they do.”",
    },
  ];
  return (
    <MaxWidthWrapper backgroundColor={Colors.$primary_color}>
    <div id="employee-speaks">
      <div className="section-container">
        <div className="section-title">
          <h2>Employee</h2>
          <Image src={AppImages.Quote} />
          <h3>Speaks</h3>
        </div>
        <div className="swiper-section">
          <Swiper
            effect="fade"
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
          >
            {employeeSpeaksData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="speaker-box">
                    <figure>
                      <img src={item.image} />
                    </figure>
                    <div className="speaker-say">
                      <p>{item.says}</p>
                      <div className="speaker-info">
                        <h3>{item.employeeName}</h3>
                        <span>{item.position}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div class="rating-info-box">
            <div class="glassdoor-box">
              <figure>
                <Image src={AppImages.GlassdoorIcon}/> 
              </figure>
              <h2>4.8</h2>
              <p>Employee Ratings on Glassdoor</p>
            </div>
            <div class="google-rating-box">
              <figure>
                <Image src={AppImages.googleReview}/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
}
