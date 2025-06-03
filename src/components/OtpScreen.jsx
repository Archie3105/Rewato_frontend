// 2. OtpScreen.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'
const OtpScreen = () => {
  const navigate = useNavigate();

  const validateOtp = () => {
    navigate('/register')
  }
  return (
    <div className="flex flex-col justify-end min-h-screen bg-yellow-300 relative">
      {/* <div className=" relative top-0 left-0 w-full">
        <img src="./icons/humans.png" alt="Rewato Crew" className="w-full" />
      </div>
        <h1 className='text-center absolute  font-bold text-3xl text-white mb-8'>EARN ON EVERY RIDE</h1> */}
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
        <p className="mt-2 text-gray-600">ENTER OTP</p>
        <div className="flex justify-center mt-4 items-center m-auto w-24 gap-4 text-gray-600">
          {[...Array(4)].map((_, i) => (
            <input key={i} maxLength={1} className="w-10 h-12 border text-center rounded-md" />
          ))}
        </div>
        <button onClick={validateOtp} className="w-full mt-4 bg-yellow-400 text-white font-semibold py-3 rounded-md">Submit</button>
        <p className="mt-2 mx-10 text-md font-semibold text-center text-gray-600">
          Please read our <a href="#" className="text-blue-700 ">Term and conditions</a> before proceeding
        </p>
      </div>
    </div>
  );
};

export default OtpScreen;
