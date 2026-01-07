"use client";
import "./casedetail.scss";
import BlogCard from "@/components/BlogCard";
import { Icons } from "@/assets/Icons";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Loader from "@/components/Loader";
import PortfolioBanner from "@/components/Portfolio/PortfolioBanner";
import PortfolioDetailHeroBanner from "@/components/PortfolioDetail/PortfolioDetailHeroBanner";
import PortfolioSwiper from "@/components/PortfolioDetail/PortfolioSwiper";
import { CaseStudiesData } from "@/JsonData/caseStudiesData";
import dynamic from "next/dynamic";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import { MdWifiCalling3 } from "react-icons/md";

// const ProjectBrief = dynamic(() =>
//   import("@/components/caseStudies/projectBrief")
// );
// const TechWeUsed = dynamic(() =>
//   import("@/components/PortfolioDetail/TechWeUsed")
// );
// const WhatNextCards = dynamic(() =>
//   import("@/components/PortfolioDetail/WhatNextCards")
// );
const Testomonials = dynamic(() => import("@/components/Testomonials"));
const Faq = dynamic(() => import("@/components/Faq"));
const StaggerText = dynamic(() => import("@/components/StaggerEffect/Stagger"));
const Blogs = dynamic(() => import("@/components/Blogs/Blogs"));

export default function CaseDetail({ params }) {
  const slug = params?.casename;
  const pageData = CaseStudiesData.find(
    (item) => slug?.toLowerCase() === item.slug?.toLowerCase()
  );

  if (!pageData) {
    notFound();
  }

  const currentIndex = CaseStudiesData.findIndex(
    (item) => item.slug?.toLowerCase() === slug?.toLowerCase()
  );

  const nextCards = [];
  const currentCase = CaseStudiesData[currentIndex];
  
  for (let i = 1; i <= 3; i++) {
    const nextCase = CaseStudiesData[(currentIndex + i) % CaseStudiesData.length];
    if (nextCase !== currentCase) {
      nextCards.push(nextCase);
    }
    if (nextCards.length === 3) break;
  }

  const bannerData = {
    content: `Discover how we create custom websites, apps and mobile apps that not only look great but also perform exceptionally well and deliver outstanding results based on our clients' unique needs. Take a closer look at our case studies to see how our expertise in web design and development has helped our clients achieve their goals.`,
    img: pageData.img,
    heading: "Case Studies",
  };

  return (
    <div>
      {/* <PortfolioDetailHeroBanner bannerData={pageData} /> */}
      <PortfolioBanner
        content={bannerData.content}
        heading={bannerData.heading}
        imgSrc={bannerData.img}
      />
      {/* <PortfolioSwiper images={pageData.images} />
      <Suspense fallback={<Loader />}>
        <ProjectBrief data={pageData.briefData} />
        <TechWeUsed
          technologyData={pageData.technologies}
          responsibleData={pageData.responsibleFor}
        />
        <ProjectBrief data={pageData.keyBenefitData} />
        <WhatNextCards cardsData={nextCards} baseurl={"case-studies"}/>
        <Testomonials />
        <Faq />
        <Blogs />
      </Suspense> */}
      <MaxWidthWrapper>
        <div id="casedetail">
          <div className="top">
            <div className="Title-container">
              <h1 className="bottom-title">
                <StaggerText text={pageData.heading} />
              </h1>
            </div>

            <div className="short-info">
              <ul>
                {pageData.tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
              <span>{pageData.date}</span>
            </div>
          </div>

          <section className="blog-container">
            <div className="blog-image">
              <Image src={pageData.img} height={400} width={500} />
            </div>
            <div className="blog-content">
              <h1>{pageData.firstTitle}</h1>
              <div className="main-paras">
                {pageData.mainParagraphs?.map((para, i) => {
                  return <p key={i}>{para}</p>;
                })}
              </div>
              <div className="center-contnent">
                {pageData.centerContent.map((data, index) => {
                  return (
                    <div key={index} className="card">
                      <div className="img-conatainer">
                        <Image width={1000} height={1000} src={data?.img} />
                      </div>
                      <div className="data-container">
                        {data.title && (
                          <h1 className="card-title">{data?.title}</h1>
                        )}
                        {data.paras &&
                          data.paras.map((item, i) => {
                            return <p key={i}>{item}</p>;
                          })}
                        {data.listTitle && (
                          <h2 className="list-title">{data.listTitle}</h2>
                        )}
                        {data.list && (
                          <ul>
                            {data.list.map((item, i) => {
                              return <li key={i}>{item}</li>;
                            })}
                          </ul>
                        )}
                        {data.parasBelowList &&
                          data.parasBelowList.map((item, i) => {
                            return <p key={i}>{item}</p>;
                          })}
                      </div>
                    </div>
                  );
                })}
              </div>
              {pageData.mainData && (
                <div className="content-box">
                  <div className="left-box">
                    <div className="title-main-wrapper">
                      <div className="title-main">
                        LET’S DISCUSS YOUR PROJECT
                      </div>
                    </div>
                    <h2 className="heading">Get in Touch Now!</h2>
                    <p>
                      Have a word with our expert consultants about your next
                      project to get suggestive guidance & proposal.
                    </p>

                    <div className="contact-list-container">
                      <div className="contact-list">
                        <h5 className="head">Sales Inquiry</h5>
                        <ul className="contact-cards">
                          <li>
                            <a className={"list"} href="">
                              <Image
                                height={18}
                                src={Icons.email}
                                alt="Email Icon"
                              />{" "}
                              info@siciliantech.com
                            </a>
                          </li>
                          <li>
                            <a className={"list"} href="">
                              {" "}
                              <Image
                                height={18}
                                src={Icons.skype}
                                alt="Skype Icon"
                              />
                              siciliantech
                            </a>
                          </li>
                          <li className={"list"}>
                            <MdWifiCalling3 size={26} />
                            <div className="dialer-container">
                              <a href={`tel:+917778865391`} className="dialer">
                                +91 7778865391 <span>(INDIA)</span>
                              </a>
                              <a href={`tel:+917778865391`} className="dialer">
                                +1 (323) 886-5391<span> (USA) </span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="right-box">
                    {pageData.mainData.map((item) => {
                      return (
                        <>
                          <h1>{item.title}</h1>
                          {item.paras && (
                            <div className="main-paras">
                              {item.paras?.map((para, i) => {
                                return <p key={i}>{para}</p>;
                              })}
                            </div>
                          )}
                          {item.list && (
                            <ul className="list">
                              {item.list.map((item, i)=> (
                                <li key={i} className="list-item">{item}</li>
                              ))}
                            </ul>
                          )}
                          {item.subData &&
                            item.subData.map((subItem) => {
                              return (
                                <>
                                  {subItem.title && <h2 className="sub-item-title">{subItem.title}</h2>}
                                  {subItem.paras && subItem.paras.map((item, i)=>(
                                    <p key={i} className="small-para">{item}</p>
                                  ))}
                                  {subItem.data &&
                                    subItem.data.map((data) => {
                                      return (
                                        <>
                                          <h4>{data.subTitle}</h4>
                                          {data.subParas.map((item) => {
                                            return (
                                              <p className="small-para">
                                                {item}
                                              </p>
                                            );
                                          })}
                                        </>
                                      );
                                    })}
                                </>
                              );
                            })}
                        </>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
        <div>
          <div className="title-box" style={{ paddingInline: "32px" }}>
            <h2>What's Next?</h2>
          </div>
          <section className="cases-container">
            {nextCards.map((data) => (
              <BlogCard blog={data} baseUrl="/case-studies" />
            ))}
          </section>
        </div>
      </MaxWidthWrapper>
      <Testomonials />
      <Faq />
      <Blogs />
    </div>
  );
}
