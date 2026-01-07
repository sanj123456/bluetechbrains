"use client";
import React, { useState } from "react";
 
import "./TechnologyWe.scss";
 
import Image from "next/image";
import Link from "next/link";
import { AppImages } from "@/assets/AppImages";
import { Icons } from "@/assets/Icons";
import SwipeButton from "../common/SwipeButton";
import dynamic from "next/dynamic";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { Colors } from "@/styles/colors";
import SectionTitle from "../common/SectionTitle";
const StaggerTextt = dynamic(() => import("../StaggerEffect/Stagger"), {
  ssr: false,
});

const Technologies = [
  {
    imageSrc: "/reactjs-icon-1.svg",
    link: "/services/reactjs",
    data: "React JS",
    tech: "frontend",
  },
  {
    imageSrc: "/angular-icon-1.svg",
    link: "/services/angular",
    data: "Angular",
    tech: "frontend",
  },
  {
    imageSrc: "/php-icon-1.svg",
    link: "/services/php",
    data: "PHP",
    tech: "backend",
  },
  {
    imageSrc: "/android-icon-1.svg",
    link: "/services/android",
    data: "Android",
    tech: "mobileapp",
  },
  {
    imageSrc: "/mysql-icon-1.svg",
    link: " ",
    data: "MySQL",
    tech: "database",
  },
  {
    imageSrc: "/flutter-icon-1.svg",
    link: "/services/flutter",
    data: "Flutter",
    tech: "mobileapp",
  },
  {
    imageSrc: "/reactjs-icon-1.svg",
    link: "/services/reactnative",
    data: "React Native",
    tech: "mobileapp",
  },
  {
    imageSrc: "/wordpress-icon-1.svg",
    link: "/services/wordpress",
    data: "WordPress",
    tech: "cms_e-commerce",
  },
  {
    imageSrc: "/javascript-icon-1.svg",
    link: "/services/javascript",
    data: "Javascript",
    tech: "frontend",
  },
  {
    imageSrc: "/html-icon-1.svg",
    link: "/services/html",
    data: "HTML",
    tech: "frontend",
  },
  {
    imageSrc: "/vuejs-icon-1.svg",
    link: "/services/vuejs",
    data: "Vue.JS",
    tech: "frontend",
  },
  {
    imageSrc: "/nodejs-icon-1.svg",
    link: "/services/nodejs",
    data: "Node.JS",
    tech: "backend",
  },
  {
    imageSrc: "/strapi-icon-1.svg",
    link: " ",
    data: "Strapi",
    tech: "backend",
  },
  {
    imageSrc: "/bootstrap-logo-shadow.png",
    link: " ",
    data: "BootStrap",
    tech: "frontend",
  },
  {
    imageSrc: "/material-ui.svg",
    link: " ",
    data: "MaterialUI",
    tech: "frontend",
  },
  {
    imageSrc: "/postgresql-icon-1.svg",
    link: " ",
    data: "PostgreSQL",
    tech: "database",
  },
  {
    imageSrc: "/awsdynamodb-icon-1.svg",
    link: " ",
    data: "AWSDynamoDB",
    tech: "database",
  },
  {
    imageSrc: "/mongodb-icon-1.svg",
    link: " ",
    data: "MongoDb",
    tech: "database",
  },
  {
    imageSrc: "/magento-icon-1.svg",
    link: "/services/magento",
    data: "Magento",
    tech: "cms_e-commerce",
  },
  {
    imageSrc: "/shopify-icon-1.svg",
    link: "/services/shopify",
    data: "Shopify",
    tech: "cms_e-commerce",
  },
  {
    imageSrc: "/ios-icon-1.svg",
    link: "/services/ios",
    data: "iOS",
    tech: "mobileapp",
  },
  {
    imageSrc: "/python-icon-1.svg",
    link: "/services/python",
    data: "Python",
    tech: "backend",
  },
  // tools
  {
    imageSrc: "/vscode-icon-1.svg",
    link: " ",
    data: "VS Code",
    tech: "tools",
  },
  {
    imageSrc: "/sublime-icon-1.svg",
    link: " ",
    data: "Sublime",
    tech: "tools",
  },
  {
    imageSrc: "/github-icon-1.svg",
    link: " ",
    data: "GitHub",
    tech: "tools",
  },
  {
    imageSrc: "/bitbucket-icon-1.svg",
    link: " ",
    data: "Bitbucket",
    tech: "tools",
  },
  {
    imageSrc: "/selenium-icon-1.svg",
    link: " ",
    data: "Selenium",
    tech: "tools",
  },
  {
    imageSrc: "/phpunit-icon-1.svg",
    link: " ",
    data: "Php Unit",
    tech: "tools",
  },
  {
    imageSrc: "/devtools-icon-1.svg",
    link: " ",
    data: "DevTools",
    tech: "tools",
  },
  {
    imageSrc: "/Figma-icon-1.svg",
    link: " ",
    data: "Figma",
    tech: "tools",
  },
  {
    imageSrc: "/sketch-icon-1.svg",
    link: " ",
    data: "Sketch",
    tech: "tools",
  },
  {
    imageSrc: "/photoshop-icon-1.svg",
    link: " ",
    data: "Photoshop",
    tech: "tools",
  },
  {
    imageSrc: "/illustrator-icon-1.svg",
    link: " ",
    data: "Illustrator",
    tech: "tools",
  },
  {
    imageSrc: "/adobexd-icon-1.svg",
    link: " ",
    data: "Adobe XD",
    tech: "tools",
  },
  // cloud
  {
    imageSrc: "/gcp-icon-1.svg",
    link: " ",
    data: "GCP",
    tech: "cloudServices",
  },
  {
    imageSrc: "/aws-icon-1.svg",
    link: "/services/cloudaws",
    data: "AWS",
    tech: "cloudServices",
  },
  {
    imageSrc: "/azure-icon-1.svg",
    link: " ",
    data: "Azure",
    tech: "cloudServices",
  },
];



export default function TechnologyWe({ mb }) {
  const [selectedTech, setSelectedTech] = useState("frontend");

  return (
    <MaxWidthWrapper backgroundColor={"#fafafa"}>
    <div id="technologyWeWrapper" style={{ marginBottom: mb }}>
      <SectionTitle topTitle={"FUELING PROGRESS THROUGH CONSTANT INNOVATION"} title={"Modern Technologies We are Leveraging"}/>
      <div className="tab-data">
        <div className="custom-scroll">
          <ul className="tab-nav">
            <li
              className={`tab-li ${selectedTech == "frontend" && "active"}`}
              onClick={() => {
                setSelectedTech("frontend");
              }}
            >
              <div className="tab-inner-item">
                <Image height={18} width={18} src={Icons.frontend} /> Frontend
              </div>
            </li>

            <li
              className={`tab-li ${selectedTech == "backend" && "active"}`}
              onClick={() => {
                setSelectedTech("backend");
              }}
            >
              <div className="tab-inner-item">
                <Image height={18} width={18} src={Icons.cms} /> Backend
              </div>
            </li>
            <li
              className={`tab-li ${selectedTech == "mobileapp" && "active"}`}
              onClick={() => {
                setSelectedTech("mobileapp");
              }}
            >
              <div className="tab-inner-item">
                <Image height={18} width={18} src={Icons.mobileIcon} /> Mobile App
              </div>
            </li>
            <li
              className={`tab-li ${selectedTech == "database" && "active"}`}
              onClick={() => {
                setSelectedTech("database");
              }}
            >
              <div className="tab-inner-item">
                <Image height={18} width={18} src={Icons.database} /> Databases
              </div>
            </li>
            <li 
              className={`tab-li ${
                selectedTech == "cms_e-commerce" && "active"
              }`}
              onClick={() => {
                setSelectedTech("cms_e-commerce");
              }}
            >
              <div className="tab-inner-item">
                <Image height={18} width={18} src={Icons.eCormmerce} /> CMS & eCommerce
              </div>
            </li>
            <li
              className={`tab-li ${
                selectedTech == "cloudServices" && "active"
              }`}
              onClick={() => {
                setSelectedTech("cloudServices");
              }}
            >
              <div className="tab-inner-item">
                <Image height={18} width={18} src={Icons.database} /> Cloud Services
              </div>
            </li>
            <li
              className={`tab-li ${selectedTech == "tools" && "active"}`}
              onClick={() => {
                setSelectedTech("tools");
              }}
            >
              <div className="tab-inner-item">
                <Image height={18} width={18} src={Icons.cms} /> Tools
              </div>
            </li>
            {/* <li className="tab-li" onClick={()=>{setSelectedTech("cloudService")}}>Cloud Services</li> */}
            {/* <li className="tab-li" onClick={()=>{setSelectedTech("tools")}}>Tools</li> */}
          </ul>
        </div>
        <div className="tab-container">
          <div className="technology-tab-content">
            <div className="technology-list">
              {Technologies.map((item, index) => {
                if (item.tech == selectedTech) {
                  return (
                    <div key={index} className="technology-data  ">
                      {item.link == " " ? 
                      <>
                      <div id="activeTechnologies1" className="activeTechnologies">
                        <Image
                          height={64}
                          width={64}
                          src={item.imageSrc}
                          className="technology-img"
                        />
                        <p>{item.data}</p>
                      </div>
                      </>
                      :
                      <>
                      <Link href={item.link} className="activeTechnologies">
                        <Image
                          height={64}
                          width={64}
                          src={item.imageSrc}
                          className="technology-img"
                        />
                        <p>{item.data}</p>
                      </Link>
                      </>
                      }
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

      </div>
   <div className="swipebuttonContainer"> 
   <Link href={"/developer"}>
    <SwipeButton  text={"Hire Us Now!"} btnLink="/developer"/> 
   </Link>
      </div> 


    </div>

    </MaxWidthWrapper>
  );
}
