import React from "react";
import Banner from "../components/Banner";
import Marathons from "../components/Marathons";
import UpcomingMarathons from "../components/UpcomingMarathons";
import TestimonialSection from "../components/TestimonialSection";
import Marathon from "../components/Marathon";
import Coaches from "../components/Coaches";

const Home = () => {
  return (
    <div>
      <Banner />
      <Marathons />
      <UpcomingMarathons />
      <TestimonialSection />
      <Coaches />
      <Marathon />
    </div>
  );
};

export default Home;
