"use client";
import React, { useEffect } from "react";
import "./ourWorkingMethod.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import SwipeButton from "../common/SwipeButton";
import { SiAzuredataexplorer } from "react-icons/si";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import SectionTitle from "../common/SectionTitle";
export default function OurWorkingMethod() {

    useEffect(() => {
    const myDiv = document.getElementById("ourWorkingMethod-main");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
           myDiv.classList.add("animation");
          }  
        });
      },
     
    ); // Adjust threshold as needed

    observer.observe(myDiv);    

    return ()=>{
      observer.disconnect();
    }

    },[])
  return (
    <MaxWidthWrapper backgroundColor={"#fcfcfc"}>
    <div className="ourWorkingMethod">
      <SectionTitle topTitle={"ACCELERATE YOUR SUCCESS WITH AGILE DRIVE"} title={"Our Working Method"}/>
      <div id="ourWorkingMethod-main" className="img-conatiner ">
        <figure>
          <Image height={400} width={400} className="main-img" src={'/animation4.gif'} />
        </figure>
      </div>
      <div className="btn">
        <SwipeButton
          text={"Explore Our Portfolio"}
          href="/portfolio"
          bgColorAsClass={"bg-primary"}
          changeHoverColor={false}
          // icon={<SiAzuredataexplorer size={20} />}
        />
      </div>
      </div>
      
    </MaxWidthWrapper>
  );
}
