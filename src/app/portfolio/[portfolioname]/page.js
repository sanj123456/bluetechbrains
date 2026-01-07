"use client";
import Loader from "@/components/Loader";
import PortfolioDetailHeroBanner from "@/components/PortfolioDetail/PortfolioDetailHeroBanner";
import PortfolioSwiper from "@/components/PortfolioDetail/PortfolioSwiper";
import { AllPortfolioData } from "@/JsonData/portfolioData";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

const TechWeUsed = dynamic(() => import("@/components/PortfolioDetail/TechWeUsed"));
const PortfolioDetailSection = dynamic(() => import("@/components/PortfolioDetail/PortfolioDetailSection"));
const WhatNextCards = dynamic(() => import("@/components/PortfolioDetail/WhatNextCards"));
const LetsConnect = dynamic(() => import("@/components/common/LetsConnect"));
const OurClientsFrom = dynamic(() => import("@/components/Portfolio/OurClientsFrom"));
const Blogs = dynamic(() => import("@/components/Blogs/Blogs"));

export default function PortfolioDetail({ params }) {
  const slug = params?.portfolioname;
  const pageData = AllPortfolioData.find(
    (item) => slug?.toLowerCase() === item.slug?.toLowerCase()
  );

  if (!pageData) {
    notFound();
  }

  const currentIndex = AllPortfolioData.findIndex(
    (item) => item.slug?.toLowerCase() === slug?.toLowerCase()
  );

  const nextCards = [];
  for (let i = 1; i <= 3; i++) {
    nextCards.push(AllPortfolioData[(currentIndex + i) % AllPortfolioData.length]);
  }

  return (
    <>
      <PortfolioDetailHeroBanner bannerData={pageData} />
      <PortfolioSwiper images={pageData.images} />
      <Suspense fallback={<Loader/>}>
      <TechWeUsed
        technologyData={pageData.technologies}
        responsibleData={pageData.responsibleFor}
      />
      <PortfolioDetailSection projectName={pageData.projectName} portfolioDetail={pageData.portfolioDetail} />
        <WhatNextCards cardsData={nextCards} baseurl={"portfolio"}/>
      <LetsConnect />
      <OurClientsFrom />
      <Blogs />
      </Suspense>
    </>
  );
}
