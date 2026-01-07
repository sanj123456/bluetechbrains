import { AppImages } from "@/assets/AppImages";
// import Blogs from "@/components/Blogs/Blogs";
import Bottomfooter from "@/components/BottomFooter/Bottomfooter";
// import LetsConnect from "@/components/common/LetsConnect";
import FooterRedirection from "@/components/FooterRedirections";
import Footerwatch from "@/components/footerWatch";
import GetInTouchNow from "@/components/GetInTouchNow";
import Loader from "@/components/Loader";
// import Disclaimer from "@/components/Portfolio/Disclaimer";
// import OurClientsFrom from "@/components/Portfolio/OurClientsFrom";
import PortfolioBanner from "@/components/Portfolio/PortfolioBanner";
// import PortfolioCards from "@/components/Portfolio/PortfolioCards";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const Disclaimer = dynamic(() => import("@/components/Portfolio/Disclaimer"));
const PortfolioCards = dynamic(() => import("@/components/Portfolio/PortfolioCards"));
const LetsConnect = dynamic(() => import("@/components/common/LetsConnect"));
const OurClientsFrom = dynamic(() => import("@/components/Portfolio/OurClientsFrom"));
const Blogs = dynamic(() => import("@/components/Blogs/Blogs"));
const portfolioData = {
  content: `At our web agency, we take pride in showcasing our work to demonstrate
          our expertise in web design, development and mobile app. Our portfolio
          encompasses a diverse range of projects, from e-commerce websites to
          custom web applications, and we always strive to exceed our clients'
          expectations. Explore our work and see for yourself what we can do for
          your online presence.`,
  img: "/groupp.jpg",
  heading: "Our Work"
}
export default function Portfolio() {
  return (
    <>
      <PortfolioBanner content={portfolioData.content} heading={portfolioData.heading} imgSrc={portfolioData.img} />
      <Suspense fallback={<Loader/>}>
      <PortfolioCards />
      <Disclaimer />
      <LetsConnect />
      <OurClientsFrom />
      <Blogs />
      </Suspense>
    </>
  );
}
