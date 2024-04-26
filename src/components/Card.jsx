import React from "react";

function Card({ stats }) {
  return (
    <div className="bg-[#1E293B] p-6 flex border rounded text-white transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="flex items-center">
        {/* Wind speed Icon */}
        <div className="mr-4">
          <img src={stats.icon} alt="" className="w-12 h-12" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{stats.title}</h2>
          <div className="flex items-center mt-2">
            <span className="text-2xl">{stats.value}</span>
            <span className="text-2xl ml-1">{stats.unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
