import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoCheck } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
const DataDrivenScreen = () => {
  return (
    <div>
      <div className="p-2">
        <h2 className="text-lg font-semibold mb-4">Data driven</h2>

        <div className="bg-gray-100 rounded-xl p-4 w-full max-w-sm">
          {/* Pickup Row */}
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-3 h-3 rounded-full border-3 border-green-500"></div>
            <span className="text-sm font-medium text-black">Enter pickup detail</span>
          </div>

          {/* Dotted Line */}
          <div className="pl-[6px] mb-1">
            <div className="h-4 border-l border-dotted border-gray-400 grid grid-cols-1"></div>
              {/* <MdKeyboardArrowDown className='text-gray-400 ' /> */}
          </div>


          {/* Drop Row */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full border-3 border-red-500"></div>
            <span className="text-sm text-gray-400">Drop location</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex p-2 justify-between gap-4">
        {/* <div className="grid grid-cols-2 p-2"> */}
        <div className="w-50 flex flex-col border border-gray-300 rounded-md px-3 py-2 text-lg font-semibold max-w-md shadow-xl">
          <label className="">Age group</label>
          <input
            type="number"
            defaultValue={18}
            className='font-semibold text-lg
            mt-4 w-10 outline-gray-100'
          />
        </div>
        <div className=" w-full border border-gray-300 rounded-md  p-2 text-lg font-semibold shadow-xl max-w-sm">
          <div className="flex justify-between items-center  ">
            <div className="text-lg mr-2">Gender</div>
            <label className="flex items-center space-x-2 cursor-pointer relative">
              <span className="text-md">F</span>
              <input
                type="radio"
                name="gender"
                value="F"
                className="peer appearance-none w-5 h-5 border border-gray-400 rounded-full checked:bg-yellow-400 checked:border-yellow-400 cursor-pointer"
              />
              <span className="pointer-events-none absolute left-[20px] top-1/2 transform -translate-y-1/2 hidden peer-checked:flex items-center justify-center text-black text-sm">
                <GoCheck />
              </span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer relative">
              <span className="text-md">M</span>
              <input
                type="radio"
                name="gender"
                value="M"
                className="peer appearance-none w-5 h-5 border border-gray-400 rounded-full checked:bg-yellow-400 checked:border-yellow-400 cursor-pointer"
              />
              <span className="pointer-events-none absolute left-[26px] top-1/2 transform -translate-y-1/2 hidden peer-checked:flex items-center justify-center text-black text-sm">
                <GoCheck />
              </span>
            </label>
          </div>

        </div>
      </div>
      <div className="mt-10">
        <button className="bg-yellow-400 text-black py-3 w-full rounded-md font-semibold shadow hover:bg-yellow-500">
          Update Details
        </button>
      </div>
    </div>
  );
};

export default DataDrivenScreen;