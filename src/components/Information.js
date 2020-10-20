import React, { useContext } from "react";
import { DataContext } from "./FetchData.js";
import { dateBuilder } from "./utils";

function Information() {
  const data = useContext(DataContext);

  return (
    <div
      style={{ height: "300px" }}
      className="w-full p-4 grid grid-cols-2 text-white"
    >
      <div className="grid grid-rows-4 pl-10">
        <div className="w-full h-full grid grid-rows-2 flex justify-start items-center p-2">
          <label className="h-full w-full text-sm">Wind Speed</label>
          <span className="h-full w-full text-xs">{data.wind.speed} m/s</span>
        </div>
        <div className="w-full h-full grid grid-rows-2 flex justify-start items-center p-2">
          <label className="h-full w-full text-sm">Humidity</label>
          <span className="h-full w-full text-xs">{data.main.humidity} %</span>
        </div>
        <div className="w-full h-full grid grid-rows-2 flex justify-start items-center p-2">
          <label className="h-full w-full text-sm">Visibility</label>
          <span className="h-full w-full text-xs">{data.visibility} m</span>
        </div>
        <div className="w-full h-full grid grid-rows-2 flex justify-start items-center p-2">
          <label className="h-full w-full text-sm">Pressure</label>
          <span className="h-full w-full text-xs">
            {data.main.pressure} hPa
          </span>
        </div>
      </div>
      <div className="grid grid-rows-4 pl-10">
        <div className="w-full h-full grid grid-rows-2 flex justify-start items-center p-2">
          <label className="h-full w-full text-sm">Min Temp</label>
          <span className="h-full w-full text-xs">
            {Math.round(data.main.temp_min)} &#8451;
          </span>
        </div>
        <div className="w-full h-full grid grid-rows-2 flex justify-start items-center p-2">
          <label className="h-full w-full text-sm">Max Temp</label>
          <span className="h-full w-full text-xs">
            {Math.round(data.main.temp_max)} &#8451;
          </span>
        </div>
        <div className="w-full h-full grid grid-rows-2 flex justify-start items-center p-2">
          <label className="h-full w-full text-sm">Sunrise</label>
          <span className="h-full w-ful text-xs">
            {dateBuilder(data.sys.sunrise, "time")}
          </span>
        </div>
        <div className="w-full h-full grid grid-rows-2 flex justify-start items-center p-2">
          <label className="h-full w-full text-sm">Description</label>
          <span className="h-full w-full text-xs">
            {data.weather[0].description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Information;
