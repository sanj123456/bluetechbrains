"use client";
import React, { useEffect, useRef, useState } from "react";
import "./teamStats.scss";
import CountUp from "react-countup";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import SectionTitle from "@/components/common/SectionTitle";

export default function TeamStats() {
  const teamStatsRef = useRef(null);

  const [startCounting, setStartCounting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          setStartCounting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (teamStatsRef.current) {
      observer.observe(teamStatsRef.current);
    }

    return () => {
      if (teamStatsRef.current) {
        observer.unobserve(teamStatsRef.current);
      }
    };
  }, []);
  return (
    <MaxWidthWrapper backgroundColor={"#fafafc"}>
      <section className="teamStats-main">
        <SectionTitle topTitle={"DRIVING SUCCESS WITH EXPERTISE"} title={"Team Stats"}/>
        <div ref={teamStatsRef} class="team-state-section  ">
          <div class="wrap">
            <div class="team-state-row">
              <div class="team-state-main">
                <h2 class="animCounter" data-count="35">
                  {startCounting && (
                    <CountUp
                      duration={4}
                      delay={1}
                      start={0}
                      end={35}
                      suffix="+"
                    />
                  )}
                </h2>
                <span class="super-lead-text">Experts</span>
              </div>

              <div class="team-state-boxes left">
                <div class="team-state-box box1">
                  <div class="team-state-info gradient-text gradient-purple">
                    <h3>50%</h3>
                    <p>
                      Backend <br /> Developers
                    </p>
                    <svg
                      width="104"
                      height="208"
                      viewBox="0 0 104 208"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M104 0C76.4175 0 49.9647 10.9571 30.4609 30.4609C10.9571 49.9647 -7.67294e-07 76.4175 0 104C7.67294e-07 131.583 10.9571 158.035 30.4609 177.539C49.9647 197.043 76.4175 208 104 208V191.944C80.6759 191.944 58.3071 182.678 41.8144 166.186C25.3218 149.693 16.0563 127.324 16.0563 104C16.0563 80.6759 25.3218 58.3071 41.8144 41.8144C58.3071 25.3218 80.6759 16.0563 104 16.0563L104 0Z"
                        fill="url(#paint0_linear_1615_8840)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1615_8840"
                          x1="-67.1858"
                          y1="140.814"
                          x2="67.1858"
                          y2="-67.1858"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#8E6C4F" />
                          <stop offset="1" stop-color="#C19A6B" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div class="team-state-box box2">
                  <div class="team-state-info gradient-text gradient-sky-blue">
                    <h3>25%</h3>
                    <p>
                      Front End <br /> Developers
                    </p>
                    <svg
                      width="104"
                      height="208"
                      viewBox="0 0 104 208"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M104 0C76.4175 0 49.9647 10.9571 30.4609 30.4609C10.9571 49.9647 -7.67294e-07 76.4175 0 104C7.67294e-07 131.583 10.9571 158.035 30.4609 177.539C49.9647 197.043 76.4175 208 104 208V191.944C80.6759 191.944 58.3071 182.678 41.8144 166.186C25.3218 149.693 16.0563 127.324 16.0563 104C16.0563 80.6759 25.3218 58.3071 41.8144 41.8144C58.3071 25.3218 80.6759 16.0563 104 16.0563L104 0Z"
                        fill="url(#paint0_linear_1615_8848)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1615_8848"
                          x1="156"
                          y1="13.9334"
                          x2="52"
                          y2="194.067"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7D9D9C" />
                          <stop offset="1" stop-color="#576F72" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div class="team-state-box box3">
                  <div class="team-state-info gradient-text gradient-red">
                    <h3>5%</h3>
                    <p>QA Testers</p>
                    <svg
                      width="104"
                      height="208"
                      viewBox="0 0 104 208"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M104 0C76.4175 0 49.9647 10.9571 30.4609 30.4609C10.9571 49.9647 -7.67294e-07 76.4175 0 104C7.67294e-07 131.583 10.9571 158.035 30.4609 177.539C49.9647 197.043 76.4175 208 104 208V191.944C80.6759 191.944 58.3071 182.678 41.8144 166.186C25.3218 149.693 16.0563 127.324 16.0563 104C16.0563 80.6759 25.3218 58.3071 41.8144 41.8144C58.3071 25.3218 80.6759 16.0563 104 16.0563L104 0Z"
                        fill="url(#paint0_linear_1615_8854)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1615_8854"
                          x1="-67.1858"
                          y1="140.814"
                          x2="67.1858"
                          y2="-67.1858"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#A27B5C" />
                          <stop offset="1" stop-color="#DCD7C9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="team-state-boxes right">
                <div class="team-state-box box4">
                  <div class="team-state-info gradient-text gradient-blue">
                    <h3>10%</h3>
                    <p>
                      Sales &amp;
                      <br />
                      Management
                      <br />
                      Team
                    </p>
                    <svg
                      width="105"
                      height="208"
                      viewBox="0 0 105 208"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00391388 0C27.5864 0 54.0392 10.9571 73.543 30.4609C93.0468 49.9647 104.004 76.4175 104.004 104C104.004 131.583 93.0468 158.035 73.543 177.539C54.0392 197.043 27.5864 208 0.00390625 208V191.944C23.328 191.944 45.6968 182.678 62.1895 166.186C78.6821 149.693 87.9476 127.324 87.9476 104C87.9476 80.6759 78.6821 58.3071 62.1895 41.8144C45.6968 25.3218 23.328 16.0563 0.00391388 16.0563L0.00391388 0Z"
                        fill="url(#paint0_linear_1615_8816)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1615_8816"
                          x1="171.19"
                          y1="140.814"
                          x2="36.8181"
                          y2="-67.1858"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#6B4F4F" />
                          <stop offset="1" stop-color="#A77979" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div class="team-state-box box5">
                  <div class="team-state-info gradient-text gradient-orange">
                    <h3>5%</h3>
                    <p>
                      Designer <br /> Team
                    </p>
                    <svg
                      width="104"
                      height="208"
                      viewBox="0 0 104 208"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.62939e-06 0C27.5825 0 54.0353 10.9571 73.5391 30.4609C93.0429 49.9647 104 76.4175 104 104C104 131.583 93.0429 158.035 73.5391 177.539C54.0353 197.043 27.5825 208 0 208V191.944C23.3241 191.944 45.6929 182.678 62.1856 166.186C78.6782 149.693 87.9437 127.324 87.9437 104C87.9437 80.6759 78.6782 58.3071 62.1856 41.8144C45.6929 25.3218 23.3241 16.0563 7.62939e-06 16.0563L7.62939e-06 0Z"
                        fill="url(#paint0_linear_1615_8825)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1615_8825"
                          x1="104"
                          y1="104"
                          x2="-104"
                          y2="104"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#967E76" />
                          <stop offset="1" stop-color="#D7C0AE" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div class="team-state-box box3">
                  <div class="team-state-info gradient-text gradient-green">
                    <h3>5%</h3>
                    <p>
                      Project <br /> Managers
                    </p>
                    <svg
                      width="105"
                      height="208"
                      viewBox="0 0 105 208"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00391388 0C27.5864 0 54.0392 10.9571 73.543 30.4609C93.0468 49.9647 104.004 76.4175 104.004 104C104.004 131.583 93.0468 158.035 73.543 177.539C54.0392 197.043 27.5864 208 0.00390625 208V191.944C23.328 191.944 45.6968 182.678 62.1895 166.186C78.6821 149.693 87.9476 127.324 87.9476 104C87.9476 80.6759 78.6821 58.3071 62.1895 41.8144C45.6968 25.3218 23.328 16.0563 0.00391388 16.0563L0.00391388 0Z"
                        fill="url(#paint0_linear_1615_8830)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1615_8830"
                          x1="171.19"
                          y1="140.814"
                          x2="36.8181"
                          y2="-67.1858"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7D8F69" />
                          <stop offset="1" stop-color="#A9AF7E" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
