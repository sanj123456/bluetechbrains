"use client";
import BlogCard from '@/components/BlogCard'
import React, { useState } from 'react'
import "./blog.scss"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner'
import { CgSearchLoading } from "react-icons/cg";
import { MdDownloading } from "react-icons/md";
import StaggerText from '@/components/StaggerEffect/Stagger';
import SwipeButton from '@/components/common/SwipeButton';
import { BlogsData } from '@/JsonData/blogDat';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper';
import Link from 'next/link';
import SectionTitle from '@/components/common/SectionTitle';

const portfolioData = {
    content: `The siciliantech team has highly competent and dependable individuals. Their structured hierarchy ensures that everyone stays updated with the latest technology trends through systematic training.`,
    img: '/blog-banner.jpg',
    heading: "Our Blogs"
}
export default function Page() {
    const [filterBlogList, setFilterBlogList] = useState([...BlogsData]);
    const filterBlogs = (searchQuery) => {
        const tempFilterBlog = BlogsData.filter(({ heading, tags }) => {
            if (heading.includes(searchQuery.toLowerCase()) || tags.some((tags) => tags.includes(searchQuery.toLowerCase())))
                return true;
            else
                return false;

        })
        setFilterBlogList(tempFilterBlog);
    }

    return (
        <MaxWidthWrapper>
        <div className='blogsMain'>
            <PortfolioBanner content={portfolioData.content} heading={portfolioData.heading} imgSrc={portfolioData.img} />
            <section className='searchAndTagline'>
                <SectionTitle topTitle={"OUR FEATURED BLOGS"} title={"Hand-picked and Best-read Stories"}/>
                <div className='searchBar-container'>
                    <div className='searchbar'> <input onChange={(e) => { filterBlogs(e.target.value) }} placeholder='Search Our Blogs...' />
                        <div className='searchIcon'> <CgSearchLoading size={30} /></div>
                    </div>
                </div>

            </section>
            <section className='blogs-container'>
                {filterBlogList.map((blog) => <BlogCard blog={blog} baseUrl={"/blog"}/>)}
            </section>
            <div className='btn'>
                {/* <Link href={"/blog"}><SwipeButton text={"Load more"} icon={<MdDownloading size={25} />}/></Link> */}
                </div>
        </div>
        </MaxWidthWrapper>
    )
}
