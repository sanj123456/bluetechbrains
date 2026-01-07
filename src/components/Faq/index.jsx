"use client";
import React, { useState } from "react";
import "./faq.scss";
import SwipeButton from "../common/SwipeButton";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { Colors } from "@/styles/colors";
import SectionTitle from "../common/SectionTitle";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState("");
  const data = [
    {
      question: "What are Web App Development Services?",
      answer: {
        paragraph: "Web application development services involve:",
        items: [
          "Designing websites and mobile applications",
          "Customising them",
          "Completing an entire development cycle, from improving old technologies to upgrading new technologies, in accordance with a given business necessity",
        ],
      },
    },
    {
      question: "How does app development help my business?",
      answer: {
        paragraph:
          "The main goal of our development is to create software that will be engaging and user-friendly apps that boost your productivity and efficiency.",
      },
    },
    {
      question: "Does Siciliantech offer complete software delivery?",
      answer: {
        paragraph:
          "Yes, Siciliantech controls everything, from design and development through implementation, integration, setup, and support. In addition to saving time, the solutions are intended to cut costs and keep your business in line with market demands.",
      },
    },
    {
      question: "What technologies do you use for web app development?",
      answer: {
        paragraph:
          "At Siciliantech, we leverage technologies, including Python, Angular JS, React JS, Java Spring Boot, and Golang; we use the best tech based on the app's features, design, or platform requirements",
      },
    },
    {
      question: "Do you develop software for both mobile and web platforms?",
      answer: {
        paragraph:
          "Yes, we are proficient in developing software for all platforms, including native, hybrid, and web versions. Our agile approach is customised to fulfil your business objectives and intended audience, whether you’re in healthcare, finance, eCommerce, or another industry.",
      },
    },
  ];

  return (
    <MaxWidthWrapper backgroundColor={Colors.$primary_color}>
      <div id="faq">
        <div className="section-container">
          <SectionTitle
            topTitle={"ASKED QUESTIONS WITH VALUE"}
            title={"Frequently Asked Questions"}
          />
          <div className="faq-box">
            <div className="faq-info">
              <h2 className="info-title">Have Any Queries?</h2>
              <p className="info-detail">
                Have a word with our expert consultants about your next project
                to get suggestive guidance & proposal.
              </p>
              <SwipeButton
                text={"Get a free consultation now "}
                changeHoverColor={false}
                href="/get-a-quote"
              />
            </div>
            <div className="faq-list">
              {data.map((faq, i) => {
                return (
                  <>
                    <div
                      key={i}
                      className="faq-item"
                      onClick={() =>
                        openFaq === i ? setOpenFaq("") : setOpenFaq(i)
                      }
                    >
                      <h5
                        className={`question ${
                          openFaq === i ? "open-question" : ""
                        }`}
                      >
                        {faq.question}
                      </h5>
                      <div
                        className={`answer ${
                          openFaq === i ? "open-answer" : ""
                        }`}
                      >
                        <ul className="list-container">
                          <li className="list-para">
                            {faq?.answer.paragraph}
                            {faq.answer.items && (
                              <ul>
                                {faq.answer.items.map((item, index) => {
                                  return <li key={index}>{item}</li>;
                                })}
                              </ul>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
