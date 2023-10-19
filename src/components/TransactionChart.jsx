import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    Expense: 4000,
    Income: 7000,
  },
  {
    name: "Feb",
    Expense: 3000,
    Income: 5000,
  },
  {
    name: "Mar",
    Expense: 2000,
    Income: 9500,
  },
  {
    name: "Apr",
    Expense: 2780,
    Income: 7600,
  },
  {
    name: "May",
    Expense: 1890,
    Income: 8600,
  },
  {
    name: "Jun",
    Expense: 2390,
    Income: 3800,
  },
  {
    name: "July",
    Expense: 3490,
    Income: 8690,
  },
  {
    name: "Aug",
    Expense: 2000,
    Income: 10000,
  },
  {
    name: "Sep",
    Expense: 2780,
    Income: 9700,
  },
  {
    name: "Oct",
    Expense: 1890,
    Income: 7600,
  },
  {
    name: "Nov",
    Expense: 2390,
    Income: 6870,
  },
  {
    name: "Dec",
    Expense: 3490,
    Income: 7900,
  },
];

export default function TransactionChart() {
  return (
    <div className="h-[17rem] bg-white p-4 rounded-lg  flex flex-col flex-1 ml-5 mr-5">
      <div className="flex justify-between item-center pl-14 pr-14 ">
        <div>
          <div>
            <strong className="text-gray-700 font-bold">Overview</strong>
          </div>
          <div className="text-xs font-medium text-gray-400">
            Monthly Earning
          </div>
        </div>

        <span className="text-xs font-medium text-gray-400 flex items-center bg-purple-50 rounded-lg pl-[8px] pr-[8px]">
          Quarterly
          <i className="ri-arrow-down-s-line text-gray-400 text-2xl ml-2"></i>
        </span>
      </div>
      <div className="mt-3 flex-1 text-xs">
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 50,
              left: 50,
              bottom: 0,
            }}
            style={{ cursor: "pointer" }}
          >
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Bar
              dataKey="Income"
              barSize={45}
              fill={"#e9d5ff"}
              radius={[12, 12, 12, 12]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
