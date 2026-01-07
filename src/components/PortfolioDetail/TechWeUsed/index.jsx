import React from "react";
import "./techweused.scss";
import Image from "next/image";

export default function TechWeUsed({ technologyData, responsibleData }) {
  return (
    <div id="techweused">
      <div className="tech-container">
        <div className="grid">
          <h3>Tools & Technologies used</h3>
          <ul class="tech-listing">
            {technologyData?.map((tech, i) => {
              return (
                <li key={i}>
                  <tech.icon/>
                  {/* <Image src={tech.techImg} height={34} width={30} alt=""/> */}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid">
          <h3>What we were responsible for</h3>
          <ul className="responsible-list-box">
            {responsibleData?.map((item, i) => {
              return <li key={i}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
