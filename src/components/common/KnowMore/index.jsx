import React from "react";
import "./knowMore.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import { TbReportMoney } from "react-icons/tb";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionTitle from "../SectionTitle";
const cards = [
  {
    img: AppImages.whyChooseIcon1,
    head: "Skilled and Trained Teams",
    content:
      "Our highly-skilled and trained team offers the best of both worlds - breadth and depth of expertise to deliver inclusive solutions on a global level.",
  },
  {
    img: AppImages.whyChooseIcon2,
    head: "No Hidden Charges",
    content:
      "When you hire web developers from Siciliantech, you pay only for development—there are no extra training costs. Our skilled developers are already upgraded and require no additional training.",
  },
  {
    img: AppImages.whyChooseIcon3,
    head: "Transparent Pricing",
    content:
      "The hiring package with Siciliantech incorporates only the development cost, with no hidden expenses. We cover all the extra expenses, like internet and equipment for the developer.",
  },
  {
    img: AppImages.whyChooseIcon4,
    head: "Round-the-Clock Support",
    content:
      "Siciliantech provides 24/7 support during working hours within your time zone. Updates are always on time, and Siciliantech is available at all times to address any concerns.",
  },
  {
    img: AppImages.awardWinner,
    head: "Shared Responsibility",
    content: `We take up the risk together. Our offshore developers are dedicated to managing any issues, including security setbacks, and work carefully to ensure a secure and reliable solution`,
  },
  {
    img: AppImages.topRatedIcon,
    head: "ROI with Minimal Investment.",
    content: `Partnering with Siciliantech means you get maximum ROI with minimal investment. Our senior, experienced developer will effortlessly direct your project, deal with any issues, and ensure timely delivery—without any extra charges`,
  },
];
export default function KnowMore() {

  return (
    <MaxWidthWrapper backgroundColor={"#fefefe"}>
      <section className="knowMoreMain">
        <SectionTitle topTitle={"KNOW MORE"} title={"Why Choose Us"}/>

        <div className="card-container">
          {cards.map(({ content, head, img }, i) => (
            <div key={i} className="card">
              {img == AppImages.whyChooseIcon3 ? (
                <TbReportMoney />
              ) : (
                <Image src={img} height={100} width={100} alt=""/>
              )}
              <h4>{head}</h4>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
