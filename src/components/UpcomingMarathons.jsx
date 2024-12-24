// src/components/UpcomingEvents.jsx
import React from "react";

const events = [
  {
    date: "23/09",
    day: "Tuesday, Whole day",
    title: "10K LINCOLN",
    location: "Central Park",
  },
  {
    date: "10/12",
    day: "Wednesday, Whole day",
    title: "RUNNING FESTIVAL",
    location: "Central Park",
  },
  {
    date: "13/07",
    day: "Sunday, 8:00 am - 5:00 pm",
    title: "AUTUMN START",
    location: "Central Park",
  },
];

const UpcomingMarathons = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen mb-24 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://runcrew.ancorathemes.com/wp-content/uploads/2016/03/home1_bg1.jpg?id=2167')",
      }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full absolute"></div>
      <div className="relative z-10 text-white text-center max-w-5xl p-6">
        <h2 className="text-4xl font-bold mb-8">UPCOMING MARATHONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events?.map((event, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-6"
            >
              <p className="text-3xl font-bold">{event.date}</p>
              <p className="text-sm text-gray-500">{event.day}</p>
              <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{event.location}</p>
              <button className="mt-4 px-4 py-2 btn btn-outline btn-accent">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMarathons;
