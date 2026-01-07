import React from "react";
import "./ServicesDropDown.scss";
import Link from "next/link";
export default function ServicesDropDown() {
  const leftList = [
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
      head: "Mobile App",
      subList: [
        { name: "Android", href: "/android" },
        { name: "iOS", href: "/ios" },
        { name: "React Native", href: "/reactnative" },
        { name: "Ionic", href: "/ionic" },
        { name: "Flutter", href: "/flutter" },
      ],
    },
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

  return (
    <div id="servicesDropDown" className="servicesDropDown">
      <div className="left">
        <div className="head">
          <h2>WEB & APP SERVICES</h2>
        </div>
        <ul className="list">
          <li>
            <Link
              onClick={() => {
                document.getElementById("servicesBackBtn").open = false;

                document.getElementById("mobileSideBarDetail").open = false;

                document.getElementById("servicesDropDown").style.display =
                  "none";
                setTimeout(() => {
                  document.getElementById("servicesDropDown").style.display =
                    "grid";
                }, 100);
              }}
              href="/services/dedicateddevelopmentteam"
            >
              Dedicated Development Team
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                document.getElementById("servicesBackBtn").open = false;

                document.getElementById("mobileSideBarDetail").open = false;

                document.getElementById("servicesDropDown").style.display =
                  "none";
                setTimeout(() => {
                  document.getElementById("servicesDropDown").style.display =
                    "grid";
                }, 100);
              }}
              href="/services/customwebdevelopment"
            >
              Custom Web Development
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                document.getElementById("servicesBackBtn").open = false;

                document.getElementById("mobileSideBarDetail").open = false;

                document.getElementById("servicesDropDown").style.display =
                  "none";
                setTimeout(() => {
                  document.getElementById("servicesDropDown").style.display =
                    "grid";
                }, 100);
              }}
              href="/services/webdevelopment"
            >
              Web Development
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                document.getElementById("servicesBackBtn").open = false;

                document.getElementById("mobileSideBarDetail").open = false;

                document.getElementById("servicesDropDown").style.display =
                  "none";
                setTimeout(() => {
                  document.getElementById("servicesDropDown").style.display =
                    "grid";
                }, 100);
              }}
              href="/services/ecommercedevelopment"
            >
              eCommerce Development
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                document.getElementById("servicesBackBtn").open = false;

                document.getElementById("mobileSideBarDetail").open = false;

                document.getElementById("servicesDropDown").style.display =
                  "none";
                setTimeout(() => {
                  document.getElementById("servicesDropDown").style.display =
                    "grid";
                }, 100);
              }}
              href="/services/mobileappdevelopment"
            >
              Mobile App Development
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                document.getElementById("servicesBackBtn").open = false;

                document.getElementById("mobileSideBarDetail").open = false;

                document.getElementById("servicesDropDown").style.display =
                  "none";
                setTimeout(() => {
                  document.getElementById("servicesDropDown").style.display =
                    "grid";
                }, 100);
              }}
              href="/services/apidevelopment"
            >
              API Development
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                document.getElementById("servicesBackBtn").open = false;

                document.getElementById("mobileSideBarDetail").open = false;

                document.getElementById("servicesDropDown").style.display =
                  "none";
                setTimeout(() => {
                  document.getElementById("servicesDropDown").style.display =
                    "grid";
                }, 100);
              }}
              href="/services/webdesign"
            >
              Web Design
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                document.getElementById("servicesBackBtn").open = false;

                document.getElementById("mobileSideBarDetail").open = false;

                document.getElementById("servicesDropDown").style.display =
                  "none";
                setTimeout(() => {
                  document.getElementById("servicesDropDown").style.display =
                    "grid";
                }, 100);
              }}
              href="/services/uiuxdesign"
            >
              UI/UX Design
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                document.getElementById("servicesBackBtn").open = false;

                document.getElementById("mobileSideBarDetail").open = false;

                document.getElementById("servicesDropDown").style.display =
                  "none";
                setTimeout(() => {
                  document.getElementById("servicesDropDown").style.display =
                    "grid";
                }, 100);
              }}
              href="/services/designtowebsite"
            >
              Design to Website
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                document.getElementById("servicesBackBtn").open = false;

                document.getElementById("mobileSideBarDetail").open = false;

                document.getElementById("servicesDropDown").style.display =
                  "none";
                setTimeout(() => {
                  document.getElementById("servicesDropDown").style.display =
                    "grid";
                }, 100);
              }}
              href="/services/logodesign"
            >
              Logo Design
            </Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="head">
          <h2>EXPERTISE IN TECHNOLOGIES</h2>
        </div>
        <div className="subList-container">
          {leftList.map(({ head, subList }, i) => (
            <div key={i} className="subList">
              <h3 className="subHead">{head}</h3>
              <ul className="list">
                {subList.map(({ name, href }, i) => (
                  <li key={i}>
                    <Link
                      onClick={() => {
                        document.getElementById("servicesBackBtn").open = false;

                        document.getElementById(
                          "mobileSideBarDetail"
                        ).open = false;

                        document.getElementById(
                          "servicesDropDown"
                        ).style.display = "none";
                        setTimeout(() => {
                          document.getElementById(
                            "servicesDropDown"
                          ).style.display = "grid";
                        }, 100);
                      }}
                      href={`/services${href}`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
