"use client";
import React, { useRef, useEffect, useState } from "react";
import "./HomeAboutSection.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import SwipeButton from "../common/SwipeButton";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import VideoPlayerModel from "../Models/VideoPlayerModel";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { Colors } from "@/styles/colors";
import Link from "next/link";

const StaggerComponent = dynamic(() => import("../StaggerEffect/Stagger"), {
  ssr: false,
});

export default function HomeAboutSection() {
  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <MaxWidthWrapper backgroundColor={Colors.$primary_color}>
        <section className="HomeAboutSection-main" ref={sectionRef}>
          <div className="firstSection">
            <div className="left">
              <h2 className="head">
                <StaggerComponent text={"About"} />
                <span>
                  <StaggerComponent text={"Siciliantech"} />
                </span>
                {/* About <span>siciliantech</span> */}
              </h2>
              <p className="content">
                Siciliantech is a 15-year-old software development company in
                India that is growing rapidly globally. We provide prime
                solutions from the beginning, using our technical competence and
                industry knowledge. We are trusted by clients for our innovative
                product development, supported by our experienced team and
                collaborative approach.
              </p>
              <Link href={"/about"}>
                <SwipeButton text={"About Us"} />
              </Link>
            </div>
            <div className="right">
              <Image height={500} width={500} src={AppImages.AboutCompany} />
              <SwipeButton
                onClick={() => {
                  setVideoOpen(true);
                }}
                text={"Watch Video"}
                // icon={<MdOutlineSlowMotionVideo size={20} />}
              />
            </div>
          </div>
          <div className="secondSection">
            <div className="box box1">
              <div className="digits">
                {startCounting && (
                  <CountUp start={0} end={99} separator="," suffix="%" />
                )}
              </div>
              <div className="name">Job Satisfaction Ratio</div>
            </div>
            <div className="box box2">
              <div className="digits">
                {startCounting && (
                  <CountUp start={0} end={15} separator="," suffix="+" />
                )}
              </div>
              <div className="name">Years of Experience</div>
            </div>
            <div className="box box3">
              <div className="digits">
                {startCounting && (
                  <CountUp start={0} end={9050} separator="," suffix="+" />
                )}
              </div>
              <div className="name">Successful Projects</div>
            </div>
            <div className="box box4">
              <div className="digits">
                {startCounting && (
                  <CountUp start={0} end={35} separator="," suffix="+" />
                )}
              </div>
              <div className="name">Experts</div>
            </div>
            <div className="box box4">
              <div className="digits">
                {startCounting && (
                  <CountUp start={0} end={580} separator="," suffix="+" />
                )}
              </div>
              <div className="name">Global Clients</div>
            </div>
          </div>
          {videoOpen && (
            <VideoPlayerModel closeVideoPlayer={() => setVideoOpen(false)} />
          )}{" "}
        </section>
      </MaxWidthWrapper>
    </>
  );
}
