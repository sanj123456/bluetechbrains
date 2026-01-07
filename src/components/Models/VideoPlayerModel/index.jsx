"use client";
import React, { useEffect, useState } from "react";
import "./videoPlayerModel.scss";
import { RxCross2 } from "react-icons/rx";

export default function VideoPlayerModel({ closeVideoPlayer }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "auto");
  }, []);
  return (
    <section id="aboutVideoPlayerMain" className="videoPlayerModelMain">
      <div className="videoPlayerConateiner">
        <video className="videoPlayer" autoPlay={true} loop={true} controls>
          <source src={"./homeVideo.webm"} type="video/webm" />
        </video>
      </div>
      <div
        onClick={() => {
          closeVideoPlayer();
        }}
        className="cross"
      >
        <RxCross2 size={25} />
      </div>
    </section>
  );
}
