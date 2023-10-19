import React from "react";
import { PiCurrencyCircleDollarLight, PiHandbagThin } from "react-icons/pi";
// import { HiOutlineDocumentText } from "react-icons/hi";
import { CgServer } from "react-icons/cg";
import { LuDatabaseBackup } from "react-icons/lu";

export default function DashboardStatsGrid() {
  return (
    <div className="flex gap-8 m-5 h-10/12 flex-row flex-wrap flex-wrap-reverse items-center">
      <BoxWrapper>
        <div className="rounded-full flex items-center justify-center bg-green-200 p-[17px]">
          <PiCurrencyCircleDollarLight className="text-5xl text-green-600 font-extralight bg-auto bg-center" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-400 font-medium">Earning</span>
          <div>
            <strong className="text-xl text-gray-700 font-semibold">
              $198k
            </strong>
          </div>

          <span className="text-sm text-green-600 flex item-center">
            <i className="ri-arrow-up-line">37.8%</i>
            <div className="text-black font-medium pl-2">this month</div>
          </span>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full flex items-center justify-center bg-fuchsia-200 p-[17px]">
          <CgServer className="text-5xl text-fuchsia-600" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-400 font-medium">Orders</span>
          <div>
            <strong className="text-xl text-gray-700 font-semibold">
              $2.4k
            </strong>
          </div>
          <span className="text-sm flex items-center">
            <i className="ri-arrow-down-line text-red-500">2%</i>
            <div className="text-black font-medium pl-2">this month</div>
          </span>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full flex items-center justify-center bg-sky-200 p-[17px]">
          <LuDatabaseBackup className="text-5xl text-sky-600 " />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-400 font-medium">Balance</span>
          <div>
            <strong className="text-xl text-gray-700 font-semibold">
              $2.4k
            </strong>
          </div>
          <span className="text-sm text-red-500 flex items-center">
            <i className="ri-arrow-down-line text-red-500">2%</i>
            <div className="text-black font-medium pl-2">this month</div>
          </span>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full flex items-center justify-center bg-red-200 p-[17px]">
          <PiHandbagThin className="text-5xl text-red-600 " />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-400 font-medium">Total Sales</span>
          <div>
            <strong className="text-xl text-gray-700 font-semibold">
              $89k
            </strong>
          </div>
          <span className="text-sm flex items-center">
            <i className="ri-arrow-up-line text-green-600">11%</i>
            <div className="text-black font-medium pl-2">this week</div>
          </span>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-xl p-4 flex-1 flex items-center">
      {children}
    </div>
  );
}
