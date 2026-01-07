import React from "react";
import "./disclaimer.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Colors } from "@/styles/colors";

export default function Disclaimer() {
  return (
    <MaxWidthWrapper backgroundColor={Colors.$primary_color} className={"disclaimer-wrapper"}>

    <div id="disclaimer">
      <div className="disclaimer-box">
        <Image src={AppImages.PrivacyIcon} height={38} width={38} alt=""/>
        <div className="disclaimer-info">
            <h6>Disclaimer</h6>
            <p>We have not disclosed all of our projects here due to NDA protocols. The ones listed here have been included with our customers’ consent.</p>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
}
