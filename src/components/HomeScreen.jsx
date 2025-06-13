import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RewardPopup from './RewardPopup';
import { motion } from 'framer-motion';
import '../App.css'

const HomeScreen = () => {
  const [showRewardPopup, setShowRewardPopup] = useState(false);
  const [rewardAmount, setRewardAmount] = useState(0);
  const [progress, setProgress] = useState(0);

  const TRACK_WIDTH = 200;
  const navigate = useNavigate();

  const handleScan = () => {
    navigate('/qrscan');
    setRewardAmount(50);
    setShowRewardPopup(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-start bg-white">
      {/* Header */}
      <div className="bg-yellow-400 p-6 text-center relative rounded-bl-2xl rounded-br-2xl ">

        {/* Sunburst rays as background */}
        <img
          src="/icons/Sun Brust Rays.svg"
          alt="Rays"
          className="relative inset-0 w-full h-full object-none opacity-100 -mb-115 z-0"
        />

        {/* Heading */}
        <h2 id='rgb-text' className=" relative drop-shadow-md z-10 -mt-5">
          CASHBACK ON <br /> EVERY RIDE
        </h2>

        {/* Rupee Coin in Center */}
        <div className="relative z-0 flex justify-center items-center -mt-7 -mb-4">
          <img src="/icons/Rupay sign 2.svg" alt="Coin 2" className="w-8 h-8 mt-1" />
          <img src="/icons/Rupay sign 1.svg" alt="Coin 1" className="w-18 h-18 mt-4 z-0" />
          <img src="/icons/Rupay sign 3.svg" alt="Coin 3" className="w-10 h-10 mt-8" />
        </div>

        <img src="/icons/vehicles.png" alt="Vehicles" className="mx-auto w-[85%] -mb-6 z-10 relative" />
        <button
          onClick={handleScan}
          className="relative -bottom-10 px-4 py-2 bg-white rounded-full text-black text-sm font-semibold shadow hover:bg-yellow-600 transition"
        >
          Scan now →
        </button>
      </div>


      {/* Content */}
      <div className="mt-6">
        <h1 className="p-6 text-3xl font-extrabold">EVERY RIDE GIVES YOU INSTANT CASHBACK</h1>
        <img src="/icons/Object Image.jpg" alt="Vehicles" className="float-right -mt-24 -mb-20" />
      </div>

      <div className="flex justify-center">
        <img src="/icons/Get Unlimited.svg" alt="banner" className='w-52 ' />
      </div>

      {/* Reward popup */}
      {showRewardPopup && (
        <RewardPopup amount={rewardAmount} onClose={() => setShowRewardPopup(false)} />
      )}

      {/* 👇 Fixed Slider at the Bottom */}
      <div className="mb-5 mt-10 bottom-4 left-0 right-0 flex justify-center z-50">
        <div className="relative w-[350px] h-20 bg-yellow-100 py-2 px-2 rounded-full border border-yellow-400 overflow-hidden">
          {/* Fill progress bar */}
          <div
            className="absolute top-0 left-0 h-full bg-white rounded-full opacity-40 z-0"
            style={{ width: `${progress}px` }}
          />
          {/* Draggable Icon */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 z-10"
            drag="x"
            dragConstraints={{ left: 0, right: TRACK_WIDTH }}
            onDrag={(event, info) => {
              const clamped = Math.min(Math.max(0, info.point.x), TRACK_WIDTH);
              setProgress(clamped);
            }}
          >
            <img
              src="/icons/Rupay sign 1.svg"
              alt="₹"
              className="w-16 h-16 cursor-grab active:cursor-grabbing"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );

};

export default HomeScreen;


