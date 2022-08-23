import React from "react";
import "./BlogHome.css";
import { blogInsightData } from "./BlogTestData";
import ButtonOthers from "../Button/ButtonOthers";
import {Link} from 'react-router-dom'

const BlogInsight = () => {
  return (
    <section className="blog__home--container">
      <div className="blog__home--top">
        <h2 className="heading-main-blog">Our Latest Thoughts.</h2>
      </div>
      <div className="blog__home--bottom">
        {blogInsightData.map((blog) => (
          <div key={blog.id} className="blog__home--item">
            <Link to={blog.url}>
            <div className="blog__item--top">
              <img src={blog.img} alt="Blog Item" />
            </div>
            <div className="blog__item--middle">
              <h3 className="heading-blog-category">{blog.category}</h3>
              <h2 className="heading-blog-title">{blog.title}</h2>
            </div>
            <div className="blog__item--bottom">
              <p className="blog--paragraph">
                {blog.content.substring(0, 281)}
              </p>
              <ButtonOthers title='Keep Reading...' url={blog.url}/>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogInsight;
