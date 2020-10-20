import React, { useContext } from "react";
import { DataContext } from "./FetchData.js";
import { dateBuilder } from "./utils.js";

const Sunset = () => {
  const data = useContext(DataContext);

  return (
    <div
      style={{ height: "40px" }}
      className="w-full grid grid-cols-2 text-xs text-white"
    >
      <div className="flex justify-end items-center pr-4 ">
        <span>Feels like {Math.round(data.main.feels_like)} </span>
      </div>
      <div className="flex justify-start items-center pl-4 ">
        <span>Sunset {dateBuilder(data.sys.sunset, "time")}</span>
      </div>
    </div>
  );
};

export default Sunset;
