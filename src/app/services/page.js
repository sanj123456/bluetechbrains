import ServicesHeroBanner from "@/components/Services/ServicesHeroBanner";
import Brands from "@/components/Brands/Brands";
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const ServicesSection = dynamic(() => import("@/components/Services/ServicesSection"));
const TechnologyWe = dynamic(() => import("@/components/TechnologyWe/TechnologyWe"));
const LetsConnect = dynamic(() => import("@/components/common/LetsConnect"));
const OurWorkingMethod = dynamic(() => import("@/components/OurWorkingMethod"));
const EngagementModel = dynamic(() => import("@/components/EngagementModel/EngagementModel"));
const OurWork = dynamic(() => import("@/components/OurWork"));
const Testomonials = dynamic(() => import("@/components/Testomonials"));
const Faq = dynamic(() => import("@/components/Faq"));
const Blogs = dynamic(() => import("@/components/Blogs/Blogs"));

export default function services() {
  return (
    <>
      <ServicesHeroBanner />
      <Brands />
      <Suspense fallback={<Loader />}>
        <ServicesSection />
        <TechnologyWe />
        <LetsConnect />
        <OurWorkingMethod />
        <EngagementModel />
        <OurWork />
        <Testomonials />
        <Faq />
        <Blogs />
      </Suspense>
    </>
  );
}
