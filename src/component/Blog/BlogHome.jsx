import React from "react";
import Button from "../Button/Button";
import "./BlogHome.css";
import Idea from "../../assets/icons/light-bulb.png";
import { blogData } from "./BlogTestData";
// import background from '../../assets/icons/Vector.png'
import circle from '../../assets/icons/circle.png'
import ButtonOthers from "../Button/ButtonOthers";

const BlogHome = () => {
  return (
    <section className="blog__home--container">
      {/* <img src={background} alt="vector" className="blog__background"/> */}
      <div className="blog__home--top">
        <h2 className="heading-main-blog">Our Latest Thoughts</h2>
        <Button title="Our Thoughts" icon={Idea} url="/insights" />
      </div>
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
                {blog.content.substring(0, 281)}
              </p>
              {/* <Button title='Keep Reading' icon={circle} url={`/insights/${blog.id}`}/> */}
              <ButtonOthers title='Keep Reading...' url='/'/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogHome;
