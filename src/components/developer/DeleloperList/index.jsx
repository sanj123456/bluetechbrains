"use client";
import React, { useEffect, useState } from "react";
import "./developerList.scss";
import Link from "next/link";
import { developer as initialDevelopers } from "@/util/developer";
import SwipeButton from "@/components/common/SwipeButton";
import Select from "react-select";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Image from "next/image";
const techOptions = [
  {
    value: "HTML",
    label: "HTML",
    id: "html",
  },
  {
    value: "JQuery",
    label: "JQuery",
    id: "jquery",
  },
  {
    value: "React Js",
    label: "React Js",
    id: "react-js",
  },
  {
    value: "Next Js",
    label: "Next Js",
    id: "next-js",
  },
  {
    value: "Nuxt Js",
    label: "Nuxt Js",
    id: "nuxt-js",
  },
  {
    value: "Angular",
    label: "Angular",
    id: "angular",
  },
  {
    value: "Vue Js",
    label: "Vue Js",
    id: "vue-js",
  },
  {
    value: "Android",
    label: "Android",
    id: "android",
  },
  {
    value: "iOS",
    label: "iOS",
    id: "ios",
  },
  {
    value: "React Native",
    label: "React Native",
    id: "react-native",
  },
  {
    value: "Windows App",
    label: "Windows App",
    id: "windows-app",
  },
  {
    value: "Ionic",
    label: "Ionic",
    id: "ionic",
  },
  {
    value: "Xamarin",
    label: "Xamarin",
    id: "xamarin",
  },
  {
    value: "Flutter",
    label: "Flutter",
    id: "flutter",
  },
  {
    value: "Cross Platform",
    label: "Cross Platform",
    id: "cross-platform",
  },
  {
    value: "Hybrid",
    label: "Hybrid",
    id: "hybrid",
  },
  {
    value: "MySQL",
    label: "MySQL",
    id: "mysql",
  },
  {
    value: "Firebase",
    label: "Firebase",
    id: "firebase",
  },
  {
    value: "MongoDB",
    label: "MongoDB",
    id: "mongodb",
  },
  {
    value: "AWS",
    label: "AWS",
    id: "aws",
  },
  {
    value: "DynamoDB",
    label: "DynamoDB",
    id: "dynamodb",
  },
  {
    value: "Redis",
    label: "Redis",
    id: "redis",
  },
  {
    value: "Google Cloud",
    label: "Google Cloud",
    id: "google-cloud",
  },
  {
    value: "Azure",
    label: "Azure",
    id: "azure",
  },
  {
    value: "PHP",
    label: "PHP",
    id: "php",
  },
  {
    value: "Laravel",
    label: "Laravel",
    id: "laravel",
  },
  {
    value: "CodeIgniter",
    label: "CodeIgniter",
    id: "codeigniter",
  },
  {
    value: "Node Js",
    label: "Node Js",
    id: "node-js",
  },
  {
    value: "Symfony",
    label: "Symfony",
    id: "symfony",
  },
  {
    value: "Python",
    label: "Python",
    id: "python",
  },
  {
    value: "Yii",
    label: "Yii",
    id: "yii",
  },
  {
    value: "GraphQL",
    label: "GraphQL",
    id: "graphql",
  },
  {
    value: "Typo3",
    label: "Typo3",
    id: "typo3",
  },
  {
    value: "CakePHP",
    label: "CakePHP",
    id: "cakephp",
  },
  {
    value: "WordPress",
    label: "WordPress",
    id: "wordpress",
  },
  {
    value: "Shopify",
    label: "Shopify",
    id: "shopify",
  },
];

const developerExperienceOptions = [
  { value: 0, label: "Fresher", id: "Fresher" },
  { value: 1, label: "1+ year", id: "1+ year" },
  { value: 2, label: "2+ years", id: "2+ years" },
  { value: 3, label: "3+ years", id: "3+ years" },
  { value: 4, label: "4+ years", id: "4+ years" },
  { value: 5, label: "5+ years", id: "5+ years" },
  { value: 6, label: "6+ years", id: "6+ years" },
  { value: 7, label: "7+ years", id: "7+ years" },
  { value: 8, label: "8+ years", id: "8+ years" },
  { value: 9, label: "9+ years", id: "9+ years" },
  { value: 10, label: "10+ years", id: "10+ years" },
  { value: 11, label: "11+ years", id: "11+ years" },
  { value: 12, label: "12+ years", id: "12+ years" },
  { value: 13, label: "13+ years", id: "13+ years" },
  { value: 14, label: "14+ years", id: "14+ years" },
  { value: 15, label: "15+ years", id: "15+ years" },
  { value: 16, label: "16+ years", id: "16+ years" },
  { value: 17, label: "17+ years", id: "17+ years" },
  { value: 18, label: "18+ years", id: "18+ years" },
  { value: 19, label: "19+ years", id: "19+ years" },
  { value: 20, label: "20+ years", id: "20+ years" },
];
const customExperienceListStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "10px",
    border: "1px solid #a8726b",
    padding: "3px 5px",
    boxShadow: state.isFocused ? "0 0 0 1px #DCCEB9" : "none",

    // maxWidth: "400px",
    width: "100%",
    minWidth: "214px",
  }),
  multiValue: (provided) => ({
    ...provided,
    borderRadius: "10px",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 2 }),
  menu: (provided) => ({
    ...provided,
    zIndex: "5",
  }),
};
const customTechListStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "10px",
    border: "1px solid #a8726b",
    boxShadow: state.isFocused ? "0 0 0 1px #DCCEB9" : "none",
    padding: "3px 5px",
    // maxWidth: "400px",
    width: "100%",
    minWidth: "214px",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 2 }),
  multiValue: (provided) => ({
    ...provided,
    borderRadius: "10px",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: "5",
  }),
};
const curruntDevList = initialDevelopers.sort(
  (a, b) => parseInt(b.totalExperience, 10) - parseInt(a.totalExperience, 10)
);
export default function DeveloperList() {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState();
  const [filteredDevelopers, setFilteredDevelopers] = useState([
    ...curruntDevList,
  ]);

  // const handleTechnologyChange = (event) => {
  //   const selected = event.target.value;
  //   setSelectedTechnology(selected);
  //   if (selected === "") {
  //     setFilteredDevelopers(initialDevelopers);
  //   } else {
  //     const filtered = initialDevelopers.filter((dev) =>
  //       dev.technology.some(
  //         (tech) => tech.name.toLowerCase() === selected.toLowerCase()
  //       )
  //     );
  //     setFilteredDevelopers(filtered);
  //   }
  // };
  useEffect(() => {
    let filterDev = [...curruntDevList];
    if (selectedExperience?.value !== undefined) {
      filterDev = filterDev.filter(({ totalExperience }) => {
        if (+selectedExperience.value === 0) {
          return +totalExperience <= 1;
        } else return +totalExperience >= +selectedExperience.value;
      });
    }
    if (selectedTechnologies?.length) {
      filterDev = filterDev.filter(({ technology }) => {
        return selectedTechnologies.every((selectedTech) =>
          technology.some(
            (devTech) =>
              devTech.name.toLowerCase() === selectedTech.value.toLowerCase()
          )
        );
      });
    }

    setFilteredDevelopers(filterDev);
  }, [selectedExperience, selectedTechnologies]);
  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="developerList-main">
        <div className="wrapper">
          <div className="filter-box">
            <div className="title-box">
              <h2 style={{ textWrap: "nowrap" }}>Our Developers</h2>
            </div>
            <div className="filter-conatiner">
              <div className="form-group">
                <label>Experience</label>
                <div className="select-box">
                  <Select
                    isClearable={true}
                    menuPortalTarget={menuPortalTarget}
                    styles={customExperienceListStyles}
                    placeholder="Select Experience"
                    value={selectedExperience}
                    onChange={setSelectedExperience}
                    options={developerExperienceOptions}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Domain Expertise</label>
                <div className="select-box">
                  <Select
                    isMulti={true}
                    menuPortalTarget={menuPortalTarget}
                    isClearable={true}
                    placeholder="Select Technologies"
                    styles={customTechListStyles}
                    value={selectedTechnologies}
                    onChange={setSelectedTechnologies}
                    options={techOptions}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cards-box">
            {filteredDevelopers.map((dev, index) => (
              <div key={index} className="card">
                <Link
                  href={"/developer/" + dev.name.replace(" ", "-")}
                  className="image-link"
                  draggable={false}
                >
                  <figure className="work-image-box">
                    <Image
                      src={dev?.profileUrl}
                      draggable={false}
                      className="hover-bg-img"
                      height={300}
                      width={300}
                      alt=""
                    />
                    <Image
                      src={dev?.profileUrl}
                      draggable={false}
                      className="work-img"
                      height={300}
                      width={300}
                      alt=""
                    />
                  </figure>
                </Link>
                <div className="work-content">
                  <div className="work-title-conteiner">
                    <h2 className="work-title"><Link href={"/developer/" + dev.name.replace(" ", "-")}>{dev.name}</Link></h2>
                    <span className="designation">{dev.designation} </span>{" "}
                    <span className="pipe">|</span>
                    <span className="experience">
                      Experience:{dev.totalExperience}+ year
                    </span>
                  </div>
                  <p className="work-subtitle">{dev.summary}</p>
                  <div className="technologies">
                    <ul>
                      {dev.technology.map(({ name }, index) => (
                        <li key={index}>{name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="load-more">
            <SwipeButton text={"Load More"} changeHoverColor={false} />
          </div> */}
        </div>
      </div>
    </MaxWidthWrapper >
  );
}
