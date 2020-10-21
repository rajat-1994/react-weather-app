import React, { useContext } from "react";
import { DataContext } from "./FetchData.js";
import { dateBuilder } from "./utils.js";

const IconDay = () => {
  const data = useContext(DataContext);

  let iconurl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div
      style={{ height: "60px" }}
      className="w-full grid grid-cols-2 text-white"
    >
      <div className="flex justify-end items-start pr-2">
        <img src={iconurl} alt="icon" width="60px" height="60px"></img>
      </div>
      <div className="grid grid-rows-2">
        <div className="text-2xl">Today</div>
        <div className="text-xs">{dateBuilder(data.dt, "date")}</div>
      </div>
    </div>
  );
};
export default IconDay;
