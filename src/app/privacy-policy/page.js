import PortfolioBanner from "@/components/Portfolio/PortfolioBanner";
import React from "react";
import "./privacy.scss";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
const Privacy = () => {
  const bannerData = {
    content: `Thank you for visiting our website.`,
    img: "/case-studies-bg.jpg",
    heading: "Privacy Policy",
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
              <h1 className="policy-heading">Privacy policy</h1>
            </div>
            <div className="sub-headings">
              <p className="content">
              At SicilianTech, we know that privacy is significant and we will protect your privacy. This privacy policy page describes the ways we gather, store, utilize and protect all your personal information. Please read this privacy policy before using our site and we assume that you have accepted our policy when you use our services.
              </p>
              <h2 className="small-headings">Collection of personal information</h2>
              <p className="content">
              We collect personally information, like names, email addresses and other information when it is voluntarily submitted by the website visitors. When you purchase product extensions from our Magento Extension Store, you may need to give us some more additional details
              </p>
              <h2 className="small-headings">Use of cookies/other tracking tools</h2>
              <p className="content">
              When you browse our website, we may place cookies on your computer system. This may include information about you and it assists in identifying you if you view our multiple pages on our website during the similar sessions, so that we don’t require asking for your details every time. If you disable cookies, you may continue using of our website; however some of your online shopping experience benefits with us through our site may be affected. We may use other tracking tools to monitor your information if needed.
              </p>
              <h2 className="small-headings">Utilization of personal information</h2>
              <p className="content">
              We may share needed information with governmental agencies or some other companies helping us in a case of fraud anticipation or exploration. This can be done by us in cases permitted or needed by law, protection against or prevent fraud, in a scenario of unauthorized product/service transactions; or dealing with the fraud which has already happened.
              </p>
              <p className="content">
              Note: The above information is not offered or shared to any of these companies for any kinds of online or offline marketing purposes
              </p>
              <h2 className="small-headings">Protection and storage of personal information</h2>
              <p className="content">
              We commit to take extreme care and protect your personal information. We always keep your billing and credit card details secure. We do not share any personal information with any of the other 3rd parties,You can for all time trust us while doing business with us, as we take extreme care and protect our customers in any of the scenarios.
              </p>
              <h2 className="small-headings">Data security and promotions</h2>
              <p className="content">
              Your personal information is kept safe and only authorized employees have right to use this confidential information you have shared with us. Employees are under strict observation to ensure that they cannot share this information externally,All newsletters and promotional emails sent from this website domain allow you to opt out of mailings if you do not want them further
              </p>
              <h2 className="small-headings">Changes to the privacy policy</h2>
              <p className="content">
              We would like to convey you that this Privacy Policy may alter on a time to time basis. We reserve the complete rights to modify this Privacy Policy at any given time. We will post any Privacy Policy alterations on this page and, if the modifications are really significant, we will offer a major notice
              </p>
              <p className="content">
              If you have any added questions or queries about this Privacy Policy, feel free to connect with us using this website
              </p>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
};

export default Privacy;
