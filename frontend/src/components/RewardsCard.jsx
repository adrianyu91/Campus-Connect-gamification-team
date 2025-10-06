import React from "react";

const rewards = [
  { id: 1, name: "University Mug", points: 50 },
  { id: 2, name: "Coffee Discount", points: 30 },
  { id: 3, name: "T-Shirt", points: 100 },
];

const RewardsCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">Rewards Catalog</h2>
      <ul className="space-y-2">
        {rewards.map((reward) => (
          <li
            key={reward.id}
            className="flex justify-between border-b pb-2 hover:bg-gray-50 cursor-pointer rounded transition"
          >
            <span>{reward.name}</span>
            <span className="font-semibold text-blue-600">{reward.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsCard;
