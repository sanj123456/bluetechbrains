"use client";
import React, { useEffect, useState } from "react";
import "./casecards.scss";
import Link from "next/link";
import Image from "next/image";
import Select from "react-select";
import { IndustriesOptions, techOptions } from "@/util/dropDownOption";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { productType } from "@/util/helper";
import { CaseStudiesData } from "@/JsonData/caseStudiesData";
const customIndustriesListStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "10px",
    border: "1px solid #e8e8e8",

    padding: "3px 5px",
    boxShadow: state.isFocused ? "0 0 0 1px #DCCEB9" : "none",
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
const customTechListStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "10px",
    border: "1px solid #e8e8e8",

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

const curruntTechOption = [...techOptions];
const curruntIndustriesOptions = [...IndustriesOptions];
export default function CaseCards() {
  const [selectedProductType, setSelectedProductType] = useState(
    productType.All
  );
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [filterProject, setFilterProject] = useState([...CaseStudiesData]);
  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);
  useEffect(() => {
    let filterProject = [...CaseStudiesData];
    if (selectedProductType !== productType.All) {
      filterProject = filterProject.filter(
        ({ productType }) =>
          productType?.toLocaleLowerCase() ===
          selectedProductType.toLocaleLowerCase()
      );
    }
    if (selectedTechnologies?.length) {
      filterProject = filterProject.filter(({ technologies }) => {
        return selectedTechnologies.every((selectedTech) =>
          technologies.some(
            (devTech) =>
              devTech.name.toLowerCase() === selectedTech.value.toLowerCase()
          )
        );
      });
    }
    console.log(selectedIndustry);
    if (selectedIndustry?.value) {
      filterProject = filterProject.filter(
        ({ industryName }) =>
          industryName.toLowerCase() === selectedIndustry.value.toLowerCase()
      );
    }

    setFilterProject(filterProject);
  }, [selectedProductType, selectedTechnologies, selectedIndustry]);
  return (
    <MaxWidthWrapper>
      <div id="case-cards">
        <div className="wrapper">
          <div className="title-box">
            <h2>Success stories</h2>
          </div>
          <div className="filter-box">
            <div className="tags">
              {Object.entries(productType).map(([key, value], i) => {
                return (
                  <div
                    onClick={() => setSelectedProductType(value)}
                    key={i}
                    className={`tag ${value === selectedProductType && "active"}`}
                  >
                    {productType[key]}
                  </div>
                );
              })}
            </div>
            <div className="filter-conatiner">
              <div className="form-group">
                <label>Industries</label>
                <div className="select-box">
                  <Select
                    menuPortalTarget={menuPortalTarget}
                    isClearable={true}
                    placeholder="Select Industries"
                    styles={customIndustriesListStyles}
                    value={selectedIndustry}
                    onChange={setSelectedIndustry}
                    options={curruntIndustriesOptions}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Technologies</label>
                <div className="select-box">
                  <Select
                    isMulti={true}
                    isClearable={true}
                    menuPortalTarget={menuPortalTarget}
                    placeholder="Select Technologies"
                    styles={customTechListStyles}
                    value={selectedTechnologies}
                    onChange={setSelectedTechnologies}
                    options={curruntTechOption}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cards-box">
            {filterProject.map((casedata, index) => (
              <div key={index} className="card">
                <Link
                  href={`/case-studies/${casedata.slug}`}
                  className="image-link"
                  draggable={false}
                >
                  <figure className="work-image-box">
                    <Image
                      width={2560}
                      height={3785}
                      src={casedata?.cardImage}
                      draggable={false}
                      className="hover-bg-img"
                    />
                    <Image
                      width={2560}
                      height={3785}
                      src={casedata?.cardImage}
                      draggable={false}
                      className="work-img"
                    />
                  </figure>
                </Link>
                <div className="work-content">
                  <Link href={`/case-studies/${casedata.slug}`}>
                    <h2 className="work-title">{casedata.projectName}</h2>
                  </Link>
                  <p className="work-industry">{casedata.industryName}</p>
                  <p className="short-info">{casedata.description}</p>
                  <div className="technologies">
                    <ul>
                      {casedata.technologies.map((item, index) => {
                        return <li key={index}>{item.name}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="load-more">
          <SwipeButton text={"Load More Work"} changeHoverColor={false} />
        </div> */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
