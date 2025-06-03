
// // components/HomeScreen.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import RewardScreen from './RewardPopup';
// import { motion } from 'framer-motion';

// const HomeScreen = () => {

//   const [showRewardPopup, setShowRewardPopup] = useState(false);
//   const [rewardAmount, setRewardAmount] = useState(0);

//   const [progress, setProgress] = useState(0);

//   // Width of track in px (should match actual rendered width)
//   const TRACK_WIDTH = 200;

//   const [showReward, setShowReward] = useState(false);
//   const navigate = useNavigate();

//   const handleScan = () => {
//     // setIsScanning(true);
//     navigate('/qrscan');

//     setRewardAmount(50); // example fixed amount or from API
//     setShowRewardPopup(true);
//   };

//   return (
//     <div className={`relative flex flex-col justify-between min-h-screen bg-white transition-opacity duration-300 ${showReward ? 'opacity-80' : 'opacity-100'}`}>
//       <div className="bg-yellow-300 p-6 text-center relative rounded-bl-2xl rounded-br-2xl">
//         <h2 className="text-lg font-bold">CASHBACK ON EVERY RIDE</h2>
//         <img src="/icons/vehicles.png" alt="Vehicles" className="mx-auto my-4" />
//         {/* <button onClick={handleScan} className="mt-4 px-4 py-2 bg-white text-black rounded-full">Scan now →</button> */}
//         <button onClick={handleScan} className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-2 mt-4  bg-white  rounded-full text-black text-sm font-semibold  shadow hover:bg-yellow-600 transition">
//           Scan now →
//         </button>
//       </div>
//       <div className="p-6 float-right ">
//         <h1 className='text-3xl font-bold'>EVERY RIDE GIVES YOU INSTANT CASHBACK</h1>
//         <img src="/icons/vehicles.png" alt="Vehicles" className="ml-2 mt-4 float-right" />

//       </div>



//       {/* Animated Cashback Button */}

//       <motion.div
//         className="text-center mt-10"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="p-4 flex justify-center">
//           <div className="relative bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-xl w-64 h-34 p-4 text-center shadow-lg mx-auto">
//             {/* Sparkles */}
//             <div className="absolute top-2 left-2 text-white text-xs">✨</div>
//             <div className="absolute top-2 right-2 text-white text-xs">✨</div>

//             {/* Text content */}
//             <div className="mt-2">
//               <p className="text-blue-800 font-bold text-sm">GET</p>
//               <p className="text-black font-extrabold text-xl -mt-1">UNLIMITED</p>
//               <p className="text-blue-600 font-black text-xl drop-shadow-[2px_2px_0px_rgba(255,255,255,0.6)]">
//                 CASHBACK
//               </p>
//               <div className="w-full h-2 mt-1 bg-gradient-to-r from-blue-300 to-white rounded-full blur-sm opacity-60" />
//             </div>

//             {/* Button overlapping bottom */}
//             <button className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-black text-xs font-bold rounded shadow hover:bg-yellow-600 transition">
//               TILL YOU SCAN
//             </button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Cashback Strip */}
//       <div className="flex justify-center mt-6 mb-10  ">
//         <div className="relative w-[350px] h-18 bg-yellow-100 py-2 p-2 rounded-full border-1 border-yellow-400 overflow-hidden">

//           {/* Yellow fill to indicate progress */}
//           <div
//             className="absolute top-0 left-0 h-full bg-white rounded-full opacity-40 z-0"
//             style={{ width: `${progress}px` }}
//           />

//           {/* Draggable Rupay icon */}
//           <motion.div
//             className="absolute top-1/2 -translate-y-1/2 z-10"
//             drag="x"
//             dragConstraints={{ left: 0, right: TRACK_WIDTH }}
//             onDrag={(event, info) => {
//               const clamped = Math.min(Math.max(0, info.point.x), TRACK_WIDTH);
//               setProgress(clamped);
//             }}
//           >
//             <img
//               src="/icons/Rupay sign 1.svg"
//               alt="₹"
//               className="w-16 h-16 cursor-grab active:cursor-grabbing"
//             />
//           </motion.div>
//         </div>
//       </div>

//       {showRewardPopup && (
//         <RewardPopup amount={rewardAmount} onClose={() => setShowRewardPopup(false)} />
//       )}


//     </div>
//     // </div >
//   );
// };

// export default HomeScreen;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RewardPopup from './RewardPopup';
import { motion } from 'framer-motion';

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
      <div className="bg-yellow-300 p-6 text-center relative rounded-bl-2xl rounded-br-2xl">
        <h2 className="text-lg font-bold">CASHBACK ON EVERY RIDE</h2>
        <img src="/icons/vehicles.png" alt="Vehicles" className="mx-auto my-4" />
        <button
          onClick={handleScan}
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white rounded-full text-black text-sm font-semibold shadow hover:bg-yellow-600 transition"
        >
          Scan now →
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h1 className="text-3xl font-bold">EVERY RIDE GIVES YOU INSTANT CASHBACK</h1>
        <img src="/icons/vehicles.png" alt="Vehicles" className="ml-2 mt-4 float-right" />
      </div>

      {/* Cashback Banner */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-4 flex justify-center">
          <div className="relative bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-xl w-64 h-34 p-4 text-center shadow-lg mx-auto">
            <div className="absolute top-2 left-2 text-white text-xs">✨</div>
            <div className="absolute top-2 right-2 text-white text-xs">✨</div>
            <div className="mt-2">
              <p className="text-blue-800 font-bold text-sm">GET</p>
              <p className="text-black font-extrabold text-xl -mt-1">UNLIMITED</p>
              <p className="text-blue-600 font-black text-xl drop-shadow-[2px_2px_0px_rgba(255,255,255,0.6)]">CASHBACK</p>
              <div className="w-full h-2 mt-1 bg-gradient-to-r from-blue-300 to-white rounded-full blur-sm opacity-60" />
            </div>
            <button className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-black text-xs font-bold rounded shadow hover:bg-yellow-600 transition">
              TILL YOU SCAN
            </button>
          </div>
        </div>
      </motion.div>

      {/* Reward popup */}
      {showRewardPopup && (
        <RewardPopup amount={rewardAmount} onClose={() => setShowRewardPopup(false)} />
      )}

      {/* 👇 Fixed Slider at the Bottom */}
      <div className=" my-5 bottom-4 left-0 right-0 flex justify-center z-50">
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
