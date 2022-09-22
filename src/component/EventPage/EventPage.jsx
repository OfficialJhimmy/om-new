import React, { useEffect, useState } from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { excerpt } from "../../utility/index";
import "./EventPage.css";
import { Link } from "react-router-dom";
import {BsFillCalendarDateFill} from 'react-icons/bs'

const EventPage = () => {
  const [event, setEvents] = useState([]);

  const eventsCollectionRef = collection(db, "events");
  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(eventsCollectionRef);
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();
  }, []);
  return (
    <section className="blog__home--container">
      <div className="blog__home--top">
        <h2 className="heading-main-blog">Our Latest Events.</h2>
      </div>
      <div className="blog__home--bottom">
        {event.map((ev) => (
          <div key={ev.id} className="blog__home--item">
            <div className="blog__item--top">
              <img src={ev.imgUrl} alt={ev.title} />
            </div>
            <div className="blog__item--middle">
              <h3 className="heading-blog-category">{ev.category}</h3>
              <div className="eventspage__date--title">
                  <h2><BsFillCalendarDateFill className='eventspage__icon'/>{ev.date}</h2>
                  <h2>{ev.title}</h2>
                </div>
            </div>
            <div className="blog__item--bottom">
              <p className="blog--paragraph">
                {excerpt(ev.description, 190)}
              </p>
              <Link to={`/events/${ev.id}`}>
                <button className="btn-read">Keep reading</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventPage;
