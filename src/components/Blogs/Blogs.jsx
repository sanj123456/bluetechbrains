import React from 'react'
import "./Blogs.scss";
// import Cards from '../Cards/Cards';
import dynamic from "next/dynamic";
import SwipeButton from '../common/SwipeButton';
import MaxWidthWrapper from '../common/MaxWidthWrapper';
import { BlogsData as defaultBlogsData } from '@/JsonData/blogDat';
import SectionTitle from '../common/SectionTitle';
const SwiperComponent = dynamic(() => import("../Cards/Cards"));
const StaggerComponent = dynamic(() => import("../StaggerEffect/Stagger"), {
    ssr: false,
  });
const Blogs = ({ BlogsData = defaultBlogsData ,topTitle="OUR FEATURED BLOGS",bottmoTitle="Hand-picked and Best-read Stories"}) => {
  return (
    <MaxWidthWrapper>
      <div className="Main-container-blogs">
        <div className="wrapper-div">
         <SectionTitle topTitle={topTitle} title={bottmoTitle}/>
          <div className="cards-container">
            <SwiperComponent BlogsData={BlogsData} />
          </div>
          <div className="view-all-btn">
            <SwipeButton
              text={"View All Blogs"}
              href="/blog"
              changeHoverColor={false}
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Blogs