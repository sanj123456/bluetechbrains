import React, { useEffect, useState } from "react"; // Import your InputField component
import SwipeButton from "../common/SwipeButton";
import Select from "react-select";
import { IndustriesOptions } from "@/util/dropDownOption";
import { Designation } from "@/JsonData/designation";
import Image from "next/image";
import { Icons } from "@/assets/Icons";
import "./Getintouch1.scss";
import    DragAndDropInputField  from "../../components/common/InputField";
 

const curruntIndustriesOptions = [...IndustriesOptions];
const curruntDesignation = [...Designation];
const GetIntouch1 = ({
  menuPortalTarget,
  headingData,
  customIndustriesListStyles,
  customTechListStyles,
  onFormSubmit,
  data,
  error,
  loader,
  isHire,
  openForm,
  setIsHire,
  onChange,
  selectedIndustry,
  setSelectedIndustry,
  selectedTechnologies,
  setSelectedTechnologies,
}) => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    console.log(data,"dataa")
    if(headingData == "Let's Talk Business")
        setOn(!on)
  }, [headingData]);
//   const onChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
  return (
    <div className="right-boxx">
      <div className="container">
        <h4 className="head">{headingData}</h4>
        {/* <p>{on}</p> */}
        {/* {on ? (
          <>
            <div className="hire-conateiner">
              <input
                id="hireID"
                checked={isHire}
                onChange={(e) => {
                  setIsHire(!isHire);
                }}
                type="checkbox"
              />{" "}
              <label htmlFor="hireID">Are you Hiring?</label>
            </div>
          </>
        ) : (
          <></>
        )} */}
        {/* <div className="hire-conateiner">
              <input
                id="hireID"
                onChange={() => {
                  setIsHire(!isHire);
                }}
                type="checkbox"
              />{" "}
              <label htmlFor="hireID">Are you Hiring?</label>
            </div> */}
        <form className="form">
          <InputField
            value={data.name}
            error={error?.name}
            isCompulsory={true}
            label={"Your Name"}
            name="name"
            placeholder={"Enter your name "}
            onChange={onChange}
            id={"ContactName"}
          />
          <InputField
            value={data.company}
            error={error?.company}
            isCompulsory={false}
            label={"Company Name"}
            id="ContactCompany"
            placeholder={"Enter your company name"}
            onChange={onChange}
            name="company"
          />
          {isHire && (
            <>
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
                {error.industry && (
                  <span className="error">{error.industry}</span>
                )}
              </div>
              <div className="form-group">
                <label>Designation</label>
                <div className="select-box">
                  <Select
                    isClearable={true}
                    menuPortalTarget={menuPortalTarget}
                    placeholder="Select Designation"
                    styles={customTechListStyles}
                    value={selectedTechnologies}
                    onChange={setSelectedTechnologies}
                    options={curruntDesignation}
                  />
                </div>
                {error.technologies && (
                  <span className="error">{error.technologies}</span>
                )}
              </div>
            </>
          )}
          <InputField
            value={data.email}
            error={error?.email}
            id="ContactEmail"
            isCompulsory={true}
            label={"Email Address"}
            placeholder={"Enter your email id"}
            name="email"
            onChange={onChange}
          />
          <InputField
            value={data.phone}
            error={error?.phone}
            id="ContactPhone"
            isCompulsory={true}
            label={"Phone Number"}
            placeholder={"Enter your phone number"}
            name="phone"
            onChange={onChange}
          />
          {openForm.name === "portfolio" && (
            <InputField
              value={data.portfolio}
              error={error?.portfolio}
              id="portfolioUrl"
              className={"portfolioUrl"}
              isCompulsory={true}
              label={"Portfolio"}
              placeholder={"Enter your portfolio URL"}
              name="portfolio"
              onChange={onChange}
            />
          )}
          <InputField
            value={data.message}
            error={error?.message}
            id="ContactMessage"
            className={"ContactMessage"}
            isCompulsory={true}
            label={"Message"}
            textAria={true}
            rows={8}
            placeholder={"Enter your message"}
            name="message"
            onChange={onChange}
          />

          <div className="buttons">
            <button
              onClick={() => onFormSubmit()}
              disabled={loader}
              type="button"
              className="submitButton"
            >
              <SwipeButton loading={loader} text={"Submit Now"} />
            </button>
            <div className="tagLine">
              <Image src={Icons.shield} alt="Shield Icon" />
              Say bye to privacy concern, 100% confidential
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetIntouch1;


const InputField = ({
  value,
  onChange,
  id,
  placeholder,
  error,
  isCompulsory,
  label,
  type = "text",
  rows,
  className,
  name,
  textAria = false,
}) => {
  return (
    <div className={`inputField ${className}`}>
      <label htmlFor={id}>
        {label}
        {isCompulsory && label && <span> *</span>}
      </label>
      {textAria ? (
        <textarea
          id={id}
          type={type}
          rows={rows}
          name={name}
          className={error && "errorBorder"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          name={name}
          className={error && "errorBorder"}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
      {error && <span className="error">{error}</span>}
    </div>
  );
};