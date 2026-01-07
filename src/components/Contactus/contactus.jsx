import React from "react";
import "./contactus.scss";
import Image from "next/image";
import SwipeButton from "../common/SwipeButton";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const Contactus = () => {
  return (
    <MaxWidthWrapper>

    <div className="contactus-content">
      <div className="wrapper">
        <div className="items-container">
          <div className="left-items-div">
            <h1 className="contact-us-heading"> Contact us </h1>
            <p className="p1">
              siciliantech is an award-winning web agency that specializes in
              UI/UX Design, Website Development, Mobile App Development,
              E-Commerce Web Development, and SEO services. Clients can choose
              best-fit business engagement model as per their project
              requirements.
            </p>
            <p className="p2">
              Our teams are always excited to assist you. If you want to discuss
              a potential technology partnership or project, please let us know,
              and our business consultant will connect with you shortly.
            </p>
            <SwipeButton text={"Get In Touch"} href="/get-a-quote"/>
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
            <h5>
              <span>siciliantech</span> is a top-rated web design and web & app
              development agency in India by Clutch, Goodfirms and Awwwards.com
            </h5>
          </div>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default Contactus;
