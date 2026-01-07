"use client";
import React from "react";
import "./homeHeroBanner.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import SwipeButton from "../common/SwipeButton";
import TextAnimation from "../textAnimation";
import dynamic from "next/dynamic";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { Colors } from "@/styles/colors";

export default function HomeHeroBanner() {
  return (
    <MaxWidthWrapper backgroundColor={Colors.$primary_color}>

    <div id="homeHeroBanner">
      <div className="container">
        <div className="box1">
          <p className="title-msg">
            Drive Innovation to New Heights
          </p>
          <div className="title-box">
            <h2>We specialize in creating</h2>
            <TextAnimation/>
            <p className="secondary-text">ON-TIME. ON-BUDGET. ON-POINT</p>
          </div>
          <div className="action-box">
            <SwipeButton prefetch={true} text={"Let's Connect"} href="/get-a-quote"/>
            <p>
              Get <span> Expert Guidance</span> over a quick call, <br />
              Choose the perfect digital partner and kickstart your project with
              clarity.{" "}
            </p>
          </div>
          <div className="awards-container">
            <div className="award-box">
              <div className="award-name">
              <p className="award-img"><b>Advancing Innovation</b></p>
              </div>
            </div>
            <div className="award-box">
              <div className="award-name">
              <p className="award-img"><b>Persistently Distributed Solutions</b></p>
              {/* <Image src={AppImages.AwardLogo2} className="award-img" height={19} width={32}/> */}
              </div>
            </div>
            <div className="award-box">
              <div className="award-name">
              <p className="award-img"><b>Smart Business Solutions</b></p>
              {/* <Image src={AppImages.AwardLogo3} className="award-img" height={19} width={32}/> */}
              </div>
            </div>
          </div>
        </div>
        <div className="box3">
          {/* <DynamicGlobeComponent/> */}
          <Image priority loading="eager" height={500} width={500} src="/globImage.webp" alt=""/>

        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
}
