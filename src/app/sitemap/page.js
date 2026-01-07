import PortfolioBanner from "@/components/Portfolio/PortfolioBanner";
import React from "react";
import "./sitemap.scss";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Link from "next/link";
const Sitemap = () => {
  const bannerData = {
    content: `Thank you for visiting our website.`,
    img: "/case-studies-bg.jpg",
    heading: "Sitemap",
  };
  return (
    <>
      <PortfolioBanner
        content={bannerData.content}
        heading={bannerData.heading}
        imgSrc={bannerData.img}
      />
      <div className="bottom-terms-wrapper">
        <div className="bottom-terms-mini-wrapper">
          <MaxWidthWrapper>
            <div className="policy-wrapper">
              <div className="wrapperforcontent">
                <h1 className="policy-heading">Sitemap</h1>
                <ul className="ull">
                  <li className="lii">
                    <Link href="/services/customwebdevelopment">
                      Custom Web Development
                    </Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/webdevelopment">Web Development</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/ecommercedevelopment">
                      eCommerce Development
                    </Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/mobileappdevelopment">
                      Mobile App Development
                    </Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/dedicateddevelopmentteam">
                      Dedicated Development Team
                    </Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/apidevelopment">API Development</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/webdesign">Web Design</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/uiuxdesign">UI/UX Design</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/designtowebsite">
                      Design to Website
                    </Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/logodesign">Logo Design</Link>
                  </li>
                </ul>
              </div>
              <div className="wrapperforcontent">
                <h1 className="policy-heading">Frontend Development</h1>
                <ul className="ull">
                  <li className="lii">
                    <Link href="/services/html">HTML</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/css3">CSS3</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/javascript">JavaScript</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/reactjs">React</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/vuejs">Vue.js</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/angular">Angular</Link>
                  </li>
                </ul>
              </div>
              <div className="wrapperforcontent">
                <h1 className="policy-heading">Backend Development</h1>
                <ul className="ull">
                  <li className="lii">
                    <Link href="/services/php">PHP</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/laravel">Laravel</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/nodejs">Node.js</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/codeigniter">CodeIgniter</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/symfony">Symfony</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/python">Python</Link>
                  </li>
                </ul>
              </div>
              <div className="wrapperforcontent">
                <h1 className="policy-heading">Mobile App Development</h1>
                <ul className="ull">
                  <li className="lii">
                    <Link href="/services/android">Android</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/ios">iOS</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/reactnative">React Native</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/ionic">Ionic</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/flutter">Flutter</Link>
                  </li>
                </ul>
              </div>
              <div className="wrapperforcontent">
                <h1 className="policy-heading">CMS Development</h1>
                <ul className="ull">
                  <li className="lii">
                    <Link href="/services/wordpress">WordPress</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/webflow">Webflow</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/joomla">Joomla</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/drupal">Drupal</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/squarespace">Squarespace</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/hubspot">Hubspot</Link>
                  </li>
                </ul>
              </div>
              <div className="wrapperforcontent">
                <h1 className="policy-heading">
                  eCommerce Website Development
                </h1>
                <ul className="ull">
                  <li className="lii">
                    <Link href="/services/woocommerce">WooCommerce</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/shopify">Shopify</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/magento">Magento</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/bigcommerce">BigCommerce</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/cscart">CS Cart</Link>
                  </li>
                </ul>
              </div>

              <div className="wrapperforcontent">
                <h1 className="policy-heading">Other Services</h1>
                <ul className="ull">
                  <li className="lii">
                    <Link href="/services/database">Database</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/cloudaws">Cloud & AWS</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/testing">Testing QA</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/websitemaintenance">
                      Website Maintenance
                    </Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/organicseo">Organic SEO</Link>
                  </li>
                  <li className="lii">
                    <Link href="/services/pwa">PWA</Link>
                  </li>
                </ul>
              </div>
              <div className="wrapperforcontent">
                <h1 className="policy-heading">About</h1>
                <ul className="ull">
                  <li className="lii">
                    <Link href="/about">Company</Link>
                  </li>
                  <li className="lii">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="lii">
                    <Link href="/team">Team</Link>
                  </li>
                  <li className="lii">
                    <Link href="/career">Career</Link>
                  </li>
                  <li className="lii">
                    <Link href="/case-studies">Cases</Link>
                  </li>
                  <li className="lii">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="lii">
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                </ul>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
