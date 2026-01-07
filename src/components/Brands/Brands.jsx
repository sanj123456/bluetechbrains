"use client";
import React from "react";
import "./Brands.scss";
import Image from "next/image";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
const Brands = () => {
  const params = {
    autoplay: {
      delay: 3000, // Auto play delay in milliseconds
      disableOnInteraction: false, // Disable auto play when user interacts with swiper
    },
    loop: true, // Enable looping of slides
    Infinity: true, // Enable infinite scrolling
  };
  const imagesData = [
    { src: "/marvel-4.png", alt: "Marvel Image 1" },
    { src: "/african-safari-1.png", alt: "Marvel Image 2" },
    { src: "/catalogue-1.png", alt: "Marvel Image 3" },
    { src: "/hyundai-1.png", alt: "Marvel Image 4" },
    { src: "/canoe-the-caney.png", alt: "Marvel Image 5" },
    { src: "/nourgroup-1.png", alt: "Marvel Image 6" },
    { src: "/penser-1.png", alt: "Marvel Image 7" },
    { src: "/philips-1.png", alt: "Marvel Image 8" },
    { src: "/safarihub.png", alt: "Marvel Image 9" },
    { src: "/simnovus-1.png", alt: "Marvel Image 0" },
    { src: "/tellmethegoodnews.png", alt: "Marvel Image 1" },
    { src: "/vodafone-1.png", alt: "Marvel Image 2" },
    { src: "/marvel-4.png", alt: "Marvel Image 1" },
    { src: "/african-safari-1.png", alt: "Marvel Image 2" },
    { src: "/catalogue-1.png", alt: "Marvel Image 3" },
    { src: "/hyundai-1.png", alt: "Marvel Image 4" },
    { src: "/canoe-the-caney.png", alt: "Marvel Image 5" },
    { src: "/nourgroup-1.png", alt: "Marvel Image 6" },
    { src: "/penser-1.png", alt: "Marvel Image 7" },
    { src: "/philips-1.png", alt: "Marvel Image 8" },
    { src: "/safarihub.png", alt: "Marvel Image 9" },
    { src: "/simnovus-1.png", alt: "Marvel Image 0" },
    { src: "/tellmethegoodnews.png", alt: "Marvel Image 1" },
    { src: "/vodafone-1.png", alt: "Marvel Image 2" },
  ];
  return (
    <MaxWidthWrapper backgroundColor={"#fafafc"}>
      <div className="main-container">
        <div className="wrapper">
          <div className="title">
            <h3>Relied Upon by Brands</h3>
            <p>Around the World</p>
          </div>
          <div className="logos">
            <div class="slider">
              <div className="slide-track">
                {imagesData.map((image, index) => (
                  <div className="slide" key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={200}
                      height={65}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* <div class="marquee">
  <div class="marquee-content"> 
    <div class="marquee-item">
      <img src="/hyundai-1.png" alt=""/>
    </div>
    <div class="marquee-item">
      <img src="/canoe-the-caney.png" alt=""/>
    </div>
    
    <div class="marquee-item">
      <img src="/catalogue-1.png" alt=""/>
    </div>
    <div class="marquee-item">
      <img src="/marvel-4.png" alt=""/>
    </div>
    <div class="marquee-item">
      <img src="/nourgroup-1.png" alt=""/>
    </div>
    
    <div class="marquee-item">
      <img src="/penser-1.png" alt=""/>
    </div>
    
    <div class="marquee-item">
      <img src="/philips-1.png" alt=""/>
    </div>
    
    <div class="marquee-item">
      <img src="/safarihub.png" alt=""/>
    </div>
    <div class="marquee-item">
      <img src="/simnovus-1.png" alt=""/>
    </div>
    
    <div class="marquee-item">
      <img src="/tellmethegoodnews.png" alt=""/>
    </div>
    
    <div class="marquee-item">
      <img src="/vodafone-1.png" alt=""/>
    </div>
  </div>
</div> */}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Brands;
