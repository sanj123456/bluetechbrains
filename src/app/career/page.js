import Blogs from "@/components/Blogs/Blogs";
import CareerHeroBanner from "@/components/career/CareerHeroBanner";
import CurrentOpenings from "@/components/career/CurrentOpenings";
import EmployeeSpeaks from "@/components/career/EmployeeSpeaks";
import HiringProcess from "@/components/career/HiringProcess";
import HrSpeaks from "@/components/career/HrSpeaks";
import Perks from "@/components/career/Perks";
import WhatWeDoDont from "@/components/career/WhatWeDoDont";
import Infrastructureforabout from "@/components/Infrastructureforabout/Infrastructureforabout";
import React from "react";

export default function Career() {
  return (
    <>
      <CareerHeroBanner />
      <CurrentOpenings />
      <HiringProcess />
      <EmployeeSpeaks />
      <Infrastructureforabout />
      <WhatWeDoDont />
      <Perks />
      <HrSpeaks />
      <Blogs />
    </>
  );
}
