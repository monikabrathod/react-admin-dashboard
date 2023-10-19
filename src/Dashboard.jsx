import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import TransactionChart from "./components/TransactionChart";
import BuyerProfilePieChart from "./components/BuyerProfilePieChart";
import RecentOrders from "./components/RecentOrders";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 main">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfilePieChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
      </div>
    </div>
  );
}
