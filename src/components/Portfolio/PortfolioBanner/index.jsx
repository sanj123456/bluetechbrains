// components/PortfolioBanner.js
import React from "react";
import "./portfoliobanner.scss";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import the BackLink component with SSR disabled
const BackLink = dynamic(() => import("./BackLink"), { ssr: false });

const PortfolioBanner = ({
  content,
  imgSrc,
  heading,
  backLinkName,
}) => {
  return (
    <div id="portfolio">
      <figure>
        <Image src={imgSrc} height={500} width={500} alt=""/>
      </figure>
      <div className="banner-box">
        {backLinkName ? <BackLink backLinkName={backLinkName} /> : ""}
        <h1 className="banner-title">{heading}</h1>
        <p className="banner-detail">{content}</p>
      </div>
    </div>
  );
};

export default PortfolioBanner;
