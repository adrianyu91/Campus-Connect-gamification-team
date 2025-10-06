import React from "react";

const users = [
  { id: 1, name: "Alice", points: 120 },
  { id: 2, name: "Bob", points: 90 },
  { id: 3, name: "Charlie", points: 80 },
];

const LeaderboardCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">Leaderboard</h2>
      <ol className="list-decimal pl-5 space-y-1">
        {users.map((user, idx) => (
          <li
            key={user.id}
            className={`flex justify-between py-1 ${
              idx === 0 ? "font-bold text-yellow-600" : "text-gray-700"
            }`}
          >
            <span>{user.name}</span>
            <span>{user.points} pts</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LeaderboardCard;
