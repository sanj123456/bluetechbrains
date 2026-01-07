// import Awards from "@/components/Awards/Awards";
import Brands from "@/components/Brands/Brands";
import HomeHeroBanner from "@/components/HomeHeroBanner";
import HomeAboutSection from "@/components/HomeAboutSection";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const OurServices = dynamic(() => import("@/components/OurServices"),{ssr:true});
const TechnologyWe = dynamic(() =>import("@/components/TechnologyWe/TechnologyWe"),{ssr:true});
const HireUs = dynamic(() => import("@/components/Hireus"),{ssr:true});
const OurWork = dynamic(() => import("@/components/OurWork"),{ssr:true});
const KnowMore = dynamic(() => import("@/components/common/KnowMore"),{ssr:true});
const EngagementModel = dynamic(() =>
  import("@/components/EngagementModel/EngagementModel"),{ssr:true});
const OurWorkingMethod = dynamic(() => import("@/components/OurWorkingMethod"),{ssr:true});
const Testomonials = dynamic(() => import("@/components/Testomonials"),{ssr:true});
const Faq = dynamic(() => import("@/components/Faq"),{ssr:true});
const Blogs = dynamic(() => import("@/components/Blogs/Blogs"),{ssr:true});

export default function Home() {
  
  return (
    <>
      <HomeHeroBanner />
      <Brands />
      <HomeAboutSection />
      <Suspense fallback={<Loader/>}>
      <OurServices />
      <TechnologyWe />
      <HireUs />
      <OurWork />
      <KnowMore />
      <EngagementModel />
      <OurWorkingMethod />
      <Testomonials />
      <Faq />
      <Blogs />
      </Suspense>
    </>
  );
}
