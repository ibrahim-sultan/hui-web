
import React, { useState } from "react";
import "./upcoming.css";
import img1 from "../../assest/kayode.jpg";
import img2 from "../../assest/research.jpg";
import img3 from "../../assest/ku8.jpg";
import img4 from "../../assest/rep6.jpg";

const events = [
  {
    title: "IGP EGBETOKUN TO DELIVER MAIDEN CPSS DISTINGUISHED ALUMNI LECTURE",
    time: "8:00am - 12:30pm",
    date: "10 Sep",
    displayDate: "Sep 10",
    image: img1,
  },
  {
    title: "AL-HIKMAH UNIVERSITY DELEGATION PAYS COURTESY VISIT TO SPEAKER ABBAS",
    time: "7:00am - 11:30pm",
    date: "12 June",
    displayDate: "June 12",
    image: img2,
  },
  {
    title: "KU8+ SIGNS MoU WITH TWO INTERNATIONAL RESEARCH CONSORTIUMS",
    time: "1:00pm - 5:00pm",
    date: "04 Nov",
    displayDate: "Nov 4",
    image: img3,
  },
  {
    title: "AL-HIKMAH UNIVERSITY MANAGEMENT VISITS SPEAKER OF THE HOUSE OF REPRESENTATIVES",
    time: "8:00am - 12:00pm",
    date: "20 Nov",
    displayDate: "Nov 20",
    image: img4,
  },
];

const tabOptions = [
  "All Event",
  "Sep 10",
  "June 12",
  "Nov 4",
  "Nov 20"
];

const UpcomingEvents = () => {
  const [selectedDate, setSelectedDate] = useState("All Event");

  const filteredEvents =
    selectedDate === "All Event"
      ? events
      : events.filter(event => event.displayDate === selectedDate);

  return (
    <div className="events-container">
      <h2 className="events-title">
        <u>Upcoming Events</u>
      </h2>
      <p className="events-description">
        Lorem ipsum dolor sit amet consectetur. Lacus neque risus magna nisi justo. At ultrices integer elementum praesent mauris volutpat magna arcu.
      </p>

      <div className="events-tabs">
        {tabOptions.map((tab, index) => (
          <button
            key={index}
            className={`tab ${selectedDate === tab ? "active" : ""}`}
            onClick={() => setSelectedDate(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="events-grid">
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt="event" className="event-img" />
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>
                <span role="img" aria-label="clock">🕒</span> {event.time}
              </p>
              <p>
                <span role="img" aria-label="calendar">📅</span> {event.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
