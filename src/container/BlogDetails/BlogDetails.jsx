import React from "react";
import "./BlogDetails.css";
import { useParams } from "react-router-dom";
import { blogData } from "../../component/Blog/BlogTestData";

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="blog__home--bottom">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog__home--item">
            <div className="blog__item--top">
              <img src={blog.img} alt="Blog Item" />
            </div>
            <div className="blog__item--middle">
              <h3 className="heading-blog-category">{blog.category}</h3>
              <h2 className="heading-blog-title">{blog.title}</h2>
            </div>
            <div className="blog__item--bottom">
              <p className="blog--paragraph">
                {blog.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
