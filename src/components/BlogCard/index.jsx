import React from "react";
import "./blogCard.scss";
import Link from "next/link";
import Image from "next/image";
export default function BlogCard({ blog, baseUrl }) {
  const slug = blog.slug ? blog.slug : blog.heading.toLowerCase().replaceAll(" ", "-")
  return (
    <div className="card-bodyMain">
      {/* <img src={blog.img} /> */}
      <Link
        href={`${baseUrl}/${slug}`}
        className="image-link"
      >
        <figure className="work-image-box">
          <Image src={blog.img} draggable={false} className="hover-bg-img" width={400} height={300}/>
          <Image src={blog.img} draggable={false} className="work-img" width={400} height={300}/>
        </figure>
      </Link>
      <div className="card-info">
        <div className="short-info">
          {blog.tags && (
            <ul>
              {blog?.tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
          )}
          <span>{blog.date}</span>
        </div>
        <h2 className="heading">
          <Link
            href={`${baseUrl}/${slug}`}
          >
            {blog.heading}
          </Link>
        </h2>
        <p className="details">{blog.details}</p>
      </div>
    </div>
  );
}
