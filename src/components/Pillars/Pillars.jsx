import React from "react";
import "./Pillars.scss";
import Image from "next/image";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import SectionTitle from "../common/SectionTitle";
const Pillars = () => {
  return (
    <MaxWidthWrapper>

      <div className="pillars-container">
        <div className="wrapper-pillars-div">
          <SectionTitle topTitle={"The Sturdiest Pillar of Support"} title={"Our Leaders"}/>
          <div className="images-divv">
            <div className="left-img-div">
              <div className="team-photo">
                <figure className="work-image-box">
                  <Image
                    src={"/developer1.png"}
                    draggable={false}
                    className="hover-bg-img"
                    height={300}
                    width={300}
                    alt=""
                  />
                  <Image
                    src={"/developer1.png"}
                    draggable={false}
                    className="work-img"
                    height={300}
                    width={300}
                    alt=""
                  />
                </figure>
                <div className="team-info">
                  <h2>Jane Smith</h2>
                  <span>Founder & CEO, siciliantech Infotech Pvt. Ltd.</span>
                </div>
              </div>
            </div>
            <div className="right-images-div">
              <div className="team-photo">
                <figure className="work-image-box">
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="hover-bg-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="work-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                </figure>
                <div className="team-info">
                  <h2>Jane Smith</h2>
                  <span>Technical Project Manager</span>
                </div>
              </div>
              <div className="team-photo">
                <figure className="work-image-box">
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="hover-bg-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="work-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                </figure>
                <div className="team-info">
                  <h2>Jane Smith</h2>
                  <span>Technical Project Manager</span>
                </div>
              </div>
              <div className="team-photo">
                <figure className="work-image-box">
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="hover-bg-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="work-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                </figure>
                <div className="team-info">
                  <h2>Jane Smith</h2>
                  <span>Technical Project Manager</span>
                </div>
              </div>
              <div className="team-photo">
                <figure className="work-image-box">
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="hover-bg-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="work-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                </figure>
                <div className="team-info">
                  <h2>Jane Smith</h2>
                  <span>Technical Project Manager</span>
                </div>
              </div>
              <div className="team-photo">
                <figure className="work-image-box">
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="hover-bg-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="work-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                </figure>
                <div className="team-info">
                  <h2>Jane Smith</h2>
                  <span>Technical Project Manager</span>
                </div>
              </div>
              <div className="team-photo">
                <figure className="work-image-box">
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="hover-bg-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                  <Image
                    src={"/developer3.png"}
                    draggable={false}
                    className="work-img"
                    height={200}
                    width={200}
                    alt=""
                  />
                </figure>
                <div className="team-info">
                  <h2>Jane Smith</h2>
                  <span>Technical Project Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Pillars;
