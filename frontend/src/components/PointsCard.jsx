import React, { useState } from "react";

const PointsCard = () => {
  const [points, setPoints] = useState(120); // later fetch from Firebase

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">Total Points</h2>
      <p className="text-4xl font-bold text-blue-600 text-center">{points}</p>
    </div>
  );
};

export default PointsCard;
