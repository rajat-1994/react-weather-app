import React, { useContext } from "react";
import { DataContext } from "./FetchData.js";

const Place = () => {
  const data = useContext(DataContext);

  return (
    <div
      style={{ height: "40px" }}
      className="w-full flex justify-center items-center text-xs text-white"
    >
      <span>
        {data.name},&ensp; {data.sys.country}
      </span>
    </div>
  );
};

export default Place;
