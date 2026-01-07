import React from "react";
import "./perks.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import SectionTitle from "@/components/common/SectionTitle";
const Perks = () => {
  const data = [
    {
      img: AppImages.WorkDay5,
      text: "5 Working Days a Week",
      iconBg: "linear-gradient(147.14deg, #5b8def 6.95%, #0063f7 93.05%)",
      boxBgClass: "blue-box",
    },
    {
      img: AppImages.Culture,
      text: "Culture of Respect",
      iconBg: "linear-gradient(90deg, #ff6900 0%, #e63535 100%)",
      boxBgClass: "orange-box",
    },
    {
      img: AppImages.Activity,
      text: "Recreational Activities",
      iconBg: "linear-gradient(147.14deg, #3e7bfa 6.95%, #60c 93.05%)",
      boxBgClass: "purple-box",
    },
    {
      img: AppImages.LeaveEncashment,
      text: "Leave Encashment",
      iconBg: "linear-gradient(147.14deg, #00cfde 6.95%, #05a660 93.05%)",
      boxBgClass: "green-box",
    },
    {
      img: AppImages.DedicatedArea,
      text: "Dedicated Pantry Area",
      iconBg: "linear-gradient(147.14deg, #00cfde 6.95%, #05a660 93.05%)",
      boxBgClass: "parrot-box",
    },
    {
      img: AppImages.TrainingSession,
      text: "Training Sessions & Monthly Events",
      iconBg: "linear-gradient(147.14deg, #ff3b3b 6.95%, #60c 93.05%)",
      boxBgClass: "red-box",
    },
    {
      img: AppImages.PerformanceAppreciation,
      text: "Performance Appreciation Rewards",
      iconBg: "linear-gradient(90deg, #ff6900 0%, #e63535 100%)",
      boxBgClass: "orange-box",
    },
    {
      img: AppImages.Career,
      text: "Unparalleled Career Growth Opportunity",
      iconBg: "linear-gradient(147.14deg, #5b8def 6.95%, #0063f7 93.05%)",
      boxBgClass: "blue-box",
    },
    {
      img: AppImages.HybridWork,
      text: "12 WFH Per Year (After Probation)",
      iconBg: "linear-gradient(147.14deg, #00cfde 6.95%, #05a660 93.05%)",
      boxBgClass: "green-box"
    },
    {
      img: AppImages.FlexibleTiming,
      text: "Flexible Timings",
      iconBg: "linear-gradient(147.14deg, #3e7bfa 6.95%, #60c 93.05%)",
      boxBgClass: "purple-box",
    },
    {
      img: AppImages.AnnualTrip,
      text: "Annual Trip",
      iconBg: "linear-gradient(147.14deg, #ff3b3b 6.95%, #60c 93.05%)",
      boxBgClass: "red-box",
    },
    {
      img: AppImages.Festival,
      text: "Festival & Work Anniversary Celebrations",
      iconBg: "linear-gradient(145.51deg, #fddd48 7.21%, #00b7c4 94.47%)",
      boxBgClass: "parrot-box",
    },
  ];

  return (
    <div id="perks_container">
    
      <div id="perks">
        <div className="section-container">
          <SectionTitle
            topTitle={"In addition to all that, you receive great"}
            title={"Perks of ScilianTech"}
          />
          <div className="perks-container">
            {data.map((perk, i) => {
              return (
                <div key={i} className={`perk-box ${perk.boxBgClass}`}>
                  <div
                    className="perk-icon"
                    style={{ background: perk.iconBg }}
                  >
                    <figure>
                      <Image src={perk.img} />
                    </figure>
                  </div>
                  <h6>{perk.text}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;
