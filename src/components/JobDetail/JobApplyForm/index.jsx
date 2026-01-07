import React, { useState } from "react";
import "./jobapplyform.scss";
import InputField from "@/components/common/InputField";
import SwipeButton from "@/components/common/SwipeButton";
import Swal from 'sweetalert2';
export default function JobApplyForm({ data }) {
  const initialData = {
    fullName: "",
    age: "",
    location: "",
    mobileNo: "",
    email: "",
    qualification: "",
    gender: "",
    linkedinUrl: "",
    experience: "",
    noticePeriod: "",
    currCtc: "",
    expCtc: "",
    skills: "",
    attributes: "",
    message: "",
    resume: null,
  };
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [resumeFile, setResumeFile] = useState(null);
  const validateInput = (name, value) => {
    let error = "";
    if (!value && name !== "resume" && name !== "linkedinUrl" && name !== "noticePeriod") {
      error = `Please enter ${name.replace(/([A-Z])/g, " $1").toLowerCase()}`;
      return error;
    }
    switch (name) {
      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "age":
        if (value < 0 || value > 120) {
          error = "Age must be between 0 and 120";
        }
        break;
      case "mobileNo":
        if (value.length !== 10) {
          error = "Mobile number must be 10 digits";
        }
        break;
      case "resume":
  if (!value) {
    error = "Please upload a resume";
  } else if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(value.type)) {
    error = "Please upload a PDF or Word file";
  }
  break;
      case "linkedinUrl":
        if (value && !value.startsWith("https://www.linkedin.com/")) {
          error = "Please enter a valid LinkedIn URL";
        }
        break;
      default:
        break;
    }
    return error;
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "resume") {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        setFormData((prev) => ({ ...prev, [name]: file.name }));
        setResumeFile(file);
        const error = validateInput(name, file);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      const error = validateInput(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key === "linkedinUrl" || key === "noticePeriod") {
        if (formData[key]) {
          const error = validateInput(key, formData[key]);
          if (error) {
            isValid = false;
            newErrors[key] = error;
            console.log(`Validation failed for ${key}: ${error}`);
          }
        }
      } else {
        const error = validateInput(
          key,
          key === "resume" ? resumeFile : formData[key]
        );
        if (error) {
          isValid = false;
          newErrors[key] = error;
          console.log(`Validation failed for ${key}: ${error}`);
        }
      }
    });
    setErrors(newErrors);
    return isValid;
  };
  const handleApplyNow = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendEmail();
      console.log("Form is valid, submit the form");
    } else {
      console.log("Form is invalid, fix errors before submitting");
    }
  };
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const sendEmail = async () => {
    if (!resumeFile) {
      console.error("No resume file uploaded");
      alert("Please upload a resume before submitting.");
      return;
    }
  
    let attachments = [];
    const resumeBase64 = await fileToBase64(resumeFile);
    attachments.push({
      name: resumeFile.name,
      data: resumeBase64.split(",")[1],
    });
    window?.Email?.send({
      SecureToken: "35216469-693f-4fea-9bca-2f7bd85519faasd",
      To: "mithil.m@latitudetechnolabs.org",
      From: "mithil.m@latitudetechnolabs.org",
      Subject: `Job Application from ${formData.fullName} for ${data.position}`,
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
          <h1>Job Application Details</h1>
          <h3><span class="label">Full Name:</span> ${formData.fullName}</h3>
          <h3><span class="label">Email:</span> ${formData.email}</h3>
          <h3><span class="label">Age:</span> ${formData.age}</h3>
          <h3><span class="label">Location:</span> ${formData.location}</h3>
          <h3><span class="label">Mobile No:</span> ${formData.mobileNo}</h3>
          <h3><span class="label">Qualification:</span> ${formData.qualification}</h3>
          <h3><span class="label">Gender:</span> ${formData.gender}</h3>
          <h3><span class="label">LinkedIn URL:</span> <a href="${formData.linkedinUrl}">${formData.linkedinUrl}</a></h3>
          <h3><span class="label">Experience:</span> ${formData.experience}</h3>
          <h3><span class="label">Notice Period:</span> ${formData.noticePeriod}</h3>
          <h3><span class="label">Current CTC:</span> ${formData.currCtc}</h3>
          <h3><span class="label">Expected CTC:</span> ${formData.expCtc}</h3>
          <h3><span class="label">Skills:</span> ${formData.skills}</h3>
          <h3><span class="label">Attributes:</span> ${formData.attributes}</h3>
          <h3><span class="label">Message:</span> ${formData.message}</h3>
        </div>
      </body>
    </html>
      `,
      Attachments: attachments,
    })
      .then((message) => {
        if (message === "OK") {
          console.log("Mail sent successfully:", message);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your Inquiry has Received!',
            customClass: {
              title: 'swal-title',
              text:"swal-text",
              confirmButton: 'swal-confirm-button'
            }
          });
          setFormData(initialData);
          setErrors({});
          setResumeFile(null);
        }
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email. Please try again.");
      });
  };
  return (
    <div id="jobApplyForm">
      <h2 className="section-title">Apply For {data.position}</h2>
      <div className="form-grid">
        <InputField
          label={"Full Name"}
          placeholder={"Enter Your Full Name"}
          name={"fullName"}
          value={formData.fullName}
          handleChange={handleInput}
          error={errors.fullName}
        />
        <InputField
          label={"Age"}
          placeholder={"Enter Your Age"}
          type="number"
          name={"age"}
          value={formData.age}
          handleChange={handleInput}
          error={errors.age}
        />
        <InputField
          label={"Current Location"}
          placeholder={"Enter Your Current Location"}
          name={"location"}
          value={formData.location}
          handleChange={handleInput}
          error={errors.location}
        />
        <InputField
          label={"Mobile Number"}
          placeholder={"Enter Your Mobile Number"}
          name={"mobileNo"}
          type="number"
          value={formData.mobileNo}
          handleChange={handleInput}
          error={errors.mobileNo}
        />
        <InputField
          label={"Email Address"}
          placeholder={"Enter Your Email Address"}
          name={"email"}
          type="email"
          value={formData.email}
          handleChange={handleInput}
          error={errors.email}
        />
        <InputField
          label={"Qualification"}
          isDropdown={true}
          options={[
            { name: "Select Qualification", value: "" },
            { name: "B.E Graduate", value: "BE Graduate" },
            { name: "M.C.A", value: "Mca" },
            { name: "M.Tech", value: "MTech" },
            { name: "B.A", value: "BA" },
            { name: "B.Com", value: "Bcom" },
            { name: "B.Sc (IT)", value: "Bsc It" },
            { name: "Diploma", value: "Diploma" },
            { name: "Other", value: "Other" },
          ]}
          name={"qualification"}
          value={formData.qualification}
          handleChange={handleInput}
          error={errors.qualification}
        />
        <InputField
          label={"Gender"}
          isDropdown={true}
          options={[
            { name: "Select Gender", value: "" },
            { name: "Male", value: "Male" },
            { name: "Female", value: "Female" },
          ]}
          name={"gender"}
          value={formData.gender}
          handleChange={handleInput}
          error={errors.gender}
        />
        <InputField
          label={"Linkedin Profile"}
          placeholder={"Enter Your Linkedin Profile URL"}
          name={"linkedinUrl"}
          required={false}
          value={formData.linkedinUrl}
          handleChange={handleInput}
          error={errors.linkedinUrl}
        />
        <InputField
          label={"Relevant Experience"}
          isDropdown={true}
          options={[
            { name: "Select Relevant Experience", value: "" },
            { name: "Fresher", value: "fresher" },
            { name: "1+ Years", value: "1" },
            { name: "2+ Years", value: "2" },
            { name: "3+ Years", value: "3" },
            { name: "4+ Years", value: "4" },
            { name: "5+ Years", value: "5" },
            { name: "6+ Years", value: "6" },
            { name: "7+ Years", value: "7" },
            { name: "8+ Years", value: "8" },
            { name: "9+ Years", value: "9" },
            { name: "10+ Years", value: "10" },
          ]}
          name={"experience"}
          value={formData.experience}
          handleChange={handleInput}
          error={errors.experience}
        />
        <InputField
          label={"Notice Period"}
          placeholder={"Notice Period"}
          name={"noticePeriod"}
          required={false}
          value={formData.noticePeriod}
          handleChange={handleInput}
          error={errors.noticePeriod}
        />
        <InputField
          label={"Current CTC"}
          placeholder={"Enter Your Current CTC"}
          name={"currCtc"}
          value={formData.currCtc}
          handleChange={handleInput}
          error={errors.currCtc}
        />
        <InputField
          label={"Expected CTC"}
          placeholder={"Enter Your Expected CTC"}
          name={"expCtc"}
          value={formData.expCtc}
          handleChange={handleInput}
          error={errors.expCtc}
        />
        <InputField
          label={"Skills"}
          placeholder={"Enter Your Skills"}
          isTextarea={true}
          name={"skills"}
          value={formData.skills}
          handleChange={handleInput}
          error={errors.skills}
        />
        <InputField
          label={"Personal Attributes"}
          placeholder={"Enter Your Personal Attributes"}
          isTextarea={true}
          name={"attributes"}
          value={formData.attributes}
          handleChange={handleInput}
          error={errors.attributes}
        />
        <InputField
          label={"Message"}
          placeholder={"Enter Your Message"}
          isTextarea={true}
          wrapperClassName="full-width"
          name={"message"}
          value={formData.message}
          handleChange={handleInput}
          error={errors.message}
        />
        <InputField
          label={"Upload Resume"}
          isDropZone={true}
          wrapperClassName="full-width"
          name={"resume"}
          value={formData.resume}
          accept={".pdf,.doc,.docx"}
          handleChange={handleInput}
          error={errors.resume} 
        />
        <SwipeButton
          text={"Apply Now"}
          onClick={handleApplyNow}
          changeHoverColor={false}
        />
      </div>
    </div>
  );
}
