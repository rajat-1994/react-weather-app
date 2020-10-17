import React from "react";
import FetchData from "./components/FetchData";

function App() {
  return (
    <div className="bg-gray-300 flex justify-center items-center h-screen w-full">
      <div
        style={{
          height: "800px",
          width: "450px",
          background: "#0e0561",
          font: "sans-serif roboto",
        }}
        className="rounded-3xl shadow-2xl"
      >
        <FetchData></FetchData>
      </div>
    </div>
  );
}

export default App;
