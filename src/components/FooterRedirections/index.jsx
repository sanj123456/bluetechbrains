"use client";
import React, { useState } from "react";
import "./footerRedirection.scss";
import SwipeButton from "../common/SwipeButton";
import Link from "next/link";
   const leftList = [
     {
       head: "CMS",
       subList: [
         { name: "WordPress", href: "/wordpress" },
         { name: "Webflow", href: "/webflow" },
         { name: "Joomla", href: "/joomla" },
         { name: "Drupal", href: "/drupal" },
         { name: "Squarespace", href: "/squarespace" },
         { name: "HubSpot", href: "/hubspot" },
       ],
     },
     {
       head: "eCommerce",
       subList: [
         { name: "WooCommerce", href: "/woocommerce" },
         { name: "Shopify", href: "/shopify" },
         { name: "Magento", href: "/magento" },
         { name: "BigCommerce", href: "/bigcommerce" },
         { name: "CS Cart", href: "/cscart" },
       ],
     },
     {
       head: "Backend",
       subList: [
         { name: "PHP", href: "/php" },
         { name: "Laravel", href: "/laravel" },
         { name: "Node.js", href: "/node" },
         { name: "CodeIgniter", href: "/codeigniter" },
         { name: "Symfony", href: "/symfony" },
         { name: "Python", href: "/python" },
       ],
     },
     {
       head: "Frontend",
       subList: [
         { name: "HTML", href: "/html" },
         { name: "CSS3", href: "/css" },
         { name: "JavaScript", href: "/javascript" },
         { name: "React", href: "/reactjs" },
         { name: "Vue.js", href: "/vuejs" },
         { name: "Angular", href: "/angular" },
       ],
     },
     {
       head: "Mobile App",
       subList: [
         { name: "Android", href: "/android" },
         { name: "iOS", href: "/ios" },
         { name: "React Native", href: "/reactnative" },
         { name: "Ionic", href: "ionic" },
         { name: "Flutter", href: "/flutter" },
       ],
     },
     {
       head: "Other",
       subList: [
         { name: "Database", href: "/database" },
         { name: "Cloud & AWS", href: "/cloudaws" },
         { name: "Testing QA", href: "/testing" },
         { name: "Website Maintenance", href: "/websitemaintenance" },
         { name: "Organic SEO", href: "/organicseo" },
         { name: "PWA", href: "/pwa" },
       ],
     },
   ];
const aboutList = [
  { name: "Company", href: "#" },
  { name: "Team", href: "/team" },
  { name: "Business Model", href: "#" },
  { name: "Working Method", href: "#" },
  { name: "Life @ siciliantech", href: "#" },
  { name: "Testimonial", href: "#" },
  { name: "Why Choose Us", href: "#" },
  { name: "Blog", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Career", href: "/career" },
];
const servicesList = [
  { name: "Custom Web Development", href: "/services/customwebdevelopment" },
  { name: "Web Development", href: "/services/webdevelopment" },
  { name: "eCommerce Development", href: "/services/ecommercedevelopment" },
  { name: "Mobile App Development", href: "/services/mobileappdevelopment" },
  {
    name: "Dedicated Development Team",
    href: "/services/dedicateddevelopmentteam",
  },
  { name: "API Development", href: "/services/apidevelopment" },
  { name: "Web Design", href: "/services/webdesign" },
  { name: "UI/UX Design", href: "/services/uiuxdesign" },
  { name: "Design to Website", href: "/services/designtowebsite" },
  { name: "Logo Design", href: "/services/logodesign" },
];
   
const mobileRedirectionData = [
  {
    head: "About",
    content: (
      <div className="list">
        {" "}
        <ul className="aboutSublist">
          {aboutList.map(({ name, href, badge }, i) => (
            <li key={i}>
              <Link href={href}>
                {name}
                {badge && (
                  <div className="msgBadge">
                    <span>{badge}</span>
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    head: "Services",
    content: (
      <div className="list">
        {" "}
        <ul className="aboutSublist">
          {servicesList.map(({ name, href, badge }, i) => (
            <li key={i}>
              <Link href={href}>
                {name}
                {badge && (
                  <div className="msgBadge">
                    <span>{badge}</span>
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    head: "Technology",
    content: (
      <>
        <div className="subList-container">
          {leftList.map(({ head, subList }, i) => (
            <div key={i} className="subList">
              <h3 className="subHead">{head}</h3>
              <ul className="list">
                {subList.map(({ name, href }, i) => (
                  <li key={i}>
                    <Link href={`/services${href}`}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    ),
  },
];
export default function FooterRedirection() {
  const [openFaq, setOpenFaq] = useState("");
  return (
    <div className="FooterRedirectionMain">
      {/* desktop */}
      <div className="desk">
        <div className=" list list1">
          <h4>About</h4>
          {mobileRedirectionData[0].content}
        </div>
        <div className="list list2">
          <h4>Service</h4>
          {mobileRedirectionData[1].content}
        </div>
        <div className="list">
          <h4>Technology</h4>
          {mobileRedirectionData[2].content}
        </div>
      </div>

      {/* mobile */}
      <div className="mobile">
        <div className="mobile">
          {mobileRedirectionData.map((redirection, i) => {
            return (
              <div
                key={i}
                className="redirection-item"
                onClick={() => (openFaq === i ? setOpenFaq("") : setOpenFaq(i))}
              >
                <h5 className={`head ${openFaq === i ? "open-head" : ""}`}>
                  {redirection.head}
                </h5>
                <div
                  className={`inner-content ${
                    openFaq === i ? "open-inner-content" : ""
                  }`}
                >
                  {redirection.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
