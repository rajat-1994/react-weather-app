import React, { useContext } from "react";
import { DataContext } from "./FetchData.js";
import { dateBuilder } from "./utils";

function Information() {
  const data = useContext(DataContext);

  let infoRowOne = [
    {
      id: 0,
      label: "Wind Speed",
      value: `${(data.wind.speed * 3.6).toFixed(2)} km/hr`,
    },
    {
      id: 1,
      label: "Humidity",
      value: `${data.main.humidity} %`,
    },
    {
      id: 2,
      label: "Visibility",
      value: `${(data.visibility / 1000).toFixed(1)} km`,
    },
    {
      id: 3,
      label: "Pressure",
      value: `${Math.round(data.main.pressure * 0.75)} mmHg`,
    },
  ];
  let infoRowTwo = [
    {
      id: 4,
      label: "Min Temp",
      value: `${Math.round(data.main.temp_min)} \xB0C`,
    },
    {
      id: 5,
      label: "Max Temp",
      value: `${Math.round(data.main.temp_max)} \xB0C`,
    },
    {
      id: 6,
      label: "Sunrise",
      value: `${dateBuilder(data.sys.sunrise, "time")}`,
    },
    {
      id: 7,
      label: "Description",
      value: `${data.weather[0].description}`,
    },
  ];

  const Info = ({ label, value }) => {
    return (
      <div className="w-full h-full grid grid-rows-2 flex justify-start items-center p-2">
        <label className="h-full w-full text-sm">{label}</label>
        <span className="h-full w-full text-xs font-bold">{value}</span>
      </div>
    );
  };

  return (
    <div
      style={{ height: "300px" }}
      className="w-full p-4 grid grid-cols-2 text-white"
    >
      <div className="grid grid-rows-4 pl-12">
        {infoRowOne.map((val) => {
          return <Info key={val.id} label={val.label} value={val.value}></Info>;
        })}
      </div>
      <div className="grid grid-rows-4 pl-12">
        {infoRowTwo.map((val) => {
          return <Info key={val.id} label={val.label} value={val.value}></Info>;
        })}
      </div>
    </div>
  );
}

export default Information;
