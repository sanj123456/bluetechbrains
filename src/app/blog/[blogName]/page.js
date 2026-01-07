import React from "react";
import "./oneBlogMain.scss";
import StaggerText from "@/components/StaggerEffect/Stagger";
import { BlogsData } from "@/JsonData/blogDat";
import Image from "next/image";
import PortfolioBanner from "@/components/Portfolio/PortfolioBanner";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Blogs from "@/components/Blogs/Blogs";
import { notFound } from "next/navigation";
import { Icons } from "@/assets/Icons";
import { MdWifiCalling3 } from "react-icons/md";
import Link from "next/link";

export default function Page({ params }) {
  const blog = BlogsData.find(
    ({ heading }) =>
      heading.toLowerCase().replaceAll(" ", "-") === params.blogName
  );
  if (!blog) {
    notFound();
  }

  // const reletedBlog = BlogsData.filter(({ tags }) => {
  //   return blog.tags.some((selectedblotag) =>
  //     tags.some((tag) => selectedblotag === tag)
  //   );
  // });

  const currentIndex = BlogsData.findIndex(
    (item) => item.heading?.toLowerCase() === blog.heading?.toLowerCase()
  );

  const reletedBlog = [];
  for (let i = 1; i <= 3; i++) {
    reletedBlog.push(BlogsData[(currentIndex + i) % BlogsData.length]);
  }

  const portfolioData = {
    content: `We serve as a valuable resource hub, offering insightful articles, experts tips, and the latest trends in web development, web design, mobile app and digital marketing.`,
    img: blog.img,
    heading: "Sicilian's Blog",
  };
  return (
    <div className="oneBlogMain">
      <PortfolioBanner
        content={portfolioData.content}
        heading={portfolioData.heading}
        imgSrc={portfolioData.img}
      />
      <MaxWidthWrapper>
        <div className="top">
          <div className="Title-container">
            <h1 className="bottom-title">
              <StaggerText text={blog.heading} />
            </h1>
          </div>

          <div className="short-info">
            <ul>
              {blog.tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
            <span>{blog.date}</span>
          </div>
        </div>

        <section className="blog-container">
          <div className="first-box">
            <div className="right">
              <div className="blog-image">
                <Image src={portfolioData.img} height={500} width={800} />
              </div>
              <div className="main-paras">
                {blog?.mainParagraphs?.map((para, i) => {
                  return <p key={i}>{para}</p>;
                })}
              </div>
            </div>
            <div className="left">
              <h2 className="title">Recent Blogs</h2>
              {reletedBlog.map((blog) => {
                return (
                  <Link href={"/blog/" + blog.heading.toLowerCase().replaceAll(" ", "-")}>
                  <div className="card">
                    <Image src={blog.img} height={200} width={300} />
                    <div>
                      <h4>{blog.heading}</h4>
                      <span className="date">{blog.date}</span>
                    </div>
                  </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="blog-content">
            {/* <h2>What is Lorem Ipsum?</h2> */}
            <div className="center-contnent">
              {blog.centerContent.map((data, index) => {
                return (
                  <div key={index} className="card">
                    <div className="img-conatainer">
                      <Image width={1000} height={1000} src={data?.img} />
                    </div>
                    <div className="data-container">
                      {data.title && (
                        <h1 className="card-title">{data?.title}</h1>
                      )}
                      {data.paras &&
                        data.paras.map((item, i) => {
                          return <p key={i}>{item}</p>;
                        })}
                      {data.listTitle && (
                        <h2 className="list-title">{data.listTitle}</h2>
                      )}
                      {data.list && (
                        <ul>
                          {data.list.map((item, i) => {
                            return <li key={i}>{item}</li>;
                          })}
                        </ul>
                      )}
                      {data.parasBelowList &&
                        data.parasBelowList.map((item, i) => {
                          return <p key={i}>{item}</p>;
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="content-box">
              <div className="left-box">
                <div className="title-main-wrapper">
                  <div className="title-main">LET’S DISCUSS YOUR PROJECT</div>
                </div>
                <h2 className="heading">Get in Touch Now!</h2>
                <p>
                  Have a word with our expert consultants about your next
                  project to get suggestive guidance & proposal.
                </p>

                <div className="contact-list-container">
                  <div className="contact-list">
                    <h5 className="head">Sales Inquiry</h5>
                    <ul className="contact-cards">
                      <li>
                        <a className={"list"} href="">
                          <Image
                            height={18}
                            src={Icons.email}
                            alt="Email Icon"
                          />{" "}
                          info@siciliantech.com
                        </a>
                      </li>
                      <li>
                        <a className={"list"} href="">
                          {" "}
                          <Image
                            height={18}
                            src={Icons.skype}
                            alt="Skype Icon"
                          />
                          siciliantech
                        </a>
                      </li>
                      <li className={"list"}>
                        <MdWifiCalling3 size={26} />
                        <div className="dialer-container">
                          <a href={`tel:+917778865391`} className="dialer">
                            +91 7778865391 <span>(INDIA)</span>
                          </a>
                          <a href={`tel:+917778865391`} className="dialer">
                            +1 (323) 886-5391<span> (USA) </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-box">
                {blog.content?.map((item, index) => {
                  return (
                    <>
                      {item.title && <h1>{item?.title}</h1>}
                      {item.paras &&
                        item.paras.map((item, i) => {
                          return (
                            <p key={i} className="para">
                              {item}
                            </p>
                          );
                        })}
                      {item.listTitle && (
                        <h2 className="list-title">{item.listTitle}</h2>
                      )}
                      {item.list && (
                        <ul className="list">
                          {item.list.map((item, i) => {
                            return <li key={i}>{item}</li>;
                          })}
                        </ul>
                      )}
                      {item.subData &&
                        item.subData.map((subItem) => {
                          return (
                            <>
                              {subItem.subTitle && <h2>{subItem.subTitle}</h2>}
                              {subItem.subParas &&
                                subItem.subParas.map((item, i) => {
                                  return (
                                    <p key={i} className="sub-para">
                                      {item}
                                    </p>
                                  );
                                })}
                              {subItem.subListTitle && (
                                <h3 className="">{subItem.subListTitle}</h3>
                              )}
                              {subItem.subList && (
                                <ul className="sub-list">
                                  {subItem.subList.map((item, i) => {
                                    return <li key={i}>{item}</li>;
                                  })}
                                </ul>
                              )}
                              {subItem.smallTitleData &&
                                subItem.smallTitleData.map((item) => {
                                  return (
                                    <div className="small-data-box">
                                      <h4>{item.title}</h4>
                                      {item.paras.map((para, i) => {
                                        return (
                                          <p key={i} className="small-para">
                                            {para}
                                          </p>
                                        );
                                      })}
                                    </div>
                                  );
                                })}
                            </>
                          );
                        })}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="blog-swiper">
          <Blogs BlogsData={reletedBlog} topTitle="Related Blogs" />
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
