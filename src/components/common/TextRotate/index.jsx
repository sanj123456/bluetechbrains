import React from "react";
import "./Textrotate.scss";
import Link from "next/link";
const splitString = (str) =>
  str.split("").map((char, index) => (
    <span className="char" key={index}>
      {char=== " " ? <>&nbsp;</> :   char}
    </span>
  ));

const TextRotate = ({ name,href ,icon ,onClick}) => {
  const renderedname = splitString(name);

  return (
    <Link onClick={onClick} href={href} className="link-hover-container">
      <div className="link-hover">
        <div className="block">{renderedname}</div>
        <div className="block">{renderedname}</div>
        <span className="icon">{icon}</span>
      </div>
    </Link>
  );
};

export default TextRotate;
