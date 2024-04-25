import React from "react";
import Search from "./Search";

function Weather() {
  return (
    <>
      <div className=" container m-10 ">
        <Search />
        <h1 className=" m-10">Today Overview</h1>
        <div className=" container h-screen flex align-top m-10"> 
          <div className=" bg-green-500 w-1/5 h-1/2">Left</div>
          <div className=" bg-red-500 w-1/2 h-1/2">Right</div>
        </div>
      </div>
    </>
  );
}

export default Weather;
