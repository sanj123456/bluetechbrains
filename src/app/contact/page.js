import React from "react";
import "./contact.scss";
import Contactus from "@/components/Contactus/contactus";
import Infrastructure from "@/components/Infrastructure/Infrastructure";
import OurClientsFrom from "@/components/Portfolio/OurClientsFrom";
import dynamic from "next/dynamic";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Colors } from "@/styles/colors";

const DynamicGlobeComponent = dynamic(
  () => import("../../components/glob/index"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <div className="main-contact-container">
      <Contactus />
      {/* <Infrastructure /> */}
      <MaxWidthWrapper backgroundColor={Colors.$primary_color}>
        <div className="glob-wrapper">
          <DynamicGlobeComponent />
          <div className="right-box">
            <div className="box-wrapper">
              <h2>Software Development Company</h2>
              <div className="process-box">
                <h4>Sicilian Tech, 300+ Projects Delivered</h4>
                <ul class="listing">
                  <li>Accelerated Development Cycle</li>
                  <li>100% In-House Team, No Freelancers</li>
                  <li>Fully Confidential, Strict NDA</li>
                  <li>
                    Clients include Startups, SMEs, Enterprises, Fortune 500
                    Companies
                  </li>
                  <li>Free POC & Consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <OurClientsFrom />
    </div>
  );
};

export default page;
