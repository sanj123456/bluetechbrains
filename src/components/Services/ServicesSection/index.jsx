"use client";
import React from "react";
import "./servicessection.scss";
import { AppImages } from "@/assets/AppImages";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

export default function ServicesSection() {
  const servicesData = [
    {
      title: "Web",
      subTitle: "& App Development",
      image: '/ss.png',
      bubbleBg: "linear-gradient(147.14deg,#00cfde 6.95%,#05a660 93.05%)",
      detail:
        "Development is not an easy game in this ever-involved technology era. With our dedicated developers, you can get everything that you want. siciliantech offers complete solutions with our client satisfaction guarantee from website to app and software to web portals.",
      techList: [
        "Custom Web Development",
        "Web Development",
        "eCommerce Development",
        "Mobile App Development",
        "Dedicated Development Team",
        "API Development",
      ],
      techLogoList: [
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
      ],
    },
    {
      title: "Design",
      subTitle: "Services",
      image: '/ss.png',
      bubbleBg: "linear-gradient(147.14deg,#00cfde 6.95%,#05a660 93.05%)",
      detail:
        "Development is not an easy game in this ever-involved technology era. With our dedicated developers, you can get everything that you want. siciliantech offers complete solutions with our client satisfaction guarantee from website to app and software to web portals.",
      techList: [
        "Custom Web Development",
        "Web Development",
        "eCommerce Development",
        "Mobile App Development",
        "Dedicated Development Team",
        "API Development",
      ],
      techLogoList: [
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
      ],
    },
    {
      title: "CMS",
      subTitle: "Development",
      image:'/ss.png',
      bubbleBg: "linear-gradient(147.14deg,#00cfde 6.95%,#05a660 93.05%)",
      detail:
        "Development is not an easy game in this ever-involved technology era. With our dedicated developers, you can get everything that you want. siciliantech offers complete solutions with our client satisfaction guarantee from website to app and software to web portals.",
      techList: [
        "Custom Web Development",
        "Web Development",
        "eCommerce Development",
        "Mobile App Development",
        "Dedicated Development Team",
        "API Development",
      ],
      techLogoList: [
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
      ],
    },
    {
      title: "eCommerce",
      subTitle: "Website Development",
      image:'/ss.png',
      bubbleBg: "linear-gradient(147.14deg,#00cfde 6.95%,#05a660 93.05%)",
      detail:
        "Development is not an easy game in this ever-involved technology era. With our dedicated developers, you can get everything that you want. siciliantech offers complete solutions with our client satisfaction guarantee from website to app and software to web portals.",
      techList: [
        "Custom Web Development",
        "Web Development",
        "eCommerce Development",
        "Mobile App Development",
        "Dedicated Development Team",
        "API Development",
      ],
      techLogoList: [
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
        AppImages.ShopifyLogo,
      ],
    },
  ];

  const refs = servicesData.map(() => useRef(null));

  return (
    <MaxWidthWrapper>
    <div id="services-section">
      {servicesData.map((service, index) => {
        const { scrollYProgress } = useScroll({
          target: refs[index],
          offset: ["start start", "end end"],
        });

        const height = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

        return (
          <div className="service-item" ref={refs[index]} key={index}>
            <div className="service-name-box">
              <div className="name-info">
                <h2>{service.title}</h2>
                <h3>{service.subTitle}</h3>
              </div>
              <span className="line-animation">
                <motion.span
                  className="fill-line"
                  style={{ height: height }}
                ></motion.span>
              </span>
            </div>
            <div className="service-detail-box">
              <div className="image-box">
                <span></span>
                <figure>
                  <Image src={service.image} height={500} width={500} alt=""/>
                  <span
                    className="bubble"
                    style={{ background: service.bubbleBg }}
                  ></span>
                </figure>
              </div>
              <div className="detail-box">
                <p>{service.detail}</p>
                <ul class="tech-listing">
                  {service.techList.map((tech,i) => {
                    return <li key={i}>{tech}</li>;
                  })}
                </ul>
                <div className="logos-box">
                  {service.techLogoList.map((logo,i) => {
                    return (
                      <figure key={i}>
                        <Image src={logo} height={50} width={50} alt="" />
                      </figure>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    </MaxWidthWrapper>
  );
}
