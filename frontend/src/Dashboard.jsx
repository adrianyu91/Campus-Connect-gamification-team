import React from "react";
import PointsCard from "./components/PointsCard";
import RewardsCard from "./components/RewardsCard";
import LeaderboardCard from "./components/LeaderboardCard";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left text-gray-800">
        Gamification Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PointsCard />
        <RewardsCard />
        <LeaderboardCard />
      </div>
    </div>
  );
};

export default Dashboard;
