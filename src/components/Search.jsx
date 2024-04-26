import React from "react";

function Search() {
  return (
    <div className=" flex justify-center">
      <div className="relative w-1/2">
        <div className=" mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="bg-[#1E293B] border border-slate-500 text-slate-200 placeholder-slate-400 text-md focus:border-slate-400 block w-full p-2 pl-10 focus:outline-none rounded"
          placeholder="Noida"
        />
      </div>

      {/* Locayion icon */}
      <div className="m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroFke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Search;
