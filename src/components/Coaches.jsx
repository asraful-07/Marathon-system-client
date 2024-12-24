import React from "react";
import { SocialIcon } from "react-social-icons";

const Coaches = () => {
  return (
    <div className="container mx-auto p-6 mb-24">
      <div className="flex justify-center items-center flex-col gap-2 mb-8">
        <h4>Tame</h4>
        <h1 className="text-4xl font-bold">OUR COACHES</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 justify-center">
        {/* Coach 1 */}
        <div className="relative group">
          <img
            src="https://runcrew.ancorathemes.com/wp-content/uploads/2016/04/team_member1-368x424.jpg"
            alt="Coach 1"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              <SocialIcon
                url="https://www.facebook.com"
                bgColor="#0db496"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://twitter.com"
                bgColor="#0db496"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://www.instagram.com"
                bgColor="#0db496"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
          <h2 className="text-center text-xl font-semibold mt-2">
            Laura Priston
          </h2>
          <p className="text-center text-sm">Coach, Pacer</p>
        </div>
        {/* Coach 2 */}
        <div className="relative group">
          <img
            src="https://runcrew.ancorathemes.com/wp-content/uploads/2016/04/team_member2-368x424.jpg"
            alt="Coach 2"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              <SocialIcon
                url="https://www.facebook.com"
                bgColor="#0db496"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://twitter.com"
                bgColor="#0db496"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://www.instagram.com"
                bgColor="#0db496"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
          <h2 className="text-center text-xl font-semibold mt-2">
            Joseph Gibson
          </h2>
          <p className="text-center text-sm">Coach, Pacer</p>
        </div>
        {/* Coach 3 */}
        <div className="relative group">
          <img
            src="https://runcrew.ancorathemes.com/wp-content/uploads/2016/04/team_member3-368x424.jpg"
            alt="Coach 3"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              <SocialIcon
                url="https://www.facebook.com"
                bgColor="#0db496"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://twitter.com"
                bgColor="#0db496"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://www.instagram.com"
                bgColor="#0db496"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
          <h2 className="text-center text-xl font-semibold mt-2">
            Amanda Jones
          </h2>
          <p className="text-center text-sm">Coach, Pacer</p>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
