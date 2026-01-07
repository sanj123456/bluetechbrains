"use client";
import React, { useEffect, useState } from "react";
import "./getInTouchNow.scss";
import Image from "next/image";
import { Icons } from "@/assets/Icons";
import { MdWifiCalling3 } from "react-icons/md";
import { IndustriesOptions } from "@/util/dropDownOption";
import { Designation } from "@/JsonData/designation";
import Swal from "sweetalert2";
import GetIntouch1 from "../GetinTouch1/Getintouch1";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { Colors } from "@/styles/colors";
import { usePathname } from "next/navigation";

const curruntIndustriesOptions = [...IndustriesOptions];
const curruntDesignation = [...Designation];

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  technologies: "",
  industry: "",
  portfolio: "",
};
const data1 = [
  {
    id: "1",
    name: "business",
    question: <>For Business Inquiries</>,
    answer: (
      <>
        {/* <h1 style={{textAlign:"center"}}>Let's Talk Business</h1> */}
        {/* <p>Web application development services involve:</p>
          <ul>
            <li>Designing websites and mobile applications</li>
            <li>Customising them</li>
            <li>Completing an entire development cycle, from improving old technologies to upgrading new technologies, in accordance with a given business necessity</li>
          </ul> */}
      </>
    ),
  },
  {
    id: "2",
    name: "question",
    question: <>You Got a Question?</>,
    answer: (
      <p>
        {/* The main goal of our development is to create software that will be engaging and user-friendly apps that boost your productivity and efficiency. */}
      </p>
    ),
  },
  {
    id: "3",
    name: "portfolio",
    question: <>Send us Your Portfolio</>,
    answer: (
      <p>
        {/* Yes, Siciliantech controls everything, from design and development through implementation, integration, setup, and support. In addition to saving time, the solutions are intended to cut costs and keep your business in line with market demands. */}
      </p>
    ),
  },
  {
    id: "4",
    name: "general",
    question: <>For General Inquiry</>,
    answer: (
      <p>
        {/* At Siciliantech, we leverage technologies, including Python, Angular JS, React JS, Java Spring Boot, and Golang; we use the best tech based on the app's features, design, or platform requirements. */}
      </p>
    ),
  },
];
const GetInTouchNow = () => {
  const [data, setData] = useState({ ...initialValues });
  const [error, setError] = useState({ ...initialValues });
  const [loader, setLoader] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isHire, setIsHire] = useState(false);
  const [openForm, setOpenForm] = useState("");
  const [headingData, setHeadingData] = useState("");
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);

  const pathname = usePathname();

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  const customTechListStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "1px",
      border: `1px solid ${!error.technologies ? "#e8e8e8" : "#f15239"}`,
      padding: "3px 5px",
      boxShadow: state.isFocused ? "0 0 0 1px #DCCEB9" : "none",
      maxWidth: "400px",
      width: "100%",
      minWidth: "214px",
    }),
    menuPortal: (base) => ({ ...base, zIndex: 2 }),
    multiValue: (provided) => ({
      ...provided,
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: "2",
    }),
  };

  const customIndustriesListStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "1px",
      border: `1px solid ${!error.industry ? "#e8e8e8" : "#f15239"}`,
      padding: "3px 5px",
      boxShadow: state.isFocused ? "0 0 0 1px #DCCEB9" : "none",
      maxWidth: "400px",
      width: "100%",
      minWidth: "214px",
    }),
    multiValue: (provided) => ({
      ...provided,
    }),
    menuPortal: (base) => ({ ...base, zIndex: 2 }),
    menu: (provided) => ({
      ...provided,
      zIndex: "5",
    }),
  };

  const isAllValid = () => {
    const tempError = {};
    const urlPattern =
      /^(https?:\/\/)((([a-zA-Z0-9_-]+)\.)+([a-zA-Z]{2,})|localhost)(:\d+)?(\/[a-zA-Z0-9_.,~%\-+@/]*)*(\?[a-zA-Z0-9_&=.,~%\-+@/]*)?(#[a-zA-Z0-9_.,~%\-+@/]*)?$/;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!data.name.trim()) tempError.name = "Please enter your Name";
    if (!emailRegex.test(data.email.trim()))
      tempError.email = "Please enter your email address";
    if (!data.phone.trim()) {
      tempError.phone = "Please enter your phone number";
    } else if (data.phone.trim().length !== 10) {
      tempError.phone = "Mobile number must be 10 digits";
    }
    if (!data.message.trim()) tempError.message = "Please enter your message";

    if (openForm.name === "portfolio") {
      if (!data.portfolio) {
        tempError.portfolio = "Please enter your portfolio URL";
      } else if (!urlPattern.test(data?.portfolio)) {
        tempError.portfolio = "Please enter valid portfolio URL";
      }
    }
    // if (isHire) {
    //   if (!selectedIndustry?.value)
    //     tempError.industry = "Please select industry";
    //   if (!selectedTechnologies?.value)
    //     tempError.technologies = "Please select designation";
    // }

    if (Object.keys(tempError).length > 0) {
      setError({ ...tempError });
      return false;
    } else {
      setError({ ...initialValues });
      return true;
    }
  };
  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);
  const onFormSubmit = (e) => {
    // e.preventDefault(); // Add this line to prevent page refresh
    setLoader(true);
    if (!isAllValid()) {
      setLoader(false);
      return;
    }

    (async () => {
      window.Email.send({
        SecureToken: "35216469-693f-4fea-9bca-2f7bd85519faasd",
        To: "mithil.m@latitudetechnolabs.org",
        From: "mithil.m@latitudetechnolabs.org",
        Subject:
          isHire && selectedTechnologies?.value
            ? `${openForm?.name} Inquiry from ${data.name} for ${selectedTechnologies?.value}`
            : `${openForm?.name} Inquiry from ${data.name}`,
        Body: `
          <html> 
          <head>
            <style>
              body { font-family: Arial, sans-serif; color: #333; }
              .container { width: 80%; margin: auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; }
              h2 { color: #007bff; }
              p { margin: 10px 0; }
              .label { font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1> ${
                isHire && selectedTechnologies?.value
                  ? `${openForm?.name} Inquiry from ${data.name} for ${selectedTechnologies?.value}`
                  : ` ${openForm?.name} Inquiry`
              }</h1>
              <h3><span class="label">Full Name:</span> ${data.name}</h3>
              <h3><span class="label">Email:</span> ${data.email}</h3>
              ${
                data.company
                  ? `<h3><span class="label">Company Name:</span> ${data.company}</h3>`
                  : ""
              }
              <h3><span class="label">Message:</span> ${data.message}</h3>
              ${
                data.portfolio && openForm?.name === "portfolio"
                  ? `<h3><span class="label">Portfolio URL:</span> <a href="${data.portfolio}" target="_blank" >${data.portfolio}</a></h3>`
                  : ``
              }
              <h3><span class="label">Phone :</span> ${data.phone}</h3>
              ${
                isHire && selectedIndustry?.value
                  ? `<h3><span class="label">Industry:</span> ${
                      selectedIndustry?.value || ""
                    }</h3>`
                  : ""
              }
              ${
                isHire || selectedTechnologies?.value
                  ? `<h3><span class="label">Designation :</span> ${
                      selectedTechnologies?.value || ""
                    }</h3>`
                  : ""
              }
            </div>
          </body>
        </html>
        `,
      })
        .then((message) => {
          setLoader(false);

          if (message === "OK") {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Your Inquiry has Received!",
              customClass: {
                title: 'swal-title',
                text:"swal-text",
                confirmButton: 'swal-confirm-button'
              }
            });
            setData({ ...initialValues });
            setSelectedIndustry(null);
            setSelectedTechnologies(null);
            setError({ ...initialValues });
          }
        })
        .catch((error) => {
          setLoader(false);

          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again.");
        });
    })();
  };

  const handleFaqClick = (faq) => {
    const { id, name } = faq;
    setData({ ...initialValues });
    setIsHire(false);
    setOpenForm(openForm?.id === id ? "" : faq);
    if (name == "business") {
      setHeadingData("Let's Talk Business");
      setIsHire(true);
      setError({ ...initialValues });
    } else if (name == "question") {
      setHeadingData("Got a Question?");
      setError({ ...initialValues });
    } else if (name == "portfolio") {
      setHeadingData("We Love Portfolios!");
      setError({ ...initialValues });
    } else if (name == "general") {
      setHeadingData("For General Inquiry");
      setError({ ...initialValues });
    }
  };
  // const heading = "Let's Talk Business"
  if (pathname === "/get-a-quote") {
    return null;
  }
  return (
    <MaxWidthWrapper backgroundColor={Colors.$primary_color}>
      <section className="getInTouchNowMain" id="getintouch">
        <div className="left-box">
          <div className="title-main-wrapper">
            <div className="title-main">LET’S DISCUSS YOUR PROJECT</div>
          </div>
          <h2 className="heading">Get in Touch Now!</h2>
          <p>
            Have a word with our expert consultants about your next project to
            get suggestive guidance & proposal.
          </p>

          <div className="contact-list-container">
            <div className="contact-list">
              <h5 className="head">Sales Inquiry</h5>
              <ul className="contact-cards">
                <li>
                  <a className={"list"} href="">
                    <Image height={18} src={Icons.email} alt="Email Icon" />{" "}
                    info@siciliantech.com
                  </a>
                </li>
                <li>
                  <a className={"list"} href="">
                    {" "}
                    <Image height={18} src={Icons.skype} alt="Skype Icon" />
                    siciliantech
                  </a>
                </li>
                <li className={"list"}>
                  <MdWifiCalling3 size={26} />
                  <div className="dialer-container">
                    <a href={`tel:+917778865391`} className="dialer">
                      +91 7778865391 <span>(INDIA)</span>
                    </a>
                    <a href={`tel:+917778865391`} className="dialer">
                      +1 (323) 886-5391<span> (USA) </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="faq-section">
          <div className="faq-list">
            {data1.map((faq) => (
              <div
                key={faq.id}
                className="faq-item"
                onClick={() => handleFaqClick(faq)}
              >
                <h5
                  className={`question ${
                    openForm.id === faq.id ? "open-question" : ""
                  }`}
                >
                  {faq.question}
                </h5>
                <div
                  className={`answer ${
                    openForm.id === faq.id ? "open-answer" : ""
                  }`}
                >
                  {faq.answer}
                  {openForm.id === faq.id && (
                    <div onClick={handleFormClick}>
                      <GetIntouch1
                        headingData={headingData}
                        onChange={(e) => {
                          console.log(e?.target.value);
                          onChange(e);
                        }}
                        onFormSubmit={onFormSubmit}
                        data={data}
                        error={error}
                        openForm={openForm}
                        loader={loader}
                        isHire={isHire}
                        setIsHire={setIsHire}
                        menuPortalTarget={menuPortalTarget}
                        customIndustriesListStyles={customIndustriesListStyles}
                        customTechListStyles={customTechListStyles}
                        selectedIndustry={selectedIndustry}
                        setSelectedIndustry={setSelectedIndustry}
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export const InputField = ({
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

export default GetInTouchNow;
