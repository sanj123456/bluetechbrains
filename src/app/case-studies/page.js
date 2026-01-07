"use client";
import BlogCard from "@/components/BlogCard";
import "./cases.scss";
import PortfolioBanner from "@/components/Portfolio/PortfolioBanner";
import { CaseStudiesData } from "@/JsonData/caseStudiesData";
import dynamic from "next/dynamic";
import { useState } from "react";
import { CgSearchLoading } from "react-icons/cg";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import SectionTitle from "@/components/common/SectionTitle";
const CaseCards = dynamic(() => import("@/components/caseStudies/caseCards"));
const Disclaimer = dynamic(() => import("@/components/Portfolio/Disclaimer"));
const LetsConnect = dynamic(() => import("@/components/common/LetsConnect"));
const OurClientsFrom = dynamic(() =>
  import("@/components/Portfolio/OurClientsFrom")
);
const StaggerComponent = dynamic(() =>
  import("../../components/StaggerEffect/Stagger")
);
const Blogs = dynamic(() => import("@/components/Blogs/Blogs"));
const KnowMore = dynamic(() => import("@/components/common/KnowMore"), {
  ssr: true,
});
const EngagementModel = dynamic(
  () => import("@/components/EngagementModel/EngagementModel"),
  { ssr: true }
);
const OurWorkingMethod = dynamic(
  () => import("@/components/OurWorkingMethod"),
  { ssr: true }
);
const Testomonials = dynamic(() => import("@/components/Testomonials"), {
  ssr: true,
});
export default function CaseStudies() {
  const bannerData = {
    content: `Discover how we create custom websites, apps and mobile apps that not only look great but also perform exceptionally well and deliver outstanding results based on our clients' unique needs. Take a closer look at our case studies to see how our expertise in web design and development has helped our clients achieve their goals.`,
    img: "/case-studies-bg.jpg",
    heading: "Case Studies",
  };

  const [filterCasesList, setFilterCasesList] = useState([...CaseStudiesData]);
  const filterCases = (searchQuery) => {
    const tempFilterCases = CaseStudiesData.filter(({ heading }) => {
      if (heading.toLowerCase().includes(searchQuery.toLowerCase())) return true;
      else return false;
    });
    setFilterCasesList(tempFilterCases);
  };

  return (
    <MaxWidthWrapper>
    <div id="cases">
      <PortfolioBanner
        content={bannerData.content}
        heading={bannerData.heading}
        imgSrc={bannerData.img}
      />
      <section className="searchAndTagline">
        <SectionTitle topTitle={"OUR CASE STUDIES"} title={"Our Best Case Studies"}/>
        {/* <div className="Title-container">
          <span className="top-title">OUR CASE STUDIES</span>
          <h2 className="bottom-title">
            <StaggerComponent text={"Our Best Case Studies"} />
          </h2>
        </div> */}
        <div className="searchBar-container">
          <div className="searchbar">
            {" "}
            <input
              onChange={(e) => {
                filterCases(e.target.value);
              }}
              placeholder="Search Our Case Studies..."
            />
            <div className="searchIcon">
              {" "}
              <CgSearchLoading size={30} />
            </div>
          </div>
        </div>
      </section>
      <section className="cases-container">
        {filterCasesList.map((data) => (
          <BlogCard blog={data} baseUrl="/case-studies"/>
        ))}
      </section>
      {/* <CaseCards /> */}
      <Disclaimer />
      <LetsConnect />
      <KnowMore />
      <OurClientsFrom />
      <EngagementModel />
      <OurWorkingMethod />
      <Testomonials />
      <Blogs />
    </div>
    </MaxWidthWrapper>
  );
}
