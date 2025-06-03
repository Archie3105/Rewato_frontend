// components/SplashScreen.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-yellow-400" onClick={() => navigate('/login')}>
      {/* <h1 className="text-4xl font-bold text-blue-800">Rewato</h1> */}
      <img src="/icons/Logo.svg" alt="" />
      <p className="sm:text-sm md:text-lg font-semibold text-white mt-2">Every scan till you cashback</p>
    </div>
  );
};

export default SplashScreen;
