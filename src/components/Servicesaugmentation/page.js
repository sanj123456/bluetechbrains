import React from "react";
import "./servicesaug.scss";
import PortfolioDetailSection from "../PortfolioDetail/PortfolioDetailSection";
const Servicesaugmentation = () => {
  const heading = "Why Hire Dedicated Developers";

  const pageData = [
    {
      title: "What is a dedicated team?",
      image:"/dedicated-team.jpg",
      paragraphs: [
        "A dedicated group is an ongoing collaboration in which the group exclusively focuses on your project. You have full authority, and the group concentrates exclusively on your interests without moving around between customers.",
      ],
    },
    {
      title: "Why is a dedicated team effective?",
      image:"/Why is a dedicated team effective-01.png",
      paragraphs: [
        "SicilianTech provides a whole software development team to manage all your project requirements, from structuring MVPs to upgrading and maintaining systems. Our remote team incorporates project leaders, software engineers, QA engineers, and even a technical director, customized to fit your project and targets. Our team speaks multiple languages fluently.",
      ],
    },
    {
      title: "Advantages of Hiring a Dedicated Team from SicilianTech",
      image:"/Advantages of Hiring a Dedicated Team from SicilianTech-01.png",
      list: [
        "Without wasting time on employment, begin at once.",
        "You will control the project team’s output and all technical features",
        "To discover a suitable strategy, request a free consultation.",
        "Do not engage in everyday management",
        "Recruit the best offshore programmers",
        "Preserve resources for crucial jobs",
      ],
    },
    {
      title: "When should you Hire a Dedicated Team?",
      image:"/When should you Hire a Dedicated Team-01.png",
      paragraphs: ["A dedicated team is a practical solution for persistent projects of different sizes. For established businesses, it helps them handle client requests and internal needs efficiently.",
        "For startups, dedicated teams are an intelligent choice when an organization wants to develop an MVP and test the market with budget-friendly investment. This approach helps you promptly turn concepts into reality and adapt them according to client feedback.",
        "View case studies of  SicilianTech, which helped clients create and turn initial products into prime successes."
      ],
    },
    {
      title: "What is the structure of the dedicated software development team?",
      image:"/What is the structure of the dedicated software development team-01.png",
      paragraphs: ["As a long-term partner, we establish a remote development team customized to the business's needs and our advice. You'll work closely with them and get support from SicilianTech staff to handle difficulties together."
      ],
    },
    {
      title: "What sets SicilianTech Unique",
      image:"/What sets SicilianTech Unique.png",
      list: [
        "It has taken a decade to gain experience in software development and IT consulting.",
        "A total of more than 200 successful projects have been accomplished.",
        "Able to adjust and grow.",
        "Agile development methodology.",
        "Regular training on the latest technology updates.",
        "Highly regarded by numerous customers.",
        "Inexpensive rates do not mean low quality.",
      ],
    },
    {
      title: "Dedicated Resources   ",
      image:"/Dedicated resourses-01.png",
      list: [
        "IT experts have been engaged for the entire period of the software development life cycle (SDLC).",
        "Dedicated developers for coding",
        "Advanced Technology tools",
        "Other general benefits",
      ],
    },
    {
      title: "Team as a Service (TaaS)",
      image:"/Team as a service-01.png",
      list: [
        "Hire our TaaS team to handle all technology duties for your product based on a strategic roadmap.",
        "Dedicated developers and team members",
        "Working tools",
        "General benefits and well-being",
        "Strategy alignment",
        "Tech consultation",  
        "Tech stack coaching",  
        "Daily team management",  
      ],
    },
  ];

  return (
    <PortfolioDetailSection toptitle={"Services Augmentation"} projectName={heading} portfolioDetail={pageData} />
  );
};

export default Servicesaugmentation;
