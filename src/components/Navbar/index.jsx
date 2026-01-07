"use client";
import React, { use, useEffect, useState } from "react";
import "./navbar.scss";
import Image from "next/image";
import { Icons } from "@/assets/Icons";
import TextRotate from "../common/TextRotate";
import { IoIosArrowDown } from "react-icons/io";
import SwipeButton from "../common/SwipeButton";
import ServicesDropDown from "./ServicesDropDown";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import AboutDropDown from "./AboutDropDown";
import Link from "next/link";
import { usePathname } from "next/navigation";

// FOR SMOOTH SCROLL

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 992) return;
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);


  //  useEffect(() => {
  //    if (window?.innerWidth <= 768) return;

  //    const container = scrollContainer.current;
  //    let ctx = gsap.context(() => {});

  //    const updateHeight = () => {
      
  //      document.body.style.height = `${container.clientHeight}px`;
  //    };

  //    const smoothScroll = () => {
  //      ctx.add(() => {
  //        gsap.to(container, {
  //          y: () =>
  //            -(container.clientHeight - document.documentElement.clientHeight),
  //          ease: "none",
  //          scrollTrigger: {
  //            trigger: document.body,
  //            start: "top top",
  //            end: "bottom bottom",
  //            scrub: 1,
  //            invalidateOnRefresh: true,
  //          },
  //        });
  //      });
  //    };

  //    updateHeight();
  //    smoothScroll();

  //    window.addEventListener("resize", updateHeight);

  //    return () => {
  //      ctx.revert();
  //      window.removeEventListener("resize", updateHeight);
  //    };
  //  }, []);
  //  useEffect(() => {
  //    if (window?.innerWidth <= 768) return;
  //    const container = document.getElementById("smooth-content");

  //    gsap.to(container, {
  //      y: () =>
  //        -(container.scrollHeight - document.documentElement.clientHeight),
  //      ease: "power1.out",
  //      scrollTrigger: {
  //        trigger: container,
  //        start: "top top",
  //        end: "bottom bottom",
  //        scrub: 1.4,
  //        // scrub: 1.5,
  //        invalidateOnRefresh: true,
  //      },
  //    });
  //  }, []);
  return (
    <div id="header-container" className={scrolled ? "scrolled" : ""}>
      <div className="header">
        <div className="header-img">
          <Link href={"/"}>
            {/* <Image src={Icons.headerIcon} height={30.375} width={200} /> */}
            <h1>Sicilian Tech</h1>
            {/* <h1 >Sicilian Tech</h1> */}
          </Link>
        </div>

        <div className="right-side">
          {" "}
          <ul className="navitem">
            <li
              className={`services ${
                pathname.includes("/services") && "activeLink"
              }`}
            >
              <TextRotate
                icon={<IoIosArrowDown />}
                href={"/services"}
                name={"SERVICES"}
              />
              <ServicesDropDown />
            </li>
            <li className={pathname.includes("/portfolio") && "activeLink"}>
              <TextRotate href={"/portfolio"} name={"PORTFOLIO"} />
            </li>
            <li className={pathname.includes("/case-studies") && "activeLink"}>
              <TextRotate href={"/case-studies"} name={"CASES"} />
            </li>
            {/* { name: "Blog", href: "/blog" }, */}
            <li className={pathname.includes("/blog") && "activeLink"}>
              <TextRotate href={"/blog"} name={"BLOGS"} />
            </li>
            <li className={pathname.includes("/developer") && "activeLink"}>
              <TextRotate href={"/developer"} name={"DEVELOPER"} />
            </li>
            <li className={pathname.includes("/contact") && "activeLink"}>
              <TextRotate href={"/contact"} name={"CONTACT"} />
            </li>
            <li
              className={`about-desk ${
                (pathname.includes("/about") ||
                  pathname.includes("/post") ||
                  pathname.includes("/career")) &&
                "activeLink"
              } `}
            >
              <TextRotate
                icon={<IoIosArrowDown />}
                href={"/about"}
                name={"ABOUT"}
              />
              <AboutDropDown />
            </li>
          </ul>
          <div>
            <SwipeButton text={"GET A QUOTE"} href="/get-a-quote"/>
          </div>
        </div>
        {/* {____________________________________mobile___________________________________________________} */}

        <details
          // onBlur={(e) => {
          //   if (e.currentTarget.contains(e.relatedTarget)) {
          //     e.currentTarget.open = false;
          //   }
          // }}
          id="mobileSideBarDetail"
          className="burger"
        >
          <summary>
            <Image height={30} src={Icons.burgerIcon} />
          </summary>

          <div className="mobileSideBar">
            <div className="lines-container">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            <div className="corss-container">
              <span
                onClick={() => {
                  document.getElementById("mobileSideBarDetail").open = false;
                }}
                class="cross"
              >
                <IoMdClose color="#25245d" size={30} />
              </span>
            </div>
            <div className="sideItem-container">
              <ul className="sideBar">
                <li
                  className={`sidebar-services list-item  ${
                    pathname.includes("/services") && "activeLink"
                  }`}
                >
                  <span
                    onClick={() => {
                      document.getElementById(
                        "mobileSideBarDetail"
                      ).open = false;
                    }}
                  >
                    <TextRotate href={"/services"} name={"Services"} />
                  </span>

                  <details id="servicesBackBtn" className="icon">
                    <summary>
                      <IoIosArrowDown className="goArrow" size={23} />
                    </summary>
                    <div className="service-data">
                      <ServicesDropDown />
                    </div>
                    <span
                      onClick={() => {
                        document.getElementById("servicesBackBtn").open = false;
                      }}
                      className="backBtn"
                    >
                      <IoIosArrowRoundBack size={30} /> Back
                    </span>
                  </details>
                </li>
                <li
                  onClick={() => {
                    document.getElementById("mobileSideBarDetail").open = false;
                  }}
                  className={`list-item  ${
                    pathname.includes("/portfolio") && "activeLink"
                  }`}
                >
                  <TextRotate
                    onClick={() => {
                      document.getElementById(
                        "mobileSideBarDetail"
                      ).open = false;
                    }}
                    href={"/portfolio"}
                    name={"Portfolio"}
                  />
                </li>
                <li
                  onClick={() => {
                    document.getElementById("mobileSideBarDetail").open = false;
                  }}
                  className={`list-item  ${
                    pathname.includes("/case-studies") && "activeLink"
                  }`}
                >
                  <TextRotate
                    onClick={() => {
                      document.getElementById(
                        "mobileSideBarDetail"
                      ).open = false;
                    }}
                    href={"/case-studies"}
                    name={"Cases"}
                  />
                </li>
                <li
                  onClick={() => {
                    document.getElementById("mobileSideBarDetail").open = false;
                  }}
                  className={`list-item  ${
                    pathname.includes("/blog") && "activeLink"
                  }`}
                >
                  <TextRotate
                    onClick={() => {
                      document.getElementById(
                        "mobileSideBarDetail"
                      ).open = false;
                    }}
                    href={"/blog"}
                    name={"Blogs"}
                  />
                </li>
                <li
                  onClick={() => {
                    document.getElementById("mobileSideBarDetail").open = false;
                  }}
                  className={`list-item ${
                    pathname.includes("/developer") && "activeLink"
                  }`}
                >
                  <TextRotate
                    onClick={() => {
                      document.getElementById(
                        "mobileSideBarDetail"
                      ).open = false;
                    }}
                    href={"/developer"}
                    name={"Developer"}
                  />
                </li>
                <li
                  onClick={() => {
                    document.getElementById("mobileSideBarDetail").open = false;
                  }}
                  className={`list-item  ${
                    pathname.includes("/contact") && "activeLink"
                  }`}
                >
                  <TextRotate
                    onClick={() => {
                      document.getElementById(
                        "mobileSideBarDetail"
                      ).open = false;
                    }}
                    href={"/contact"}
                    name={"Contact"}
                  />
                </li>
                <li
                  className={`sidebar-about list-item  ${
                    (pathname.includes("/about") ||
                      pathname.includes("/post") ||
                      pathname.includes("/career")) &&
                    "activeLink"
                  }
            }`}
                >
                  <span
                    onClick={() => {
                      document.getElementById(
                        "mobileSideBarDetail"
                      ).open = false;
                    }}
                  >
                    <TextRotate
                      onClick={() => {
                        document.getElementById(
                          "mobileSideBarDetail"
                        ).open = false;
                      }}
                      href={"/about"}
                      name={"About"}
                    />
                  </span>
                  <details id="aboutBackBtn" className="icon">
                    <summary>
                      <IoIosArrowDown className="goArrow" size={23} />
                    </summary>
                    <div className="about-data">
                      <AboutDropDown />
                    </div>
                    <span
                      onClick={() => {
                        document.getElementById("aboutBackBtn").open = false;
                      }}
                      className="backBtn"
                    >
                      <IoIosArrowRoundBack size={30} /> Back
                    </span>
                  </details>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </details>
      </div>
    </div>
  );
}
