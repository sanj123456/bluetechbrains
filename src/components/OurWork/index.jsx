import CustomDataSwiper from "../common/CustomDataSwiper";
import "./ourwork.scss";
import Image from "next/image";
import Link from "next/link";
import { AllPortfolioData } from "@/JsonData/portfolioData";

export default function OurWork() {
  const slides = AllPortfolioData.map((work, index) => (
    <div key={index} id="ourWork">
      <Link
        href={`/portfolio/${work.slug}`}
        className="image-link"
        draggable={false}
      >
        <figure className="work-image-box">
          <Image
            src={work?.cardImage}
            draggable={false}
            height={500}
            width={500}
            alt=""
            className="hover-bg-img"
          />
          <Image
            height={500}
            width={500}
            alt=""
            src={work?.cardImage}
            draggable={false}
            className="work-img"
          />
        </figure>
      </Link>
      <div className="work-content">
        <Link href={`/portfolio/${work.slug}`}>
          <h2 className="work-title">{work.projectName}</h2>
        </Link>
        <p className="work-subtitle">{work.industryName}</p>
        <div className="technologies">
          <ul>
            {work.technologies.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  ));

  const smTitle = "Winning Stories";
  const title = "Our Work";
  const description =
    "Siciliantech is a web development company in India, serving clients worldwide since 2007. We help companies refine their digital possibilities and offer top-notch solutions with our tech experts. We create digital infrastructure to help our clients become industry leaders in web design, web development, eCommerce, mobile app development, and SEO. Siciliantech is the one-stop solution for businesses looking to enhance their online presence.";
  const btnText = "View All Work";
  const btnLink = "/portfolio";
  const breakpoints = {
    0: {
      spaceBetween: 32,
      slidesPerView: 1.3,
    },
    500: {
      spaceBetween: 32,
      slidesPerView: 1.5,
    },
    760: {
      slidesPerView: 2.3,
      spaceBetween: 32,
    },
    992: {
      slidesPerView: 1.8,
      spaceBetween: 78,
    },
    1200: {
      slidesPerView: 2.4,
      spaceBetween: 70,
    },
    1580: {
      slidesPerView: 3.2,
      spaceBetween: 70,
    },
    1920: {
      slidesPerView: 3.3,
      spaceBetween: 70,
    },
  };

  return (
    <CustomDataSwiper
      smallTitle={smTitle}
      title={title}
      description={description}
      btnText={btnText}
      btnLink={btnLink}
      slides={slides}
      preBtnClass={"work-pre-btn"}
      nextBtnClass={"work-next-btn"}
      breakpoints={breakpoints}
    />
  );
}
