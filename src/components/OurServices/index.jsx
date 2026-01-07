import { AppImages } from "@/assets/AppImages";
import "./ourservices.scss";
import CustomDataSwiper from "../common/CustomDataSwiper";
import Link from "next/link";

export default function OurServices() {
  const serviceData = [
    {
      image: AppImages.service1,
      name: "Frontend Development",
      list: [
        { name: "HTML", href: "/html" },
        { name: "CSS3", href: "/css" },
        { name: "JavaScript", href: "/javascript" },
        { name: "React", href: "/reactjs" },
        { name: "Vue.js", href: "/vuejs" },
        { name: "Angular", href: "/angular" },
      ],
    },
    {
      image: AppImages.service2,
      name: "Backend Development",
      list: [
        { name: "PHP", href: "/php" },
        { name: "Laravel", href: "/laravel" },
        { name: "Node.js", href: "/node" },
        { name: "CodeIgniter", href: "/codeigniter" },
        { name: "Symfony", href: "/symfony" },
        { name: "Python", href: "/python" },
      ],
    },
    {
      image: AppImages.service3,
      name: "Mobile App Development",
      list: [
        { name: "Android", href: "/android" },
        { name: "iOS", href: "/ios" },
        { name: "React Native", href: "/reactnative" },
        { name: "Ionic", href: "/ionic" },
        { name: "Flutter", href: "/flutter" },
      ],
    },
    {
      image: AppImages.service4,
      name: "CMS Development",
      list: [
        { name: "WordPress", href: "/wordpress" },
        { name: "Webflow", href: "/webflow" },
        { name: "Joomla", href: "/joomla" },
        { name: "Drupal", href: "/drupal" },
        { name: "Squarespace", href: "/squarespace" },
        { name: "HubSpot", href: "/hubspot" },
      ],
    },
    {
      image: AppImages.service5,
      name: "eCommerce Development",
      list: [
        { name: "WooCommerce", href: "/woocommerce" },
        { name: "Shopify", href: "/shopify" },
        { name: "Magento", href: "/magento" },
        { name: "BigCommerce", href: "/bigcommerce" },
        { name: "CS Cart", href: "/cscart" },
      ],
    },
  ];

  const slides = serviceData.map((service, index) => (
    <div key={index} id="ourServices">
      {/* <figure>
        <Image src={service.image} alt={service.name} />
      </figure> */}
      <div className="card-content">
        <h4 className="service-title">{service.name}</h4>
        <ul className="service-list">
          {service.list.map((item, itemIndex) => (
           <li className="list-item" key={itemIndex}>
               <Link href={`services${item.href}`} draggable={false}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));

  const smTitle = "What we do";
  const title = "Our Services";
  const description =
    " At Siciliantech, we create new solutions and enhance existing ones faster than industry standards. Our expert team and proven process turn vision into reality. We present top solutions for all business needs, including web design, development, e-commerce, and mobile apps. We highlight key principles of web app development, using the best development techniques to blend usability, practicality, and features seamlessly.";
  const btnText = "View All Services";
  const btnLink = "/services";
  const breakpoints = {
    340: {
      slidesPerView: 1.5,
    },
    550: {
      slidesPerView: 2.3,
    },
    830: {
      slidesPerView: 3,
    },
    993: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3.1,
    },
    1281: {
      slidesPerView: 2.3,
    },
    1440: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 3.3,
    },
  };

  return (
    <CustomDataSwiper
      smallTitle={smTitle}
      title={title}
      description={description}
      btnText={btnText}
      btnLink={btnLink}
      slides={slides}
      preBtnClass={"service-pre-btn"}
      nextBtnClass={"service-next-btn"}
      breakpoints={breakpoints}
    />
  );
}
