import React from "react";
import "./letsconnect.scss";
import SwipeButton from "../SwipeButton";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Colors } from "@/styles/colors";

export default function LetsConnect() {
  return (
    <MaxWidthWrapper backgroundColor={Colors.$primary_color}>

    <div id="lets-connect">
      {/* <div className="connect-container"> */}
        <div className="connect-banner">
          <div className="image-box">
            <figure>
              <Image width={100} height={100} src={'/hello-concept.svg'} alt=""/>
            </figure>
          </div>
          <div className="content">
            <h2>Let’s get a free consultation from our technical expert</h2>
            <p>
              Leverage from a free consultation, quote, and expert guidance to
              bedazzle your Idea today!
            </p>
            <SwipeButton text={"Let's Connect"} href="/get-a-quote"/>
          </div>
        </div>
      {/* </div> */}
    </div>
    </MaxWidthWrapper>
  );
}
