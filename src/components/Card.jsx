import React from "react";

function Card({stats}) {
  return (
    <div className=" bg-[#1E293B] p-6 flex border rounded text-transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="flex ">
        {/* Wind speed Icon */}
        <div className=" wind-speed-icon"></div>
          <img src={stats.icon} alt="" width={50} height={50}/>
        <div className="mx-5">
          <h2 className="text mt-4 text-slate-400">{stats.title}</h2>

          <div className="mt-2">
            <span className="text-2xl">{stats.value}</span>
            <span className="text-2xl"> {stats.unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
