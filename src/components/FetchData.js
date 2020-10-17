import React, { useState, useEffect } from "react";
import axios from "axios";
import { dateBuilder } from "./utils.js";
import Information from "./Information.js";

function FetchData() {
  const api_key = "YOUR KEY";

  const [data, setData] = useState({});
  const [location, setLocation] = useState("London");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`
      )
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  }, [location]);

  return (
    <div className="h-full w-full p-4">
      <SearchBar location={location} setLocation={setLocation}></SearchBar>
      {typeof data.main != "undefined" ? (
        <>
          <div
            style={{ height: "600px", font: "arial" }}
            className="w-full mt-8"
          >
            <IconDay
              iconid={data.weather[0].icon}
              date={dateBuilder(data.dt, "date")}
            ></IconDay>
            <Temperature temperature={data.main.temp}></Temperature>
            <Description description={data.weather[0].main}></Description>
            <PlaceComponent
              city={data.name}
              country={data.sys.country}
            ></PlaceComponent>
            <SunsetComponent
              feelsliketemp={data.main.feels_like}
              sunset={dateBuilder(data.sys.sunset, "time")}
            ></SunsetComponent>
            <hr></hr>
            <Information data={data}></Information>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

const Description = ({ description }) => {
  return (
    <div
      style={{ height: "60px" }}
      className="w-full flex justify-center items-center text-2xl text-white"
    >
      <span>{description}</span>
    </div>
  );
};

const SearchBar = ({ setLocation }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setLocation(e.target.value);
    }
  };
  return (
    <div
      style={{ height: "40px" }}
      className="w-full rounded-xl shadow-md mt-4"
    >
      <input
        className="h-full w-full p-2 rounded-xl outline-none cursor-pointer  "
        type="text"
        name="city"
        placeholder=" e.g London"
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
};

const IconDay = ({ iconid, date }) => {
  let iconurl = `http://openweathermap.org/img/wn/${iconid}@2x.png`;
  return (
    <div
      style={{ height: "60px" }}
      className="w-full grid grid-cols-2 text-white"
    >
      <div className="flex justify-end justify-start pr-2">
        <img src={iconurl} alt="icon" width="70px" height="70px"></img>
      </div>
      <div className="grid grid-rows-2">
        <div className="text-2xl">Today</div>
        <div className="text-xs">{date}</div>
      </div>
    </div>
  );
};

const Temperature = ({ temperature }) => {
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
          {Math.round(temperature)}
        </span>
      </div>
      <div className="w-full flex justify-start items-start pt-4 text-3xl">
        <span style={{ fontWeight: "50" }}> &#8451;</span>
      </div>
    </div>
  );
};

const PlaceComponent = ({ city, country }) => {
  return (
    <div
      style={{ height: "40px" }}
      className="w-full flex justify-center items-center text-xs text-white"
    >
      <span>
        {city},&ensp; {country}
      </span>
    </div>
  );
};

const SunsetComponent = ({ feelsliketemp, sunset }) => {
  return (
    <div
      style={{ height: "40px" }}
      className="w-full grid grid-cols-2 text-xs text-white"
    >
      <div className="flex justify-end items-center pr-4 ">
        <span>Feels like {Math.round(feelsliketemp)} </span>
      </div>
      <div className="flex justify-start items-center pl-4 ">
        <span>Sunset {sunset}</span>
      </div>
    </div>
  );
};

export default FetchData;
