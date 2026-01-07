import React from "react";
import "./swipeButton.scss";
import { IoSend } from "react-icons/io5";
import Link from "next/link";

export default function SwipeButton({
  href="",
  bgColorAsClass,
  text,
  loadingIcon = <div className="loader-container"></div>,
  loading = false,
  bgColor,
  changeHoverColor = true,
  icon = <IoSend className="btn-icon" />,
  onClick,
  wrapperClass="",
}) {

  
 const Html = (
   <div
     onClick={onClick}
     style={loading ? { pointerEvents: "none" } : {}}
     class={`button ${!changeHoverColor ? "no-hover-color" : ""}`}
   >
     {loading && loadingIcon}
     <span style={{ visibility: loading ? "hidden" : "visible" }}>
       {text} {icon}
     </span>
     <div
       className={`before ${bgColorAsClass}`}
       style={{ background: bgColor }}
     ></div>
   </div>
 );
  return (
    <div className={`cover-swipe ${wrapperClass}`}>
      {href ? <Link prefetch={true} href={href}>{Html}</Link> : <div>{Html}</div>}
    </div>
  );
}
