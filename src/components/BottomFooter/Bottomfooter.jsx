import React from "react";
import "./Bottomfooter.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Footerwatch from "../footerWatch";
import FooterRedirection from "../FooterRedirections";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import GetInTouchNow from "../GetInTouchNow";
import Link from "next/link";
const Bottomfooter = () => {
  return (
    <>
      <GetInTouchNow />
      <Footerwatch />
      {/* <FooterRedirection /> */}
      <MaxWidthWrapper>
        <div className="main-container-footer-bottom">
          <div className="wrapper-div">
            <div className="left-div">
              <h2 className="left-heading">Most trusted & reliable company</h2>
              <div className="left-images-div">
                <Image height={40} width={40} src={"/clutch.svg"} />
                <Image height={40} width={40} src={"/envato.svg"} />
                <Image
                  className="star-img"
                  height={40}
                  width={40}
                  src={"/trustpilot-2.svg"}
                />
                <Image height={40} width={40} src={"/wordpress-2.svg"} />
              </div>
            </div>
            <div className="right-div">
              <h2 className="right-heading">We are so loved! </h2>
              <div className="right-images-div">
                <figure>
                  <Image src={AppImages.clutchReview} />
                </figure>
                <figure>
                  <Image src={AppImages.trustPilotReview} />
                </figure>
                <figure>
                  <Image src={AppImages.googleReview} />
                </figure>
              </div>
            </div>
          </div>
          <div className="copyright-div">
            <div className="right-c">
              <ul className="ul">
                <li className="li">
                  © 2024 siciliantech Infotech Pvt. Ltd. All rights reserved.
                </li>
                <li className="li-2">
                  Delivering excellence since <strong>2007</strong>{" "}
                </li>
              </ul>
              <ul className="ul-bottom">
                <Link href={"/privacy-policy"}> <li className="li-bottom link-hover2">Privacy Policy</li></Link>
                <Link href={"/terms"}> <li className="li-bottom link-hover2">Terms of Use</li></Link>
                <Link href={"/faq"}> <li className="li-bottom link-hover2">FAQ</li></Link>
                <Link href={"/sitemap"}> <li className="li-bottom link-hover2">Sitemap</li></Link>
                <li className="li-bottom">
                  <img className="dmca-img" src="/dmca-protected.svg" />
                </li>
              </ul>
            </div>
            <div className="left-c">
              <h5 className="connect-heading">Connect with us</h5>
              <ul className="ul-left">
                <li className="ul-list">
                  <FaLinkedin className="linkdn" />
                </li>
                <li className="ul-list">
                  <RiInstagramFill className="ig" />
                </li>
                <li className="ul-list">
                  <BsYoutube className="yt" />
                </li>
                <li className="ul-list">
                  <FaXTwitter className="x" />
                </li>
                <li className="ul-list">
                  <FaFacebook className="fb" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Bottomfooter;
