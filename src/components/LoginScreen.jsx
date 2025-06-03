import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleProceed = () => {
    if (!phoneNumber || phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setError('');
    navigate('/otp');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col justify-end min-h-screen bg-yellow-300 relative">
        <div className="relative -top-2 left-0 w-full">
          <img
            src="/icons/humans.png"
            alt="Rewato Crew"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center text-white text-3xl font-bold drop-shadow-lg">
            EARN ON EVERY RIDE
          </h1>
        </div>
        <div className="bg-white rounded-t-2xl -mt-6 p-6 z-10">
          <div className="flex justify-between items-center">
            <img src="/icons/LogoYellow.svg" alt="Rewato" className='w-34' />
            <button className="text-xl">×</button>
          </div>
          <p className="mt-2 text-gray-600">Login with phone number</p>
          <input
            type="tel"
            placeholder="+91 7520241126"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full mt-4 p-3 border rounded-md"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <button
            onClick={handleProceed}
            className="w-full mt-6 bg-yellow-400 text-white font-semibold py-3 rounded-md hover:bg-yellow-500"
          >
            Proceed
          </button>
          <p className="mt-2 mx-10 text-md font-semibold text-center text-gray-600">
            Please read our <a href="#" className="text-blue-700 ">Term and conditions</a> before proceeding
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginScreen;
