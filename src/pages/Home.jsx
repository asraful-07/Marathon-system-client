import React from "react";
import Banner from "../components/Banner";
import Marathons from "../components/Marathons";
import UpcomingMarathons from "../components/UpcomingMarathons";
import TestimonialSection from "../components/TestimonialSection";
import Coaches from "../components/Coaches";

const Home = () => {
  return (
    <div>
      <Banner />
      <Marathons />
      <UpcomingMarathons />
      <TestimonialSection />
      <Coaches />
    </div>
  );
};

export default Home;
