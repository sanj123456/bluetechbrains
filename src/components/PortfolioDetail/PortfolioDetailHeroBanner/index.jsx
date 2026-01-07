import React from "react";
import "./portfolioherobanner.scss";
import SwipeButton from "@/components/common/SwipeButton";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

export default function PortfolioDetailHeroBanner({ bannerData }) {
  return (
    <MaxWidthWrapper>

    <div id="portfoliodetail-herobanner">
      <div className="banner-container">
        <div className="info-box">
          <span className="top-title">{bannerData?.industryName}</span>
          <h1>{bannerData?.projectName}</h1>
          <div className="tech-box">
            <ul>
                {bannerData?.technologies?.map((tech, i)=>{
                    return <li key={i}>{tech.name}</li>
                })}
            </ul>
          </div>
          <p className="description">
           {bannerData?.description}
          </p>
          <div className="button-box">
            {bannerData.liveUrl && bannerData.liveUrl !== "#" && <SwipeButton text={"View Live"} changeHoverColor={false}/>}
            <SwipeButton text={"Want Similar Website?"} changeHoverColor={false} href="/get-a-quote"/>
          </div>
        </div>
        <div className="img-box">
            <figure>
                <Image src={AppImages.Laptop} height={500} width={500} alt=""/>
                <span>
                    <Image  height={322.6}  width={529} src={bannerData?.bannerImage}/>
                </span>
            </figure>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
}
