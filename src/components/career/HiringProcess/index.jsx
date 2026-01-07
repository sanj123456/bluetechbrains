import React from "react";
import "./hiringprocess.scss";
import SectionTitle from "@/components/common/SectionTitle";
import { AppImages } from "@/assets/AppImages";
import Image from "next/image";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

export default function HiringProcess() {
  const hiringProcessData = [
    {
      processName: "Initial Interaction",
      image: AppImages.HiringProcess1,
      background: "linear-gradient(147.14deg, #5b8def 6.95%, #0063f7 93.05%)",
    },
    {
      processName: "Technical Interview",
      image: AppImages.HiringProcess1,
      background: "linear-gradient(90deg, #ff6900 0%, #e63535 100%)",
    },
    {
      processName: "Real-time Assignment",
      image: AppImages.HiringProcess1,
      background: "linear-gradient(147.14deg, #00cfde 6.95%, #05a660 93.05%)",
    },
    {
      processName: "Final HR Discussion",
      image: AppImages.HiringProcess1,
      background: "linear-gradient(147.14deg, #ff3b3b 6.95%, #60c 93.05%)",
    },
    {
      processName: "Offer Rollout!",
      image: AppImages.HiringProcess1,
      background: "linear-gradient(147.14deg, #3e7bfa 6.95%, #60c 93.05%)",
    },
  ];
  return (
    <MaxWidthWrapper>
    <div id="hiring-process">
      <div className="section-container">
        <SectionTitle
          topTitle={"Streamlined and Seamless"}
          title={"Hiring Process"}
        />
        <div className="hiring-process-box">
          {hiringProcessData.map((item, index) => {
            return <div className="process-box" key={index}>
              <h2 style={{background: item.background}}>{index+1}</h2>
              <h4>{item.processName}</h4>
              <div className="process-icon" style={{background: item.background}}>
                <figure>
                  <Image src={item.image} />
                </figure>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>

    </MaxWidthWrapper>
  );
}
