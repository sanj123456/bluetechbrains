import React from "react";
import "./whatwedodont.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";

export default function WhatWeDoDont() {
  const weDo = [
    "Go above and beyond in everything",
    "Creativity before monotony",
    "Attention to details & rewards to deserving",
    "Customer relationships above everything",
    "All work and no play, makes Jack a dull boy",
    "We love Chai and Coffee too",
  ];
  const weDoNot = [
    "We don't overpromise and underdeliver",
    "Never neglect employee feedback",
    "Big no to setting unrealistic deadlines",
    "Don't allow unprofessionalism",
    "Never ignore employee well-being",
    "No cut down on employee fun activities",
  ];
  return (
    <div className="whatWeDoContainer">

    <div id="whatwedo">
      <div className="section-container">
        <div className="we-do">
          <div className="title1">
            <h2>What We</h2>
            <Image src={AppImages.TrueIcon}/>
          </div>
          <h3 className="title2">Do</h3>
          <ul>
            {weDo.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="we-do-not">
          <div className="title1">
            <h2>What We</h2>
            <Image src={AppImages.FalseIcon}/>
          </div>
          <h3 className="title2">Don't</h3>
          <ul>
            {weDoNot.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
