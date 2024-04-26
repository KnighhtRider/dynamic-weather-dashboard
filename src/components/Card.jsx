import React from "react";
import windIcon from '../assets/animated/wind-speed.svg'

function Card() {
  return (
    <div className=" bg-[#1E293B] p-6 flex border rounded text-transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex ">
        {/* Wind speed Icon */}
        <div className=" wind-speed-icon"></div>
          <img src={windIcon} alt="" width={50} height={50}/>
        <div className="mx-5">
          <h2 className="text mt-4 text-slate-400">Wind Speed</h2>

          <div className="mt-2">
            <span className="text-2xl">9</span>
            <span className="text-2xl">Km/Hr</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
