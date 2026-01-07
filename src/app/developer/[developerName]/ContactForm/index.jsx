"use client";

import "./contactForm.scss";
import React, { useState } from "react";
import Image from "next/image";
import { Icons } from "@/assets/Icons";
import { MdWifiCalling3 } from "react-icons/md";
import SwipeButton from "@/components/common/SwipeButton";
import Swal from "sweetalert2";

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm({ dev }) {
  const [data, setData] = useState({ ...initialValues });
  const [error, setError] = useState({ ...initialValues });
  const [loader, setLoader] = useState(false);

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  function isAllValid() {
    const tempError = {};
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

    if (Object.keys(tempError).length > 0) {
      setError({ ...tempError });
      return false;
    } else {
      setError({ ...initialValues });
      return true;
    }
  }
  const onFormSubmit = () => {
    setLoader(true);
    if (!isAllValid()) {
      setLoader(false);
      return;
    }
    (async () => {
      const developerProfileLink = `${window.location.origin}/developer/${dev.name.replace(" ", "-")}`;
      window.Email.send({
        SecureToken: "35216469-693f-4fea-9bca-2f7bd85519faasd",
        To: "mithil.m@latitudetechnolabs.org",
        From: "mithil.m@latitudetechnolabs.org",
        Subject: `${`Inquiry from ${data.name} for ${dev.name}`}`,
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
          <h1> ${`Inquiry from ${data.name} for ${dev.name}`}</h1>
          <h2> ${`Experience:   ${dev.totalExperience}`}</h2>
          <h2> ${`Designation:   ${dev.designation}`}</h2>
          <h2>Developer Profile Link: <a href="${developerProfileLink}" target="_blank">${developerProfileLink}</a></h2>
          <h3><span class="label">Full Name:</span> ${data.name}</h3>
          <h3><span class="label">Email:</span> ${data.email}</h3>
          ${
            data.company
              ? `<h3><span class="label">Company Name:</span> ${data.company}</h3>`
              : ""
          }
    
          <h3><span class="label">Message:</span> ${data.message}</h3>
          <h3><span class="label">Phone :</span> ${data.phone}</h3>
        </div>
      </body>
    </html>
      `,
      })
        .then((message) => {
          if (message === "OK") {
            console.log("Mail sent successfully:", message);
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
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again.");
        });
    })();
  };

  return (
    <section className="contactForm">
      <div className="right-box">
        <div className="container">
          <h4 className="head">
            Inquiry For <span className="line">{dev.name}</span>
          </h4>
          <form onSubmit={onFormSubmit} className="form">
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
              placeholder={"Enter your company name "}
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
                onClick={onFormSubmit}
                disabled={loader}
                type="button"
                className="submitButton"
              >
                <SwipeButton loading={loader} text={"SUBMIT NOW"} />
              </button>
              <div className="tagLine">
                <Image src={Icons.shield} alt="Shield Icon" />
                Say bye to privacy concern, 100% confidential
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

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
