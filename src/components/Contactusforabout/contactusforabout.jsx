import React from "react";
import "./contactusforabout.scss";
import Image from "next/image";
import { AppImages } from "@/assets/AppImages";
import SwipeButton from "../common/SwipeButton";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const Contactusforabout = () => {
  return (
    <MaxWidthWrapper>

    <div className="contactus-content">
      <div className="wrapper">
        <div className="items-container">
          <div className="left-items-div">
            <h1 className="contact-us-heading"> About Siciliantech </h1>
            <p className="p1">
              siciliantech is an award winning web agency in India since 2007
              serving clients across the globe. We are providing excellent
              solutions for web design, web development, eCommerce development,
              mobile app development, and seo services to our global clients. We
              are the perfect choice for businesses looking to take their online
              presence to the next level.
            </p>
            <p className="p2">
              Our teams are always excited to assist you. If you want to discuss
              a potential technology partnership or project, please let us know,
              and our business consultant will connect with you shortly.
            </p>
            <ul className="list-heading">
              <li>Website Design</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Ecommerce Development</li>
              <li>UI/UX Design</li>
              <li>SEO</li>
            </ul>
            <SwipeButton text={"Get In Touch"} wrapperClass="banner-btn" href="/get-a-quote"/>
          </div>
          <div className="right-items-div">
            <div className="right-item-cards">
              <div className="above-cards">
                <div className="counter-div">
                  <figure>
                    <Image height={40} width={40} src={"/contact-work.svg"} />
                  </figure>
                  <h2 className="number">99%</h2>
                  <span className="job">Job Satisfaction Ratio</span>
                </div>
                <div className="counter-div2">
                  <figure>
                    <Image
                      height={40}
                      width={40}
                      src={"/contact-experiance.svg"}
                    />
                  </figure>
                  <h2 className="number2">15+</h2>
                  <span className="job2">Years of Experience</span>
                </div>
              </div>
              <div className="below-cards">
                <div className="counter-div">
                  <figure>
                    <Image height={40} width={40} src={"/successfull.svg"} />
                  </figure>
                  <h2 className="number">9,050+</h2>
                  <span className="job">Successful Projects</span>
                </div>
                <div className="counter-div2">
                  <figure>
                    <Image height={40} width={40} src={"/team-mem.svg"} />
                  </figure>
                  <h2 className="number2">35+</h2>
                  <span className="job2">Experts</span>
                </div>
                <div className="counter-div3">
                  <figure>
                    <Image height={40} width={40} src={"/client-global.svg"} />
                  </figure>
                  <h2 className="number3">580+</h2>
                  <span className="job3">Global Clients</span>
                </div>
              </div>
            </div>
            <div className="right-item-awards">
              <div className="awards-container">
                <div className="award-box">
                  <div className="award-name2">
                    {/* <Image src={AppImages.AwardLogo1} className="award-img" height={30} width={45}/> */}
                    <p className="award-img">Best in the world!</p>
                  </div>
                </div>
                <div className="award-box">
                  <div className="award-name2">
                    {/* <Image src={AppImages.AwardLogo2} className="award-img" height={19} width={32}/> */}
                    <p className="award-img">Best in the world!</p>
                  </div>
                </div>
                <div className="award-box">
                  <div className="award-name2">
                    {/* <Image src={AppImages.AwardLogo3} className="award-img" height={19} width={32}/> */}
                    <p className="award-img">Best in the world!</p>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="titleaward">
              India&apos;s 1st SOTD award winner by awwwards.com in 2010
            </h5>
          </div>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default Contactusforabout;
