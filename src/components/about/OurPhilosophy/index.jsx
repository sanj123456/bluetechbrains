"use client";
import React from "react";
import "./OurPhilosophy.scss";
import { Icons } from "@/assets/Icons";
import Image from "next/image";

 
 import { Swiper, SwiperSlide } from "swiper/react";
 import "swiper/css";
 import "swiper/css/navigation";
 import "swiper/css/mousewheel";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import SectionTitle from "@/components/common/SectionTitle";
 
const cardData = [
  {
    icon: Icons.ourPromise,
    title: (
      <>
        {" "}
        Our <br /> Promise
      </>
    ),
    content: `The assurance we give about impressive work quality is
            non-negotiable, that's a promise to all our clients.`,
  },
  {
    icon: Icons.ourPromise,
    title: (
      <>
        {" "}
        Our <br /> Process
      </>
    ),
    content: ` Our clearly defined processes play a major role in helping us stand out. These processes make sure to give a hassle-free experience to the clients. `,
  },
  {
    icon: Icons.bestplacetowork,
    title: (
      <>
        Best Place
        <br /> To work
      </>
    ),
    content: ` We foster an empathetic & motivating work environment for our employees that impacts positively on their work. `,
  },
  {
    icon: Icons.ourcorecompetence,
    title: (
      <>
        Our Core
        <br />
        Competence
      </>
    ),
    content: `Our success is built on the expertise of our team, from technology specialists to employees and partners, assisting our clients with outstanding services.`,
  },
];
export default function OurPhilosophy() {
  return (
    <MaxWidthWrapper>

    <section className="OurPhilosophyMain">
      <SectionTitle topTitle={"WHAT STEERS OUR SERVICES"} title={"Our Philosophy"}/>
      {/* <div className="title-main-wrapper">
        <div className="title-main">WHAT STEERS OUR SERVICES</div>
      </div>
      <div></div>
      <h3 className="heading">
        <StaggerText text={"Our Philosophy"} />
      </h3> */}

      <div className="card-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Navigation, FreeMode, Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            540: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        >
          {cardData.map(({ content, icon, title }, index) => (
            <SwiperSlide key={index}>
              <div class="philosophy-box">
                <div class="philosophy-name">
                  <h4>{title}</h4>
                  <Image src={icon} width="50" height="50" alt="our promise" />
                </div>
                <p>{content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </MaxWidthWrapper>
  );
}
