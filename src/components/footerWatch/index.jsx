import React from "react";
import "./footerWatch.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import Link from "next/link";

import dynamic from "next/dynamic";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const Clock = dynamic(() => import("../common/Clock"), { ssr: false });
function Footerwatch() {
  return (
    <MaxWidthWrapper backgroundColor={"#faf9f8"}>
      <div className="FooterwatchMain">
        <div className="wrapper">
          <Link className="logoLink" href={"#"}>
            {/* min-width: 220px; */}
            {/* <Image src={AppImages.logoPixWithName} /> */}
            <h1>Sicilian Tech</h1>
          </Link>
          <div className="center">
            <p>
              Siciliantech, an Indian web development company since 2007,
              creates digital solutions for global clients in web design,
              eCommerce, mobile apps, and SEO. We offer comprehensive services
              to enhance businesses' online presence with our expert team.
            </p>
            <div className="clock-container">
              <Clock />
            </div>
          </div>
          <div className="last-peragraph">
            <h5>siciliantech Infotech Private Limited</h5>
            <p>
              B 401, Wing B, Safal Pegasus, Opposite Venus Atlantis, Near Shell
              Petrol Pump, Behind Mc Donald, Satellite, Prahlad Nagar,
              Ahmedabad, Gujarat 380015
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Footerwatch;
