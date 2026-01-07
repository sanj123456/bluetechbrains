import React from "react";
import "./testomonials.scss";
import CustomDataSwiper from "../common/CustomDataSwiper";
import { AppImages } from "@/assets/AppImages";
import Image from "next/image";

export default function Testomonials() {
  const data = [
    {
      title: "Very good company",
      review:
        "Very good company. Responsive, efficiënt, quality work until you are satisfied. Would definitely recommend them!",
      userName: "Martijn B.",
      userImage: AppImages.Client1,
      from: "Netherlands",
      rating: 4,
    },
    {
      title: "They will be our 1st choice for future projects.",
      review:
        "Samir and the siciliantech Team made a great job with our project. Very professional, accurate work, always available and they also respected the schedule. They will be our first choice for future projects. Well done Samir!",
      userName: "Stefano P.",
      userImage: AppImages.Client1,
      from: "Netherlands",
      rating: 4,
    },
    {
      title: "Very good company",
      review:
        "Very good company. Responsive, efficiënt, quality work until you are satisfied. Would definitely recommend them!",
      userName: "Martijn B.",
      userImage: AppImages.Client1,
      from: "Netherlands",
      rating: 4,
    },
    {
      title: "Very good company",
      review:
        "Very good company. Responsive, efficiënt, quality work until you are satisfied. Would definitely recommend them!",
      userName: "Martijn B.",
      userImage: AppImages.Client1,
      from: "Netherlands",
      rating: 4,
    },
    {
      title: "Very good company",
      review:
        "Very good company. Responsive, efficiënt, quality work until you are satisfied. Would definitely recommend them!",
      userName: "Martijn B.",
      userImage: AppImages.Client1,
      from: "Netherlands",
      rating: 4,
    },
  ];

  const slides = data.map((item, index) => (
    <div key={index} id="testomonials">
      <div className="testomonial-info">
        <h4 className="title">{item.title}</h4>
        <p className="review">{item.review}</p>
        <div className="client-box">
          <Image src={item.userImage} className="client-img" height={100} width={100}/>
          <div className="client-detail">
            <Image src={AppImages.Star5} className="rating-img" height={100} width={100}/>
            <p className="name">{item.userName}</p>
            <span className="from">{item.from}</span>
          </div>
        </div>
      </div>
    </div>
  ));

  const smTitle = "Voices of Success";
  const title = "Testomonials from our clients";
  const description =
    "Our clients worldover love our work & don't stay back from saying it loud. Check how much they appreciate our work & processes.";
  const btnText = "Contact us";
  const btnLink = "/contact"
  const breakpoints = {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.7,
      spaceBetween: 50,
    },
    810: {
      slidesPerView: 2.3,
    },
    992: {
      slidesPerView: 1.5,
    },
    1350: {
      slidesPerView: 2.3,
    },
    1640: {
      slidesPerView: 3.2,
    },
    2200: {
      slidesPerView: 4.3,
    },
  };

  const extraDiv = () => (
    <div className="platforms">
      <figure>
        <Image src={AppImages.clutchReview} height={200} width={200}/>
      </figure>
      <figure>
        <Image src={AppImages.trustPilotReview} height={200} width={200} />
      </figure>

      <figure>
        <Image src={AppImages.googleReview} height={200} width={200} />
      </figure>
    </div>
  );
  return (
    <CustomDataSwiper
      smallTitle={smTitle}
      title={title}
      description={description}
      btnText={btnText}
      btnLink={btnLink}
      slides={slides}
      preBtnClass={"hire-pre-btn"}
      nextBtnClass={"hire-next-btn"}
      breakpoints={breakpoints}
      extraDiv={extraDiv()}
    />
  );
}
