import React from "react";
import { FiSearch } from "react-icons/fi";
import wavinghand from "../shared/img/wavinghand.png";

export default function Header() {
  return (
    <div className=" px-4 pt-4 flex justify-between items-center font-semibold">
      <div className="ml-5">
        Hello Shahrukh,
        <div>
          <img
            src={wavinghand}
            width="30px"
            className="flex 
  ml-32 -mt-7 "
            alt=""
          />
        </div>
      </div>

      <div className="relative">
        <FiSearch
          fontSize={25}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 "
        />
        <input
          type="text"
          placeholder="Search"
          className="text-sm font-normal mr-5 flex focus:outline-none active:outline-none h-10 w-[16rem] rounded-lg pl-10 pr-4"
        />
      </div>
    </div>
  );
}
