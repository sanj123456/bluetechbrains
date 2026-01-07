"use client";
import React, { useEffect, useState } from "react";
import "./portfoliocards.scss";
import Link from "next/link";
import Image from "next/image";
import Select from "react-select";
import { IndustriesOptions, techOptions } from "@/util/dropDownOption";
import { AllPortfolioData } from "@/JsonData/portfolioData";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { productType } from "@/util/helper";
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
// const curruntIndustriesOptions = [...IndustriesOptions];
export default function PortfolioCards() {
  // const [industryOptions, setIndustryOptions] = useState([...IndustriesOptions])
  const [selectedProductType, setSelectedProductType] = useState(
    productType.All
  );
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [filterProject, setFilterProject] = useState([...AllPortfolioData]);
  const [filteredIndustriess, setFilteredIndustriess] = useState(new Set())
  useEffect(()=>{
    const data = [...IndustriesOptions]
    const mappedData = data.map((item)=>item.value)
    const newData = AllPortfolioData.map((item)=>item.industryName.toLocaleLowerCase())
    const filteredData = newData.filter((item) => !mappedData.includes(item));
    setFilteredIndustriess(new Set(filteredData))
  },[])
  const currentIndustriesOptions = Array.from(filteredIndustriess).map((industry) => ({
    value: industry,
    label: industry,
    id: industry,
  }));
  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);
  useEffect(() => {
    let filterProject = [...AllPortfolioData];
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
      <div id="portfolio-cards">
        <div className="wrapper">
          <div className="title-box">
            <h2>Our Portfolio</h2>
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
                    options={currentIndustriesOptions}
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
            {filterProject.map((work, index) => (
              <div key={index} className="card">
                <Link
                  href={`/portfolio/${work.slug}`}
                  className="image-link"
                  draggable={false}
                >
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
                  <Link href={`/portfolio/${work.slug}`}>
                    <h2 className="work-title">{work.projectName}</h2>
                  </Link>
                  <p className="work-industry">{work.industryName}</p>
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
          {/* <div className="load-more">
          <SwipeButton text={"Load More Work"} changeHoverColor={false} />
        </div> */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
