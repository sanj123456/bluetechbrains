import React from "react";
import "./Businesses.scss";
import Image from "next/image";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import SectionTitle from "../common/SectionTitle";
const Businesses = () => {
  
  const data = [
    {
        img: "/healthcare.svg",
        text: "Healthcare",
    },
    {
        img: "/travel.svg",
        text: "Travel",
    },
    {
        img: "/professional-business.svg",
        text: "Business",
    },
    {
        img: "/education.svg",
        text: "Education",
    },
    {
        img: "/retailestate.svg",
        text: "Retail & Ecommerce",
    },
    {
        img: "/media.svg",
        text: "Media",
    },
    {
        img: "/event.svg",
        text: "Events",
    },
    {
        img: "/food.svg",
        text: "Food",
    },
    {
        img: "/atuomotive.svg",
        text: "Automotive",
    },
    {
        img: "/fashion.svg",
        text: "Fashion",
    },
    {
        img: "/finance.svg",
        text: "Finance",
    },
    {
        img: "/real-estate.svg",
        text: "Real Estate",
    }
];

  return (
    <MaxWidthWrapper backgroundColor={"#fbfbff"}>
      <div className="business-container">
        <div className="wrapper-div">
          <SectionTitle topTitle={"PROVIDED DIGITAL SOLUTIONS TO"} title={"Businesses of Diverse Industries"}/>
          <div className="icons">
            {data?.map((item, index) => (
              <>
                <div key={index} className="data-wrapper">
                  <Image height={48} width={48} src={item?.img} />
                  <p>{item?.text}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Businesses;
