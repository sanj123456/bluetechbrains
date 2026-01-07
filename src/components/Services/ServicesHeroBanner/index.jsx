import React from "react";
import "./servicesherobanner.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import SwipeButton from "@/components/common/SwipeButton";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

export default function ServicesHeroBanner() {
  return (
    <MaxWidthWrapper  >
    <div id="services-banner">
      <div className="banner-container">
        <div class="hero-content">
          <h1>Web and App Services</h1>
          <p>
            siciliantech provides the best-in-class web &amp; app design and
            development services to improve your online presence. We are India's
            leading web design and development company, providing highly
            professional IT services. Since 2007, more than 500 companies from a
            variety of global industries have relied on our team as a reliable
            tech partner. To receive one-stop business solutions, schedule a
            call.
          </p>
          <ul class="tech-listing">
            <li>Website Development</li>
            <li>Web Design</li>
            <li>eCommerce Development</li>
            <li>UI/UX Design</li>
            <li>Mobile App Development</li>
            <li>Design to Website</li>
            <li>Custom Web Development</li>
            <li>Organic SEO</li>
            <li>API Development</li>
            <li>Dedicated Development Team</li>
          </ul>{" "}
          <SwipeButton text={"Let's Connect"} wrapperClass="connect-btn" href="/get-a-quote"/>
        </div>
        <div class="hero-image-box">
          <Image src={'/vec.png'} height={500} width={500} alt=""/>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
}
