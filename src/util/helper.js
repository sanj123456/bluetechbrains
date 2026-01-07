import { FaAngular, FaCss3Alt, FaFire, FaHtml5, FaJs, FaMagento, FaNodeJs, FaPhp, FaReact, FaShopify, FaWordpress } from "react-icons/fa";
import { SiDart, SiDjango, SiExpress, SiFlutter, SiGraphql, SiJquery, SiMongodb, SiMysql, SiNextdotjs, SiPostgresql } from "react-icons/si";

export const productType = {
    All: "All Services",
    Website: "Websites",
    MobileApp: "Mobile Apps",
  };

  export const Technologies = {
    html: { name: "HTML", icon: FaHtml5 },
    css: { name: "CSS", icon: FaCss3Alt },
    js: { name: "Javascript", icon: FaJs },
    jQuery: { name: "JQuery", icon: SiJquery },
    react: { name: "React", icon: FaReact },
    angular: { name: "Angular", icon: FaAngular },
    reactNative: { name: "React Native", icon: FaReact },
    shopify: { name: "Shopify", icon: FaShopify },
    nodeJs: { name: "NodeJs", icon: FaNodeJs },
    express: { name: "Express", icon: SiExpress },
    mongoDB: { name: "MongoDB", icon: SiMongodb },
    wordPress: { name: "WordPress", icon: FaWordpress },
    php: { name: "PHP", icon: FaPhp },
    magento: { name: "Magento", icon: FaMagento },
    mySql: { name: "MySQL", icon: SiMysql },
    postgreSQL: { name: "PostgreSQL", icon: SiPostgresql },
    graphQl: { name: "GraphQL", icon: SiGraphql },
    flutter: { name: "Flutter", icon: SiFlutter },
    dart: { name: "Dart", icon: SiDart },
    firaBase: { name: "Firebase", icon: FaFire },
    dJango: {name: "Django", icon: SiDjango },
    nextJs: {name: "Nextjs", icon: SiNextdotjs },
  };