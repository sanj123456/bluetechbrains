"use client";
import React, { Suspense, useState } from "react";
import "./serviceschild.scss";
import Image from "next/image";
import SwipeButton from "@/components/common/SwipeButton";
import { InputField } from "@/components/GetInTouchNow";
import { Icons } from "@/assets/Icons";
import Brands from "@/components/Brands/Brands";
import servicesData from "../../../components/json/servicesData.json";
import { AppImages } from "@/assets/AppImages";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Colors } from "@/styles/colors";
import { notFound, usePathname } from "next/navigation";
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import Servicesaugmentation from "@/components/Servicesaugmentation/page";

const TechnologyWe = dynamic(() => import("@/components/TechnologyWe/TechnologyWe"));
const LetsConnect = dynamic(() => import("@/components/common/LetsConnect"));
const OurClientsFrom = dynamic(() => import("@/components/Portfolio/OurClientsFrom"));
const EngagementModel = dynamic(() => import("@/components/EngagementModel/EngagementModel"));
const OurWorkingMethod = dynamic(() => import("@/components/OurWorkingMethod"));
const OurWork = dynamic(() => import("@/components/OurWork"));
const Testomonials = dynamic(() => import("@/components/Testomonials"));
const Faq = dynamic(() => import("@/components/Faq"));
const Blogs = dynamic(() => import("@/components/Blogs/Blogs"));
const Businesses = dynamic(() => import("@/components/Businesses/Businesses"));
const Keytakeaway = dynamic(() => import("@/components/Keytakeaway/Keytakeaway"));

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};
const page = ({ params }) => {
  const serviceType = params.services;
  const serviceData = servicesData[serviceType];
  if (!serviceData) {
    notFound();
  }
  const pathname = usePathname()
  console.log(serviceData, "serviceeee");
  const onFormSubmit = (e) => {
    e.preventDefault(); // Add this line to prevent page refresh
    setLoader(true);
    if (!isAllValid()) {
      setLoader(false);
      return;
    }
    (async () => {
      const emailbody= 
      `
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
        <h1> Inquiry for ${serviceData.title} from ${data.name}</h1>
        <h3><span class="label">Full Name:</span> ${data.name}</h3>
        <h3><span class="label">Email:</span> ${data.email}</h3>
        ${data.company ? `<h3><span class="label">Company Name:</span> ${data.company}</h3>` : ""}
        <h3><span class="label">Message:</span> ${data.message}</h3>
        <h3><span class="label">Phone :</span> ${data.phone}</h3>
      </div>
    </body>
  </html>
  `
    console.log(emailbody,"emailll")
      window.Email.send({
        SecureToken: "35216469-693f-4fea-9bca-2f7bd85519faasd",
        To: "mithil.m@latitudetechnolabs.org",
        From: "mithil.m@latitudetechnolabs.org",
        Subject: `Inquiry for ${serviceData.title} from ${data.name}`,
        Body:emailbody,
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
  const [data, setData] = useState({ ...initialValues });
  const [error, setError] = useState({ ...initialValues });
  const [loader, setLoader] = useState(false);

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  function isAllValid() {
    const tempError = {};
    if (!data.name.trim()) tempError.name = "Please enter your Name";
    if (!data.email.trim()) tempError.email = "Please enter your email address";
    if (!data.phone.trim()) tempError.phone = "Please enter your phone number";
    if (!data.message.trim()) tempError.message = "Please enter your message";
    if (Object.keys(tempError).length > 0) {
      setError({ ...tempError });
      return false;
    } else {
      setError({ ...initialValues });
      return true;
    }
  }
  return (
    <>
      <MaxWidthWrapper backgroundColor={Colors.$primary_color}>
        <div className="main-services-wrapper">
          <div className="services-wrapper">
            <div className="services-sub-wrapper">
              <div className="left-content-wrapper">
                <div className="left-content">
                  <h1 className="heading-cms">{serviceData.title}</h1>
                  <p className="description">{serviceData.description}</p>
                  <ul>
                    {serviceData.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="right-boxxx">
                <div className="container">
                  <div className="imgandtext">
                    <span>
                      <Image
                        alt=""
                        height={40}
                        width={200}
                        src="/shake-hands.png"
                      />
                    </span>
                    <h4 className="head">Get a Free Quote!</h4>
                  </div>
                  <form onSubmit={onFormSubmit} className="form">
                    <InputField
                      value={data.name}
                      error={error?.name}
                      isCompulsory={true}
                      label={"Your Name"}
                      name="name"
                      placeholder={"Enter your Name "}
                      onChange={onChange}
                      id={"ContactName"}
                    />
                    <InputField
                      value={data.company}
                      error={error?.company}
                      isCompulsory={false}
                      label={"Company Name"}
                      id="ContactCompany"
                      placeholder={"Enter your company Name "}
                      onChange={onChange}
                      name="company"
                    />
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
                        disabled={loader}
                        type="submit"
                        className="submitButton"
                      >
                        <SwipeButton bgColor={"#ebe3d7"} loading={loader} text={"SUBMIT NOW"} />
                      </button>
                      <div className="tagLine">
                        <Image src={Icons.shield} alt="Shield Icon" />
                        Say bye to privacy concern, 100% confidential
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      {pathname === "/services/dedicateddevelopmentteam" && <Servicesaugmentation/>}
      <Brands />
      <Suspense fallback={<Loader />}>
        <Keytakeaway />
        <MaxWidthWrapper>
          <div className="main-services-content-wrapper">
            <div className="services-wrapperr">
              <div className="parent-wrapper">
                <div className="left-item-parent">
                  <div className="actual-content">
                    <div className="top-content-services">
                      <h2 className="we-heading">
                        WE Deliver {serviceData?.title || "No Title"}
                      </h2>
                      <p className="description">
                        {serviceData?.description2 || "No Description"}
                      </p>
                    </div>
                    <div className="content-with-photo">
                      <span className="blueball"></span>
                      <figure className="figureforcontents">
                        <Image
                          alt=""
                          height={500}
                          width={500}
                          className="imageforservice"
                          src={serviceData.bannerImage}
                        />
                        <span data-speed="1.1" className="realbluedot"></span>
                      </figure>
                    </div>
                    <div className="connect-btn-div">
                      <SwipeButton text={"Let's Connect"} href="/get-a-quote"/>
                    </div>
                  </div>
                </div>
                <div className="right-item-parent">
                  {serviceData?.cards?.map(({ head, content }, index) => (
                    <div className="card" key={index}>
                      <div className="content">
                        <h4>{head}</h4>
                        <p>{content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className='right-item-parent'>
          </div> */}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <TechnologyWe />
        <LetsConnect />
        <OurClientsFrom />
        <div className="engagement-div">
          <EngagementModel />
        </div>
        <OurWorkingMethod />
        <Businesses />
        <OurWork />
        <Testomonials />
        <Faq />
        <Blogs />
      </Suspense>
    </>
  );
};
export default page;