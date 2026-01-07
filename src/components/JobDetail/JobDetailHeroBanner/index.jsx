import React from "react";
import "./jobdetailherobanner.scss";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import { AppImages } from "@/assets/AppImages";
import Image from "next/image";
import SwipeButton from "@/components/common/SwipeButton";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Swal from "sweetalert2";

export default function JobDetailHeroBanner({ data, onApplyNowClick  }) {
  const handleShareClick = () => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        Swal.fire({
          icon: "success",
          title: "URL Copied",
          text: "The page URL has been copied to your clipboard.",
          customClass: {
            title: 'swal-title',
            text:"swal-text",
            confirmButton: 'swal-confirm-button'
          }
        });
      }).catch(() => {
        Swal.fire({
          icon: "error",
          title: "Failed to Copy",
          text: "There was an error copying the URL. Please try again.",
          customClass: {
            title: 'swal-title',
            text:"swal-text",
            confirmButton: 'swal-confirm-button'
          }
        });
      });
    }
  };
  return (
    <div id="job-detail-banner">
      <div className="section-container">
        <div className="left-box">
          <Link href={"/career"} > <FaLongArrowAltLeft />Back To Job Listing</Link>
          <h1>{data?.position}</h1>
          <p>{data?.shortDetail}</p>
          <ul>
            <li><span><Image src={AppImages.ExperienceIcon} /></span><strong>Experience : </strong>{data.experience} years</li>
            <li><span><Image src={AppImages.JobTypeIcon} /></span><strong>Job Type : </strong>{data?.jobType}</li>
            <li><span><Image src={AppImages.LocationIcon} /></span><strong>Location : </strong>{data?.location}</li>
            <li><span><Image src={AppImages.OpeningIcon} /></span><strong>Openings : </strong>{data?.openings}</li>
          </ul>
          <div className="button-box">
            <SwipeButton text={"Apply Now"} onClick={onApplyNowClick}/>
            <SwipeButton text={"Share"}
             icon={<IoShareSocialOutline />} 
             onClick={handleShareClick}/>
          </div>
        </div>
        <div className="right-box">
          <figure>
            <Image src={AppImages.JobDetailBannerImage}/>
          </figure>
        </div>
      </div>
    </div>
  );
}
