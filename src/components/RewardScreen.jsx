// components/RewardScreen.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RewardScreen = ({ amount }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-yellow-400 relative">
      <div className="absolute inset-0 bg-black opacity-30" onClick={() => navigate('/home')}></div>
      <div className="relative bg-yellow-400 p-10 rounded-xl shadow-lg text-center">
        <div className="text-4xl font-bold">₹{amount}</div>
        <p className="mt-2 text-lg">Congratulation</p>
      </div>
    </div>
  );
};

export default RewardScreen;
