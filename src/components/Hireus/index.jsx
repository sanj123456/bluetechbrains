import React from "react";
import './hireus.scss'
import CustomDataSwiper from "../common/CustomDataSwiper";

export default function HireUs() {
  const data = [
    {
      developerType: "Web & App",
      items: [
        "Hire UI/UX Designer",
        "Hire Frontend Developer",
        "Hire Full Stack Developer",
        "Hire MEAN Stack Developer",
        "Hire MERN Stack Developer",
        "Hire Dedicated Development Team",
        "Hire IT Outsourcing Services Team",
      ],
      bgColor: "linear-gradient(218.87deg, #f5f447 -37.65%, #2eb86c 96.33%)",
      listBg: "linear-gradient(216.24deg,rgba(245, 244, 71, 0.94) -34.54%,rgba(46, 184, 108, 0.88) 98.47%)"
    },
    {
      developerType: "Mobile App",
      items: [
        "Hire UI/UX Designer",
        "Hire Frontend Developer",
        "Hire Full Stack Developer",
        "Hire MEAN Stack Developer",
        "Hire MERN Stack Developer",
        "Hire Dedicated Development Team",
      ],
      bgColor: "linear-gradient(218.44deg, #63f5ff -16.59%, #47b0ff 108.34%)",
      listBg: "linear-gradient(218.44deg, rgba(99, 245, 255, .94) -16.59%, rgba(71, 176, 255, .94) 108.34%)"
    },
    {
      developerType: "Frontend",
      items: [
        "Hire UI/UX Designer",
        "Hire Frontend Developer",
        "Hire Full Stack Developer",
        "Hire MEAN Stack Developer",
        "Hire MERN Stack Developer",
        "Hire Dedicated Development Team",
        "Hire IT Outsourcing Services Team",
      ],
      bgColor: "linear-gradient(236.68deg, #ff5b9d 0%, #e83485 100%)",
      listBg: "linear-gradient(236.68deg, rgba(255, 91, 157, .9) 0%, #e83485 100%)"
    },
    {
      developerType: "Backend",
      items: [
        "Hire UI/UX Designer",
        "Hire Frontend Developer",
        "Hire Full Stack Developer",
        "Hire MEAN Stack Developer",
        "Hire MERN Stack Developer",
        "Hire Dedicated Development Team",
        "Hire IT Outsourcing Services Team",
      ],
      bgColor: "linear-gradient(147.14deg, #3e7bfa 6.95%, #60c 93.05%)",
      listBg: "linear-gradient(147.14deg, rgba(62, 123, 250, .9) 6.95%, #60c 93.05%)"
    },
  ];

  const slides = data.map((item, index) => (
    // <div key={index} id="hireus" style={{ background: item.bgColor }}>
    <div key={index} id="hireus">
      <div className="hiring-header">
        <h2 className="hire-title">{item.developerType}</h2>
        <h3 className="hire-subtitle">
          <span>Developers</span>
        </h3>
      </div>
      <div className="hiring-list">
        <ul>
          {item.items.map((el, index) => {
            return <li key={index} className="list-item">{el}</li>;
          })}
        </ul>
        {/* <div className="list-bg" style={{background: item.listBg}}></div> */}
        <div className="list-bg"></div>
      </div>
    </div>
  ));

  const smTitle = "What we do";
  const title = "Hire us";
  const description =
    "At Siciliantech, we pride ourselves on our excellent team spirit, as our skills complement one another very well. We trust in meaningful communication that goes beyond textbooks. Our client's success with the software is our greatest reward. We don’t just write code; we perceive the details and create solutions that are simple, effective, and attractive.";
  const btnText = "Hire Us Now";
  const btnLink = "/developer"
  const breakpoints = {
    0:{
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2.4,
    },
    992: {
      slidesPerView: 1.8,
    },
    1280: {
      slidesPerView: 2.3,
    },
    1640: {
      slidesPerView: 3.2,
    },
    2200: {
      slidesPerView: 4.3,
    },
  };

  return (
    <CustomDataSwiper
      smallTitle={smTitle}
      title={title}
      description={description}
      btnText={btnText}
      btnLink={btnLink}
      bgTheme={"blue"}
      slides={slides}
      preBtnClass={"hire-pre-btn"}
      nextBtnClass={"hire-next-btn"}
      breakpoints={breakpoints}
    />
  );
}
