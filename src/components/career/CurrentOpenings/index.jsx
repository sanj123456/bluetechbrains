import React from "react";
import "./currentopenings.scss";
import SwipeButton from "@/components/common/SwipeButton";
import { AppImages } from "@/assets/AppImages";
import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import { currentOpeningsData } from "@/JsonData/currentOpeningsData";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

export default function CurrentOpenings() {
  return (
    <MaxWidthWrapper>
    <div id="current-openings">
      <div className="section-container">
        <SectionTitle topTitle={"Make your mark"} title={"Current Openings"} />
        <div className="current-opening-box">
          <div className="openings-list">
            {currentOpeningsData?.map((opening, index) => {
              return (
                <div className="item-box" key={index}>
                  <div className="opening-title-box">
                    <h4>{opening.position}</h4>
                    <p>{opening.experience} Years of Experience</p>
                  </div>
                  <div className="vacancy">
                    <p>Openings</p>
                    <h5>{opening.openings}</h5>
                  </div>
                  <SwipeButton text={"Apply Now"} changeHoverColor={false} href={`/career/${opening.link}`}/>
                </div>
              );
            })}
          </div>
          {/* <div className="openings-sidebar">
            <div className="sticky-sidebar">
              <div className="find">
                <figure>
                  <Image src={AppImages.FindCareer} />
                </figure>
                <h2>Can't find opening?</h2>
                <SwipeButton text={"Click here"} changeHoverColor={false} />
              </div>
              <div className="rating">
                <div className="glassdoor-box">
                  <figure>
                    <Image src={AppImages.GlassdoorIcon} />
                  </figure>
                  <h2>4.8</h2>
                  <p>Employee Ratings on Glassdoor </p>
                </div>
                <div className="google-box">
                  <figure>
                    <Image src={AppImages.googleReview} />
                  </figure>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>

    </MaxWidthWrapper>
  );
}
