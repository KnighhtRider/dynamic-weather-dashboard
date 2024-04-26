import React from "react";
import Search from "./Search";
import Temperature from "./Temperature";
import Card from "./Card";

function Weather() {
  return (
    <>
      <div className=" container m-10 ">
        <Search />


        <h1 className=" m-10 mx-20">Today Overview</h1>
        <div className=" container h-screen flex align-top m-10 mx-20 space-x-5"> 
        
        {/* Temperature Container */}
          <div className=" bg-[#1E293B] border-white w-1/4 h-3/5 border rounded">
            <Temperature />
          </div>

          {/* Weather condition Info Card */}
          <div className=" w-1/2 h-3/5 grid grid-cols-2 gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

        </div>
      </div>
    </>
  );
}

export default Weather;
