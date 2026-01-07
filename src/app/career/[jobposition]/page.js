"use client";
import JobDetailHeroBanner from "@/components/JobDetail/JobDetailHeroBanner";
import { currentOpeningsData } from "@/JsonData/currentOpeningsData";
import React, { useRef } from "react";
import JobApplyForm from "@/components/JobDetail/JobApplyForm";
import JobDetailSection from "@/components/JobDetail/JobDetailSection";
import { notFound } from "next/navigation";

export default function JobDetail({ params }) {
  const position = params.jobposition.replace(/-/g, " ");
  const pageData = currentOpeningsData?.find(
    (item) => position?.toLowerCase() === item.position?.toLowerCase()
  );
  if (!pageData) {
    notFound();
  }

  const jobApplyFormRef = useRef(null);

  const scrollToJobApplyForm = () => {
    jobApplyFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <JobDetailHeroBanner
        data={pageData}
        onApplyNowClick={scrollToJobApplyForm}
      />
      <JobDetailSection data={pageData} />
      <div ref={jobApplyFormRef} style={{scrollMarginTop: "70px"}}>
        <JobApplyForm data={pageData} />
      </div>
    </>
  );
}
