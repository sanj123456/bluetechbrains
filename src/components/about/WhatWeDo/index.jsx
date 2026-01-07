import React from "react";
import "./whatWeDo.scss";
import StaggerText from "@/components/StaggerEffect/Stagger";
import Image from "next/image";
import { Icons } from "@/assets/Icons";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
const whatWeDoDat = [
  {
    head: "Strategy",
    content:
      "Making strategy to develop a solution as per your business goals is the first step.",
    icon: Icons.wwdStrtegy,
  },
  {
    head: "Design",
    content:
      "Shaping your business growth by designing through innovative and pioneering initiatives.",
    icon: Icons.wwdDesign,
  },
  {
    head: "Technology",
    content:
      "We accelerate your progress with cutting-edge technology with the power of originality.",
    icon: Icons.wwdTechnology,
  },
];
export default function WhatWeDo() {
  return (
    <MaxWidthWrapper>
    <section className="whatWeDoMain">
      <div className="top">
        <h2 className="title">
          <span className="what">What</span>
          <span className="wedo"> We Do</span>
        </h2>

        <div className="peragraph">
          <p>
            Our innovative technology services comprise website design, web
            development, ecommerce development, mobile app development, and
            digital marketing & SEO. We have enabled thousands of clients to
            reach their business objectives globally!
          </p>
          <p>
            Our team of skilled professionals creates visually appealing and
            functional websites and web applications, ensuring optimal user
            experience and driving online growth for our clients. With a
            client-centric approach, we strive to deliver tailored solutions
            that align with our clients' specific needs and goals.
          </p>
        </div>
      </div>

      <div className="bottomPrinciples">
        <h2 className="heading">
        
          We can successfully advance your business using three principles
        </h2>

        <div className="card-container">
          {whatWeDoDat.map(({ content, head, icon }, i) => (
            <div key={i} className="what-we-do-card">
              <div className="content">
                <div className="circleTitle">
                  <div className="number">
                    <span>0{i}</span>
                    <div className="line"></div>
                  </div>

                  <h4>{head}</h4>
                </div>
                <div className="peragraphData">
                  <p>{content}</p>
                </div>
              </div>
              <figure className="icon">
                <Image src={icon} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>

    </MaxWidthWrapper>
  );
}
