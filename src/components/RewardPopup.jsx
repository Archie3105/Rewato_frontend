// // components/RewardPopup.jsx
// import React from 'react';

// const RewardPopup = ({ amount, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//       <div className="relative bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl shadow-xl w-64 h-76 text-center p-4">
//       <img src="/Sun brust rays cashback screen.svg" alt="₹" className="absolute inset-0 w-full h-full" />
//         {/* Coin */}
//         <div className="w-32 h-32  rounded-full mx-auto mt-20 shadow-lg flex items-center justify-center relative">
//           <img src="/Rotate on hover Digital Rupee.svg" alt="₹" className="absolute inset-1 w-full h-full" />
//           {/* <span className="text-white text-2xl font-bold relative z-10">₹{amount}</span> */}
//         </div>

//         {/* Text */}
//         <p className="text-blue-800 mt-4 text-2xl font-semibold opacity-300 inset-0 ">Congratulation</p>

        
        
//       </div>

//       <button
//           onClick={onClose}
//           className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full shadow hover:bg-yellow-500 transition"
//         >
//           Scan more →
//         </button>
//     </div>
//   );
// };

// export default RewardPopup;



// components/RewardPopup.jsx
import React from 'react';

const RewardPopup = ({ amount, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="relative bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl shadow-xl w-64 h-76 text-center p-4">
        <img src="/Sun brust rays cashback screen.svg" alt="₹" className="absolute inset-0 w-full h-full" />

        <div className="w-32 h-32 rounded-full mx-auto mt-20 shadow-lg flex items-center justify-center relative">
          <img src="/Rotate on hover Digital Rupee.svg" alt="₹" className="absolute inset-1 w-full h-full" />
        </div>

        <p className="text-blue-800 mt-4 text-2xl font-semibold">Congratulations</p>
      </div>

      <button
        onClick={onClose}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full shadow hover:bg-yellow-500 transition"
      >
        Scan more →
      </button>
    </div>
  );
};

export default RewardPopup;


