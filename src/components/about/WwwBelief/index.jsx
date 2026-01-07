import React from "react";
import "./WwwBelief.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import { Icons } from "@/assets/Icons";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import SectionTitle from "@/components/common/SectionTitle";
const cards = [
  {
    img: Icons.wwwClient,
    head: "Client Win",
    content:
      "When client receives what is committed, they can see their investment was worth it. And siciliantech makes sure to not let them down.",
  },
  {
    img: Icons.wwwCompany,
    head: "Company Win",
    content:
      "When things go as planned, company gains trust of the client & a number of referrals. Positive feedback from the client is what we seek for!",
  },
  {
    img: Icons.wwwResource,
    head: "Resource Win",
    content:
      "Doing proper planning leads to a seamless execution, which ensures our resources have a good work-life balance & stressfree job.",
  },
];
export default function WwwBelief() {
  return (
    <MaxWidthWrapper>

    <section className="WwwBeliefMain">
      <SectionTitle topTitle={"WHERE WIN WIN WIN IS THE ONLY OUTCOME WE DELIVER"} title={"WWW Belief"}/>
      <p className="peragraph">
        We firmly believe in collaborative approach & we always make sure that
        all the stakeholders have a win when they are associated with
        siciliantech. And the only way to achieve it, is by
        <strong>delivering quality work on time.</strong>
      </p>

      <div className="cards-container">
        <figure className="left">
            <Image src={AppImages.WwwImg} height={400} width={400} alt="" />
        </figure>
        <div className="right">
          {cards.map(({ head, content, img },i) => (
            <div key={i} className="card">
              <figure>
                <Image src={img} alt="client-svg"/>
              </figure>
              <div className="content">
                <h4>{head}</h4>
                <p>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </MaxWidthWrapper>
  );
}
