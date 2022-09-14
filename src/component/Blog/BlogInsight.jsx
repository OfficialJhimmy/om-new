import React, { useEffect, useState } from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { excerpt } from "../../utility/index";
import "./BlogHome.css";
import { Link } from "react-router-dom";

const BlogInsight = () => {
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
      </div>
      <div className="blog__home--bottom">
        {blog?.map((blog) => (
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

export default BlogInsight;
