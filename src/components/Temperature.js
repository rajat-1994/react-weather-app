import React, { useContext } from "react";
import { DataContext } from "./FetchData.js";

const Temperature = ({ temperature }) => {
  const data = useContext(DataContext);

  return (
    <div className="grid grid-cols-3 text-white">
      <div
        style={{
          height: "130px",
        }}
        className="w-full flex justify-end items-center  col-span-2"
      >
        <span
          style={{
            fontSize: "110px",
            font: "sans-serif",
            fontWeight: "300",
          }}
          className="h-full flex items-center"
        >
          {Math.round(data.main.temp)}
        </span>
      </div>
      <div className="w-full flex justify-start items-start pt-4 text-3xl">
        <span style={{ fontWeight: "50" }}> &#8451;</span>
      </div>
    </div>
  );
};

export default Temperature;
