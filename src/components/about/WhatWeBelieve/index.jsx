"use client";
import React, { useEffect, useRef, useState } from "react";
import "./whatWeBelieveMain.scss";
import SwipeButton from "@/components/common/SwipeButton";
import dynamic from "next/dynamic";
import { MdSlowMotionVideo } from "react-icons/md";
import { AppImages } from "@/assets/AppImages";
import Image from "next/image";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import VideoPlayerModel from "@/components/Models/VideoPlayerModel";
import SectionTitle from "@/components/common/SectionTitle";

const StaggerTextt = dynamic(() => import("../../StaggerEffect/Stagger"), {
  ssr: false,
});

export default function WhatWeBelieve() {
  const [isMounted, setIsMounted] = useState(false);
  const OurCoreValuesCardRef = useRef();
  const OurMissionCardRef = useRef();
  const OurVisionCardRef = useRef();
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    !isMounted && setIsMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === OurCoreValuesCardRef.current) {
              entry.target.classList.add("animation");
              observer.unobserve(OurCoreValuesCardRef.current);
            } else if (entry.target === OurVisionCardRef.current) {
              entry.target.classList.add("OurVisionAnimation");
              observer.unobserve(OurVisionCardRef.current);
            } else if (entry.target === OurMissionCardRef.current) {
              entry.target.classList.add("OurMissionAnimation");
              observer.unobserve(OurMissionCardRef.current);
            }
          }
          // else {
          //   if (entry.target === OurCoreValuesCardRef.current) {
          //     entry.target.classList.remove("animation");
          //   } else if (entry.target === OurVisionCardRef.current) {
          //     entry.target.classList.remove("OurVisionAnimation");
          //   } else if (entry.target === OurMissionCardRef.current) {
          //     entry.target.classList.remove("OurMissionAnimation");
          //   }
          // }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    if (OurCoreValuesCardRef.current) {
      observer.observe(OurCoreValuesCardRef.current);
    }
    if (OurVisionCardRef.current) {
      observer.observe(OurVisionCardRef.current);
    }
    if (OurMissionCardRef.current) {
      observer.observe(OurMissionCardRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (OurCoreValuesCardRef.current) {
        observer.unobserve(OurCoreValuesCardRef.current);
      }
      if (OurVisionCardRef.current) {
        observer.unobserve(OurVisionCardRef.current);
      }
      if (OurMissionCardRef.current) {
        observer.unobserve(OurMissionCardRef.current);
      }
    };
  }, [isMounted]);

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <MaxWidthWrapper>
      <div className="whatWeBelieveMain">
        <SectionTitle topTitle={"FUELING PROGRESS THROUGH CONSTANT INNOVATION"} title={"What we believe"}/>
        {/* <div className="title-main-wrapper">
          <div className="title-main">
            FUELING PROGRESS THROUGH CONSTANT INNOVATION
          </div>
        </div> */}

        {/* <h2 className="modernTechnology">
          <StaggerTextt text={"What we believe"} />
        </h2> */}

        <p className="peragraph">
          We believe in providing quality services, which means any website or
          application curated by us will be clean-coded, speed optimized,
          all-device tested and SEO friendly. Our experiences professionals
          ensure to create web-solutions that do goal conversion.
        </p>

        <div className="videoLink">
          <SwipeButton
            onClick={() => {
              setVideoOpen(true);
            }}
            text={"Watch video"}
            // icon={<MdSlowMotionVideo size={20} />}
          />
        </div>

        <div className="cards-container">
          <div className="OurCoreValuesCard">
            <div ref={OurCoreValuesCardRef} className="image-wrap">
              <Image src="/wwww.svg" height={400} width={400} alt="" />
            </div>
            <div className="content-wrapper">
              <h2>
                <StaggerTextt text={" Our Core Values"} />
              </h2>
              <p className="bigger">
                Our team focuses on “Delivering The Best” to the clients, and
                the rest follows!
              </p>
              <ul className="listing">
                <li>
                  Quality Delivered in <strong>TIME</strong>
                </li>
                <li>Transparency &amp; Integrity</li>
                <li>
                  Continuous <strong>INNOVATION</strong> to embrace change
                </li>
                <li>
                  Exceed <strong>EXPECTATIONS</strong> to make clients our fans!
                </li>
                <li>
                  Being <strong>AGILE</strong>
                </li>
                <li>Collaborative &amp; Result-oriented</li>
                <li>
                  Continuous <strong>LEARN</strong> and <strong>UPSKILL</strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="OurVisionCard">
            <div ref={OurVisionCardRef} className="img-container">
              <Image src="/target.png" height={400} width={400} alt="" />
            </div>
            <div className="content">
              <h2>
                <StaggerTextt text={"Our Vision"} />
              </h2>
              <p>
                Our vision is to continue to rise to be more agile,
                purpose-driven, customer-centric, and a GO-TO technology partner
                for entrepreneurs and individuals to deliver innovative digital
                solutions.
              </p>
            </div>
          </div>
          <div className="OurMission">
            <div ref={OurMissionCardRef} className="img-container">
              <Image src="/missionn.svg" height={400} width={400} alt="" />
            </div>
            <div className="content">
              <h2>Our Mission</h2>
              <p>
                Anything is possible with the right technology...” <br />
                <br />
                At siciliantech, we strive to be a catalyst for our clients'
                success by providing creative, innovative, and goal-oriented
                digital solutions, through business intelligence, cutting-edge
                tools, and top talent.
              </p>
            </div>
          </div>
        </div>
      </div>
      {videoOpen && (
        <VideoPlayerModel closeVideoPlayer={() => setVideoOpen(false)} />
      )}{" "}
    </MaxWidthWrapper>
  );
}
