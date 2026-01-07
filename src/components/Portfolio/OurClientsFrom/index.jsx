"use client";
import React, { useEffect, useRef, useState } from "react";
import "./ourclientsfrom.scss";
import SwipeButton from "@/components/common/SwipeButton";
import { AppImages } from "@/assets/AppImages";
import Image from "next/image";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

const StaggerComponent = dynamic(() => import("../../StaggerEffect/Stagger"), {
  ssr: false,
});

export default function OurClientsFrom() {
  const clientsCountries = [
    {
      countryName: "USA",
      image: AppImages.UsaFlag,
    },
    {
      countryName: "UK",
      image: AppImages.UKFlag,
    },
    {
      countryName: "Australia",
      image: AppImages.AustraliaFlag,
    },
    {
      countryName: "Canada",
      image: AppImages.CanadaFlag,
    },
    {
      countryName: "EU",
      image: AppImages.EUFlag,
    },
    {
      countryName: "Netherlands",
      image: AppImages.NetherlandsFlag,
    },
    {
      countryName: "Ireland",
      image: AppImages.IrelandFlag,
    },
    {
      countryName: "India",
      image: AppImages.IndiaFlag,
    },
    {
      countryName: "Belgium",
      image: AppImages.BelgiumFlag,
    },
    {
      countryName: "Germany",
      image: AppImages.GermanyFlag,
    },
    {
      countryName: "Denmark",
      image: AppImages.DenmarkFlag,
    },
    {
      countryName: "Finland",
      image: AppImages.FinlandFlag,
    },
    {
      countryName: "Italy",
      image: AppImages.ItalyFlag,
    },
    {
      countryName: "France",
      image: AppImages.FranceFlag,
    },
    {
      countryName: "Spain",
      image: AppImages.SpainFlag,
    },
    {
      countryName: "New Zealand",
      image: AppImages.NewZealandFlag,
    },
    {
      countryName: "South Africa",
      image: AppImages.SouthAfricaFlag,
    },
    {
      countryName: "Haiti",
      image: AppImages.HaitiFlag,
    },
    {
      countryName: "UAE",
      image: AppImages.UAEFlag,
    },
    {
      countryName: "Israel",
      image: AppImages.IsraelFlag,
    },
  ];

  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.8, // Adjust the threshold as needed
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
    <MaxWidthWrapper  >
      <div id="our-clients">
        <div className="section-title">
          <div className="title-box">
            <h2>
              <StaggerComponent text={"Our Clients"} />
            </h2>
          </div>
          <h4>
            Our clients are from various corners of the globe including the{" "}
            <span>UK,</span> <span>USA,</span>
            <span>Europe,</span> <span>UAE,</span> <span>Australia,</span>
            <span>Spain,</span> <span>Netherlands,</span>
            <span>Finland &amp; many more.</span>
          </h4>
          <p>
            Our value addition point is to understand the needs of the global
            clients, being available as per timezone requirements & eventually
            coming up with solutions that are built to enhance their online
            presence and do goal-conversion.
          </p>
          <SwipeButton
            text={"Elevate Your Journey with Us"}
            changeHoverColor={false}
            href="/get-a-quote"
          />
        </div>
        <div ref={sectionRef} className="counter-container">
          <div className="counter-box">
            <h2>
              {startCounting && (
                <CountUp start={0} end={15} separator="," suffix="+" />
              )}
            </h2>
            <span>Years of Experience</span>
          </div>
          <div className="counter-box">
            <h2>
              {" "}
              {startCounting && (
                <CountUp start={0} end={35000} separator="," suffix="+" />
              )}
            </h2>
            <span>Hours Worked</span>
          </div>
          <div className="counter-box">
            <h2>
              {" "}
              {startCounting && (
                <CountUp start={0} end={580} separator="," suffix="+" />
              )}
            </h2>
            <span>Global Clients</span>
          </div>
          <div className="counter-box">
            <h2>
              {" "}
              {startCounting && (
                <CountUp start={0} end={9050} separator="," suffix="+" />
              )}
            </h2>
            <span>Successful Projects</span>
          </div>
        </div>
        <div className="countries-container">
          {clientsCountries.map((country, i) => {
            return (
              <div key={i} className="country-box">
                <figure>
                  <Image src={country.image} height={30} width={41} alt=""/>
                  <figcaption>{country.countryName}</figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
