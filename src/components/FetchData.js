import React, { useState, useEffect } from "react";
import axios from "axios";
import Information from "./Information.js";
import Sunset from "./Sunset.js";
import Place from "./Place.js";
import IconDay from "./IconDay.js";
import Temperature from "./Temperature.js";
import Description from "./Description.js";
import SearchBar from "./SearchBar.js";

export const DataContext = React.createContext();

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
      })
      .catch((error) => {
        alert("something went wrong", error);
      });
  }, [location]);

  return (
    <div className="h-full w-full p-4">
      <SearchBar location={location} setLocation={setLocation}></SearchBar>
      {typeof data.main != "undefined" ? (
        <>
          <DataContext.Provider value={data}>
            <div
              style={{ height: "600px", font: "arial" }}
              className="w-full mt-8"
            >
              <IconDay />
              <Temperature />
              <Description />
              <Place />
              <Sunset />
              <hr></hr>
              <Information />
            </div>
          </DataContext.Provider>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default FetchData;
