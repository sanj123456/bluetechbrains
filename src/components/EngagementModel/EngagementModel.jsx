"use client";
import React, { useState } from "react";
import "./EngagementModel.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";

import { RiMoneyDollarCircleLine } from "react-icons/ri";

import { GiSandsOfTime } from "react-icons/gi";
import { TbUserSquare } from "react-icons/tb";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { Colors } from "@/styles/colors";
import { px } from "framer-motion";
const EngagementModel1 = [
  {
    id: 1,
    description:
      "  In this business model, you are required to provide us withall-inclusive details of your project, and our developers work on the decided requirements with a fixed cost.",
    data: " It is suitable for definite project-based demands like straightforward website design, web development, or redesign projects and is not perfect for large-sized custom tech projects.",
    listitem1: "fixed overall costing",
    listitem2: "Milestone Grounded Payments",
    listitem3: "Pre-defined Deadlines",
    listitem4: "Minimum involvement required",
    model: "fixedcost",
  },
  {
    id: 2,
    description:
      "In this business model, the cost is fixed as per the working hours required to complete your technology project.",
    data: "If your strategy, specifications, and requirements are not fixed, choose an hourly-based model, which is the most suitable option for the implementation of projects involving website updates, maintenance, support, debugging, and R&D tasks.",
    listitem1: "Great Flexibility",
    listitem2: "Real-time Monitoring & Quick Adjustments",
    listitem3: "Quick-start",
    listitem4: "Better Risk Management",
    model: "hourlybased",
  },
  {
    id: 3,
    description:
      "In this business model, we will provide you with a dedicated team, for which you will be required to pay for the project on a monthly basis.",
    data: "Our team will work only for your organization to complete the project within the agreed timelines.",
    listitem1: "Flexible Project Scope",
    listitem2: "Undivided Focus of the Team",
    listitem3: "Exclusive Resources",
    listitem4: "In-depth understanding",
    model: "dedicated",
  },
];

export default function EngagementModel({ mb }) {
  const [selectedModel, setSelectedModel] = useState("fixedcost");

  return (
    <MaxWidthWrapper backgroundColor={Colors.$primary_color}>
      <div id="engagementModelWrapper" style={{ marginBottom: mb }}>
        <div className="top">
          <div className="left">
            <div className="title-main-wrapper">
              <div className="title-main">
                CHOOSE YOUR MOST CONVENIENT WORKING MODEL
              </div>
            </div>
            <h3 className="heading">Engagement Model Differences</h3>

            <div className="businessmodel-graphic desktop">
              <div className="businessmodel-graphic-image">
                <div className="graphic-images">
                  {selectedModel == "fixedcost" && (
                    <Image
                      src={AppImages.EngagementFixedCost}
                      className="mainImage fixedcost"
                      height={200}
                      width={200}
                      alt=""
                    />
                  )}
                  {selectedModel == "hourlybased" && (
                    <Image
                      src={AppImages.EngagementHourly}
                      className="mainImage engagementhour"
                      alt=""
                      height={200}
                      width={200}
                    />
                  )}
                  {selectedModel == "dedicated" && (
                    <Image
                      src={AppImages.EngagementDedicatedModel}
                      className="mainImage dedicatemodel"
                      alt=""
                      height={200}
                      width={200}
                    />
                  )}
                  <Image
                    src={AppImages.EngagementClient}
                    className={`mainImage ${selectedModel == "fixedcost" ? "oneImg" : "threeImg"
                      }`}
                    alt=""
                    height={200}
                    width={200}
                  />
                  <Image
                    src={AppImages.EngagementArrow1}
                    className="mainImage arrow1"
                    alt=""
                    height={200}
                    width={200}
                  />
                  <Image
                    src={AppImages.EngagementManager}
                    className={`mainImage ${selectedModel == "hourlybased"
                        ? "oneImg"
                        : selectedModel == "dedicated"
                          ? "twoImg"
                          : "threeImg"
                      }`}
                    height={200}
                    width={200}
                    alt=""
                  />
                  <Image
                    src={AppImages.EngagementArrow2}
                    className="mainImage arrow2"
                    alt=""
                    height={200}
                    width={200}
                  />
                  <Image
                    src={AppImages.EngagementTeam}
                    className={`mainImage ${selectedModel == "dedicated" ? "oneImg" : "twoImg"
                      }`}
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <ul>
              <li
                className={`business-list-item ${selectedModel == "fixedcost" && "active"
                  }`}
                onClick={() => {
                  setSelectedModel("fixedcost");
                }}
              >
                <RiMoneyDollarCircleLine size={23} /> Fixed cost
              </li>
              <li
                className={`business-list-item ${selectedModel == "hourlybased" && "active"
                  }`}
                onClick={() => {
                  setSelectedModel("hourlybased");
                }}
              >
                <GiSandsOfTime size={20} />
                Hourly Based
              </li>
              <li
                className={`business-list-item ${selectedModel == "dedicated" && "active"
                  }`}
                onClick={() => {
                  setSelectedModel("dedicated");
                }}
              >
                <TbUserSquare size={23} /> Dedicated
              </li>
            </ul>

            {EngagementModel1.map((item, index) => {
              if (item.model == selectedModel) {
                return (
                  <div key={index} className="fixedcost-tab desktop ">
                    <p>{item.description}</p>
                    <p>{item.data}</p>
                    <ul className="grid">
                      <li className="grid-list-item">{item.listitem1}</li>
                      <li className="grid-list-item">{item.listitem2}</li>
                      <li className="grid-list-item">{item.listitem3}</li>
                      <li className="grid-list-item">{item.listitem4}</li>
                    </ul>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-div">
            <div className="businessmodel-graphic tablet">
              <div className="businessmodel-graphic-image">
                <div className="graphic-images">
                  {selectedModel == "fixedcost" && (
                    <Image
                      src={AppImages.EngagementFixedCost}
                      className="mainImage fixedcost"
                      alt=""
                      height={200}
                      width={200}
                    />
                  )}
                  {selectedModel == "hourlybased" && (
                    <Image
                      src={AppImages.EngagementHourly}
                      className="mainImage engagementhour"
                      alt=""
                      height={200}
                      width={200}
                    />
                  )}
                  {selectedModel == "dedicated" && (
                    <Image
                      src={AppImages.EngagementDedicatedModel}
                      className="mainImage dedicatemodel"
                      alt=""
                      height={200}
                      width={200}
                    />
                  )}
                  <Image
                    src={AppImages.EngagementClient}
                    className={`mainImage ${selectedModel == "fixedcost" ? "oneImg" : "threeImg"
                      }`}
                    alt=""
                    height={200}
                    width={200}
                  />
                  <Image
                    src={AppImages.EngagementArrow1}
                    className="mainImage arrow1"
                    alt=""
                    height={200}
                    width={200}
                  />
                  <Image
                    src={AppImages.EngagementManager}
                    className={`mainImage ${selectedModel == "hourlybased"
                        ? "oneImg"
                        : selectedModel == "dedicated"
                          ? "twoImg"
                          : "threeImg"
                      }`}
                    alt=""
                    height={200}
                    width={200}
                  />
                  <Image
                    src={AppImages.EngagementArrow2}
                    className="mainImage arrow2"
                    alt=""
                    height={200}
                    width={200}
                  />
                  <Image
                    src={AppImages.EngagementTeam}
                    className={`mainImage ${selectedModel == "dedicated" ? "oneImg" : "twoImg"
                      }`}
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
              </div>
            </div>
          </div>
          {EngagementModel1.map((item, index) => {
            if (item.model == selectedModel) {
              return (
                <div key={index} className="fixedcost-tab  tablet ">
                  <p className="description">{item.description}</p>
                  <p>{item.data}</p>
                  <ul className="grid">
                    <li className="grid-list-item">{item.listitem1}</li>
                    <li className="grid-list-item">{item.listitem2}</li>
                    <li className="grid-list-item">{item.listitem3}</li>
                    <li className="grid-list-item">{item.listitem4}</li>
                  </ul>
                </div>
              );
            }
          })}
        </div>
      </div>

    </MaxWidthWrapper>
  );
}
