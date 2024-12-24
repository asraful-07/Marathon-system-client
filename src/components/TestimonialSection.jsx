import React from "react";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  const imageAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 container mx-auto mb-24">
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2"
        initial="hidden"
        animate="visible"
        variants={imageAnimation}
      >
        <img
          src="https://runcrew.ancorathemes.com/wp-content/uploads/2016/03/home1_bg2.jpg"
          alt="Running Woman"
          className="rounded-lg shadow-md"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 pl-0 md:pl-8 mt-8 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
        <blockquote className="text-gray-600 text-lg italic">
          <span className="text-2xl font-bold text-gray-400">“</span>
          Running teaches us to challenge ourselves. It teaches us to push
          beyond where we thought we could go. It helps us to find out what we
          are made of. This is what we do. This is what it’s all about.
          <span className="text-2xl font-bold text-gray-400">”</span>
        </blockquote>

        {/* Member Details */}
        <div className="mt-4 flex items-center">
          <img
            src="https://runcrew.ancorathemes.com/wp-content/uploads/2016/04/team_member4-100x100.jpg"
            alt="Member Avatar"
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
          <div className="ml-4">
            <p className="text-xl font-bold text-gray-800">Alicia Milano</p>
            <p className="text-sm text-gray-500">MEMBER</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialSection;
