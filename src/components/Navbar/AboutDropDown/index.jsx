import React from "react";
import "./aboutDropDown.scss";
import Link from "next/link";
export default function AboutDropDown() {
  const list = [
    // { name: "Company", href: "#" },
    { name: "Team", href: "/team" },
    // { name: "Business Model", href: "#" },
    // { name: "Working Method", href: "#" },
    // { name: "Life @ siciliantech", href: "#" },
    // { name: "Testimonial", href: "#" },
    // { name: "Why Choose Us", href: "#" },
    // { name: "Blog", href: "/blog" },
    // { name: "FAQs", href: "/faq" },
    { name: "Career", href: "/career" },
  ];
  return (
    
    <div id="aboutDropDown-main" className="aboutDropDown-main">
      {/* <div className="trans"></div> */}

      <ul className="aboutSublist">
        {list.map(({ name, href, badge }, i) => (
          <li key={i}>
            <Link
              onClick={() => {
                document.getElementById("aboutBackBtn").open = false;
                document.getElementById("mobileSideBarDetail").open = false;
                document.getElementById("aboutDropDown-main").style.display =
                  "none";
                setTimeout(() => {
                  document.getElementById("aboutDropDown-main").style.display =
                    "unset";
                }, 100);
              }}
              href={href}
            >
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
  );
}
