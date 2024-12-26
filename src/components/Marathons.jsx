import axios from "axios";
import React, { useEffect, useState } from "react";
import MarathonCards from "./MarathonCards";

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `https://marathon-server-ashen.vercel.app/marathons?sort=${sortOrder}`
      );
      setMarathons(data);
    };
    getData();
  }, [sortOrder]);

  return (
    <div>
      {/* Sorting Options */}
      <div className="flex justify-start mt-24 container mx-auto">
        <label className="mr-2">Sort by:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="desc">Newest to Oldest</option>
          <option value="asc">Oldest to Newest</option>
        </select>
      </div>

      {/* Marathon Cards */}
      <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {marathons.map((marathon) => (
          <MarathonCards key={marathon._id} marathon={marathon} />
        ))}
      </div>
    </div>
  );
};

export default Marathons;
