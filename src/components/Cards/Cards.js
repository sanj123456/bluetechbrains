"use client";
import React from "react";
import "./Cards.scss";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import BlogCard from "../BlogCard";
import Link from "next/link";
import Image from "next/image";
 
const Cards = ({ BlogsData }) => {
   
  return (
    <div>
      <Swiper
        slidesPerView={3}
        modules={[Pagination]}
        height={"100px"}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >{BlogsData.map((blog) => (
        <SwiperSlide key={blog?.id}>
          {/* <BlogCard baseUrl={"/blog"} blog={blog}/> */}
          <div className="card-body">
            {/* <img src={blog.img} /> */}
            <Link href={"/blog/" + blog.heading.toLowerCase().replaceAll(" ", "-")} className="image-link">
              <figure className="work-image-box">
                <Image height={300} width={400} src={blog.img} draggable={false} className="hover-bg-img" />
                <Image height={300} width={400} src={blog.img} draggable={false} className="work-img" />
              </figure>
            </Link>
            <div className="card-info">
              <div className="short-info">
                <ul>
                  {blog.tags.map((tag) => (
                    <li>{tag}</li>
                  ))}
                </ul>
                <span>{blog.date}</span>
              </div>
              <h2 className="heading"><Link href={"/blog/" + blog.heading.toLowerCase().replaceAll(" ", "-")}>{blog.heading}</Link></h2>
              <p className="details">{blog.details}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default Cards;
