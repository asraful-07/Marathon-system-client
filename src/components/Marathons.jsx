import axios from "axios";
import React, { useEffect, useState } from "react";
import MarathonCards from "./MarathonCards";

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`http://localhost:5000/marathons`);
      setMarathons(data);
    };
    getData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 my-24 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {marathons.map((marathon) => (
          <MarathonCards key={marathon._id} marathon={marathon} />
        ))}
      </div>
    </div>
  );
};

export default Marathons;
