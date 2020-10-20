import React from "react";

const SearchBar = ({ setLocation }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setLocation(e.target.value);
    }
  };
  return (
    <div
      style={{ height: "40px" }}
      className="w-full rounded-3xl shadow-md mt-4"
    >
      <input
        className="h-full w-full p-2 rounded-3xl outline-none cursor-pointer  "
        type="text"
        name="city"
        placeholder=" e.g. London"
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
};

export default SearchBar;
