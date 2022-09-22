import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { auth } from "../../firebase";
// import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { excerpt } from "../../utility/index";
import { Link } from "react-router-dom";
import { BsTrash, BsFillCalendarDateFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

import "./AdminHome.css";

const AdminHome = () => {
  // const [active, setActive] = useState("adminhome");
  const [user, setUser] = useState(null);
  const [blog, setBlogs] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  const blogsCollectionRef = collection(db, "blogs");
  const eventsCollectionRef = collection(db, "events");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  // const handleLogout = () => {
  //   signOut(auth).then(() => {
  //     setUser(null);
  //     setActive("login");
  //     navigate("/auth");
  //   });
  // };

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogsCollectionRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Blog deleted successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(eventsCollectionRef);
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();
  }, []);

  const handleEventsDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "events", id));
        toast.success("Blog deleted successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const userId = user?.uid;

  return (
    <>
      <AdminHeader />
      <div className="admin__insight--parent">
        <h2>All Insights</h2>
        <div className="admin__insight--container">
          {blog?.map((item) => (
            <div className="admin__insight--child" key={item.id}>
              <div className="admin__insight--image">
                <img src={item.imgUrl} alt={item.title} />
              </div>
              <div className="admin__insight--middle">
                <h3>{item.category}</h3>
                <span className="meta-info">
                  <p>Written by: {item.author}</p>
                  {item.timestamp.toDate().toDateString()}
                </span>
                <h2>{item.title}</h2>
              </div>
              <div className="admin__insight--description">
                <div className="short-description">
                  <p>{excerpt(item.description, 190)}</p>
                </div>
              </div>
              <div className="admin__insight--bottom">
                {/* <Link to={`/insights/${item.id}`}>
                  <button className="btn-read">Read More</button>
                </Link> */}
                {userId && item.userId === userId && (
                  <div className="admin__insight--icon">
                    <BsTrash
                      onClick={() => handleDelete(item.id)}
                      className="admin__home--icon"
                    />
                    <Link to={`/update/${item.id}`}>
                      <AiOutlineEdit className="admin__home--icon" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <h2>All Events</h2>
        <div className="admin__insight--container">
          {events?.map((item) => (
            <div className="admin__insight--child" key={item.id}>
              <div className="admin__insight--image">
                <img src={item.imgUrl} alt={item.title} />
              </div>
              <div className="admin__insight--middle">
                <h3>{item.category}</h3>
                <span className="meta-info">
                  <p>Posted: {item.author}</p>
                </span>
                <div className="split__date--title">
                  <h2><BsFillCalendarDateFill className='events__icon'/>{item.date}</h2>
                  <h2>{item.title}</h2>
                </div>
              </div>
              <div className="admin__insight--description">
                <div className="short-description">
                  <p>{excerpt(item.description, 190)}</p>
                </div>
              </div>
              <div className="admin__insight--bottom">
                {/* <Link to={`/insights/${item.id}`}>
                  <button className="btn-read">Read More</button>
                </Link> */}
                {userId && item.userId === userId && (
                  <div className="admin__insight--icon">
                    <BsTrash
                      onClick={() => handleEventsDelete(item.id)}
                      className="admin__home--icon"
                    />
                    <Link to={`/update/${item.id}`}>
                      <AiOutlineEdit className="admin__home--icon" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminHome;
