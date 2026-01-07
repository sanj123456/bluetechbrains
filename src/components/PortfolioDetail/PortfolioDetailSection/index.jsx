import React from "react";
import "./portfoliodetailsection.scss";
import Image from "next/image";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import SectionTitle from "@/components/common/SectionTitle";

export default function PortfolioDetailSection({
  projectName,
  portfolioDetail,
  toptitle,
}) {
  return (
    <MaxWidthWrapper>
      <div id="portfoliodetailsection">
        <SectionTitle topTitle={toptitle || "About"} title={projectName} />
        {portfolioDetail.map((item) => {
          return (
            <div className="card-box">
              <div className="left">
                <h1>{item.title}</h1>
                <div className="overlap-box">
                  <h1>{item.title}</h1>
                  {item.paragraphs?.map((para, i) => {
                    return <p key={i}>{para}</p>;
                  })}
                  {item.list && (
                    <ul>
                      {item.list?.map((item, i) => {
                        return <li key={i}>{item}</li>;
                      })}
                    </ul>
                  )}
                </div>
              </div>
              <div className="right">
                <Image src={item.image} height={900} width={1200} />
              </div>
            </div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
}
