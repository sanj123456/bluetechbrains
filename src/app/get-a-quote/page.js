"use client";
import Image from "next/image";
import "./getaquote.scss";
import SwipeButton from "@/components/common/SwipeButton";
import { InputField } from "@/components/GetInTouchNow";
import { useState } from "react";
import { Icons } from "@/assets/Icons";
import Swal from "sweetalert2";
import KnowMore from "@/components/common/KnowMore";
import EngagementModel from "@/components/EngagementModel/EngagementModel";
import OurWorkingMethod from "@/components/OurWorkingMethod";
import Testomonials from "@/components/Testomonials";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Colors } from "@/styles/colors";

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export default function GetAQuote() {
  const onFormSubmit = (e) => {
    e.preventDefault(); // Add this line to prevent page refresh
    setLoader(true);
    if (!isAllValid()) {
      setLoader(false);
      return;
    }
    (async () => {
      const emailbody = `
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
        <h1> Inquiry for FREE QUOTE from ${data.name}</h1>
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
  `;
      console.log(emailbody, "emailll");
      window.Email.send({
        SecureToken: "35216469-693f-4fea-9bca-2f7bd85519faasd",
        To: "mithil.m@latitudetechnolabs.org",
        From: "mithil.m@latitudetechnolabs.org",
        Subject: `Inquiry for FREE QUOTE from ${data.name}`,
        Body: emailbody,
      })
        .then((message) => {
          setLoader(false);
          if (message === "OK") {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Your Inquiry has been Received!",
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
      <MaxWidthWrapper backgroundColor={"#f5f0eb"}>
        <div id="content-box">
          <div className="left-box">
            <div className="sticky-box">
              <h2>Get A Quote</h2>
              <p>
                Please fill in the form and our representative will get back to
                you.
              </p>
              <div className="process-box">
                <h4>
                  Here’s what you will get after submitting your project
                  details:
                </h4>
                <ul class="listing">
                  <li>
                    A strict <span> non-disclosure</span> policy.
                  </li>
                  <li>
                    Get a<span> free consultation</span> from our experts.
                  </li>
                  <li>
                    Suggestions on <span> revenue models &amp; planning.</span>
                  </li>
                  <li>A free quote.</li>
                  <li>
                    Action plan &amp; detailed proposal within
                    <span> 3 working days.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-boxx">
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
      </MaxWidthWrapper>
      <KnowMore />
      <EngagementModel />
      <OurWorkingMethod />
      <Testomonials />
    </>
  );
}
