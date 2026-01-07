import React from "react";
import "./whatnextcards.scss";
import Link from "next/link";
import Image from "next/image";
import SwipeButton from "@/components/common/SwipeButton";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

export default function WhatNextCards({ cardsData, baseurl }) {

  return (
    <MaxWidthWrapper>

    <div id="suggested-cards">
      <div className="wrapper">
        <div className="title-box">
          <h2>What's Next?</h2>
        </div>
        <div className="cards-box">
          {cardsData.map((work, index) => (
            <div key={index} className="card">
              <Link href={`/${baseurl}/${work.slug}`} className="image-link" draggable={false}>
                <figure className="work-image-box">
                  <Image
                    width={2560}
                    height={3785}
                    src={work?.cardImage}
                    draggable={false}
                    className="hover-bg-img"
                  />
                  <Image
                    width={2560}
                    height={3785}
                    src={work?.cardImage}
                    draggable={false}
                    className="work-img"
                  />
                </figure>
              </Link>
              <div className="work-content">
                <Link href={`/${baseurl}/${work.slug}`}>
                  <h2 className="work-title">{work.projectName}</h2>
                </Link>
                <p className="work-subtitle">{work.industryName}</p>
                {baseurl === "case-studies" && <p className="short-info">{work.description}</p>}
                <div className="technologies">
                  <ul>
                    {work.technologies.map((item, index) => {
                      return <li key={index}>{item.name}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="load-more">
          <SwipeButton text={"View All"} changeHoverColor={false} href={"/"+baseurl} />
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
}
