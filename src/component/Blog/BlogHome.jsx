import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import { excerpt } from "../../utility/index";
import Button from "../Button/Button";
import "./BlogHome.css";
import Idea from "../../assets/icons/light-bulb.png";
import { Link } from "react-router-dom";

const BlogHome = () => {
  const [blog, setBlogs] = useState([]);

  const blogsCollectionRef = collection(db, "blogs");
  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogsCollectionRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBlogs();
  }, []);

  return (
    <section className="blog__home--container">
      <div className="blog__home--top">
        <h2 className="heading-main-blog">Our Latest Thoughts.</h2>
        <Button title="Our Thoughts" icon={Idea} url="/insights" />
      </div>
      <div className="blog__home--bottom">
        {blog?.slice(0, 6).map((blog) => (
          <div key={blog.id} className="blog__home--item">
            <div className="blog__item--top">
              <img src={blog.imgUrl} alt={blog.title} />
            </div>
            <div className="blog__item--middle">
              <h3 className="heading-blog-category">{blog.category}</h3>
              <h2 className="heading-blog-title">{blog.title}</h2>
            </div>
            <div className="blog__item--bottom">
              <p className="blog--paragraph">
                {excerpt(blog.description, 190)}
              </p>
              <Link to={`/insights/${blog.id}`}>
                <button className="btn-read">Keep reading</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogHome;
