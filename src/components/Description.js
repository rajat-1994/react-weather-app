import React, { useContext } from "react";
import { DataContext } from "./FetchData.js";

const Description = () => {
  const data = useContext(DataContext);

  return (
    <div
      style={{ height: "60px" }}
      className="w-full flex justify-center items-center text-2xl text-white"
    >
      <span>{data.weather[0].main}</span>
    </div>
  );
};

export default Description;
