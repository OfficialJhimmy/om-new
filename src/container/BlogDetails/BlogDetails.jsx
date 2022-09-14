import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";
import { db } from "../../firebase";
import './BlogDetails.css'


const BlogDetails = ({ setActive }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getBlogsData = async () => {
      const blogRef = collection(db, "blogs");
      const blogs = await getDocs(blogRef);
      setBlogs(blogs.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      let tags = [];
      blogs.docs.map((doc) => tags.push(...doc.get("tags")));
      let uniqueTags = [...new Set(tags)];
      setTags(uniqueTags);
    };

    getBlogsData();
  }, []);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
    setActive(null);
  };
  return (
    <>
      <Navbar />
      <div className="insight-single__container">
        <div className="insight-single__top">
          <img src={blog?.imgUrl} alt={blog?.title} />
        </div>
        <div className="insight-single__middle">
          <h3>{blog?.category}</h3>
          <span>{blog?.timestamp.toDate().toDateString()}</span>
          <h2>{blog?.title}</h2>
          <p className="text-start">{blog?.description}</p>
          <div className="insight__span">
            {blog?.tags.map((tag) => (
              <span>{tag}</span>
            ))}
            {/* <span>Accounting</span>
            <span>Consumer</span>
            <span>Economy</span> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
