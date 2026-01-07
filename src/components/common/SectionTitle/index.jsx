import React from "react";
import "./sectiontitle.scss";
import dynamic from "next/dynamic";
const StaggerTextt = dynamic(() => import("../../StaggerEffect/Stagger"), {
  ssr: false,
});

export default function SectionTitle({topTitle, title}) {
  return (
    <div id="section-title">
      <span className="top-title">{topTitle}</span>
      <h2 className="main-title">
        <StaggerTextt text={title} />
      </h2>
    </div>
  );
}
