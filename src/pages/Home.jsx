import React from "react";
import Banner from "../components/Banner";
import Marathons from "../components/Marathons";
import UpcomingMarathons from "../components/UpcomingMarathons";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Marathons />
      <UpcomingMarathons />
      <TestimonialSection />
    </div>
  );
};

export default Home;
