import PortfolioBanner from "@/components/Portfolio/PortfolioBanner";
import React from "react";
import "./terms.scss";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
const Terms = () => {
  const bannerData = {
    content: `Thank you for visiting our website.`,
    img: "/case-studies-bg.jpg",
    heading: "Terms & Conditions",
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
              <h1 className="policy-heading">Terms and conditions</h1>
            </div>
            <div className="sub-headings">
              <p className="content">
                At SicilianTech, we know Terms and Conditions are essential, so
                please read the following text document containing them
                cautiously before using this website. By using our services and
                purchasing products from this website, we assume that you have
                carefully read and agreed to these terms and conditions.
              </p>
              <h2 className="small-headings">License</h2>
              <p className="content">
              By buying a product from this website, customers will get a License Certificate which will be valid until the customer stops using our product or we terminate this License due to customer’s failure to comply with these mentioned Terms and Conditions. There can be only be one copy of an extension be used for single Magento installation for your business or personal use. Every time a new separate license has to be purchased for every Magento installation.
              </p>
              <h2 className="small-headings">Copyright</h2>
              <p className="content">
                At SicilianTech, we know Terms and Conditions are essential, so
                please read the following text document containing them
                cautiously before using this website. By using our services and
                purchasing products from this website, we assume that you have
                carefully read and agreed to these terms and conditions.
              </p>
              <h2 className="small-headings">Availability</h2>
              <p className="content">
              The company does not warrant that all the services from this website will always remain uninterrupted, 100% error free or timely, while all the services will be provided to the finest of our ability.
              </p>
              <h2 className="small-headings">Product updates</h2>
              <p className="content">
              We upgrade frequently to meet newer requests from customers or update our products to work with the latest versions of Magento. Customers purchasing a product from us will get the free update versions every time
              </p>
              <h2 className="small-headings">Support policy</h2>
              <p className="content">
              We offer 90 days support for all the paid extensions. Support comprises of queries related to our products, bugs or error fixings to ensure our products work on your site like our demo is working. Support does not include customizations of our product and customization request will need additional fees to be paid by you. We may support our free products, with the payment of certain amount of fees. You need to contact us or submit a ticket to our support system to get support assistance.
              </p>
              <h2 className="small-headings">Refund policy</h2>
              <p className="content">
              We offer 25 days money back guarantee for all of our Magento products. If you found a bug in our extension and our expert team will not able to fix it then you can ask for a complete refund during the period of 25 days after you purchase our product. You need to contact us with all the product purchase details or submit a ticket with order information to our system to apply for a refund. You will get the refund as soon as possible once your request is confirmed by the system or our team
              </p>
              <p className="content">
              The refund requests after 25 days are not considered. We will not provide refund for customization and installation services. We do not provide refund policy for membership plan fee also.
              </p>
              <p className="content">
              The customer should fulfill the requirement to uninstall our product before asking for a refund and should not use our product from the date of the commencement of the refund process and same is also applied after the refund is fulfilled.
              </p>
              <h2 className="small-headings">Disclaimer of responsibility</h2>
              <p className="content">
              In any case the company is not liable to the customer or any of the 3rd party for any of the damages or business information loss or loss of business profits because of the refunded products.
              </p>
              <h2 className="small-headings">Changes to this policy</h2>
              <p className="content">
              These Terms and Conditions may alter from time to time basis. We have the complete rights to change or modify these Terms and Conditions at any point of time it is needed. We will update the post on any of these Terms and Conditions alterations on this website page however if the alterations are major, we will update it by providing it as an important notice.
              </p>
              <p className="content">
              If you have any queries about this Terms and Conditions, please be free to connect with us using this website.
              </p>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
};

export default Terms;
