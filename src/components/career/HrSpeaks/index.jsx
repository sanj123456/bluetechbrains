import React from "react";
import "./hrspeaks.scss";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import SectionTitle from "@/components/common/SectionTitle";
import { IoMdPhonePortrait } from "react-icons/io";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import Link from "next/link";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
export default function HrSpeaks() {
  return (
    <div id="hr-speaks">
      <div className="section-container">
        <SectionTitle
          topTitle={"Looking for Job Opportunities"}
          title={"HR Speaks"}
        />
        <MaxWidthWrapper backgroundColor={"#f9fbff"}>
          <div className="hr-box">
            <div className="social-box">
              <figure>
                <img src="/client1.svg" />
              </figure>
              <ul>
                <li>
                  <Link class="linkedin" href="#" title="linkedin">
                    <BiLogoLinkedin className="icon" />
                  </Link>
                </li>
                <li>
                  <Link class="facebook" href="#" title="facebook">
                    <GrFacebookOption className="icon" />
                  </Link>
                </li>
                <li>
                  <Link class="instagram" href="#" title="instagram">
                    <BiLogoInstagramAlt className="icon" />
                  </Link>
                </li>
                <li>
                  <Link class="twitter" href="#" title="twitter">
                    <FaTwitter className="icon" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="details">
              <h3>
                Rohan Shah
                <span>HR Manager</span>
              </h3>
              <p>
                I’ve always worked on creating a positive and inclusive
                work-culture that values and appreciates every employee. I
                firmly believe that when HR prioritizes both employee comfort
                and company growth, it enables everyone to unleash their full
                potential, leading to sustainable and long-term success. Every
                member of our organization plays a significant role, and we
                consistently ensure that they feel recognized for their
                contributions.
              </p>
              <ul>
                <li class="email">
                  <a href="#">
                    <MdOutlineMailOutline className="contact-icon" />
                    hr@ScilianTech.com
                  </a>
                </li>
                <li class="phone">
                  <a href="#">
                    <IoMdPhonePortrait className="contact-icon" />
                    +91 9889475849
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
