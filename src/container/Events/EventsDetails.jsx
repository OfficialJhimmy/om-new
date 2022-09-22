import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";
import {BsFillCalendarDateFill} from 'react-icons/bs'
import { db } from "../../firebase";
import './Event.css'


const EventsDetails = ({ setActive }) => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getEventsData = async () => {
      const eventRef = collection(db, "events");
      const events = await getDocs(eventRef);
      setEvents(events.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      let tags = [];
      events.docs.map((doc) => tags.push(...doc.get("tags")));
      let uniqueTags = [...new Set(tags)];
      setTags(uniqueTags);
    };

    getEventsData();
  }, []);

  useEffect(() => {
    id && getEventDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getEventDetail = async () => {
    const docRef = doc(db, "events", id);
    const eventDetail = await getDoc(docRef);
    setEvent(eventDetail.data());
    setActive(null);
  };
  return (
    <>
      <Navbar />
      <div className="insight-single__container">
        <div className="insight-single__top events__page--image">
          <img src={event?.imgUrl} alt={event?.title} />
        </div>
        <div className="insight-single__middle">
          <h3>{event?.category}</h3>
          <h2><BsFillCalendarDateFill className='eventspage__icon'/>{event?.date}</h2>          <h2>{event?.title}</h2>
          <p className="text-start">{event?.description}</p>
          <div className="insight__span">
            {event?.tags.map((tag) => (
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

export default EventsDetails;
