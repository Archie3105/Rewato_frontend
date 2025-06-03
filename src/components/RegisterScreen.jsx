import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoCheck } from "react-icons/go";


const RegisterScreen = () => {
  const navigate = useNavigate();

  const goToVehicle = () => {
  navigate('/vehicleSelection'); 
};
  return (
    <div className="min-h-screen p-6 bg-white">
      <img src="/icons/Icon profile.png" alt="icon" className='w-10'/>
      <h2 className="text-xl font-semibold my-4 ">Hello User</h2>
      <p className="mb-8 text-md font-semibold w-52 text-gray-400 ">Please register yourself as a Rewato Partner</p>
      <form action="" className='flex flex-col gap-4'>
      <input type="text" placeholder="First Name" className="w-full p-3 border border-gray-400 rounded mb-4 outline-none" />
      <input type="text" placeholder="Last Name" className="w-full p-3 border border-gray-400 rounded mb-4 outline-none" />
      <input type="text" placeholder="Address" className="w-full p-3 border border-gray-400 rounded mb-4 outline-none" />
      {/* <label className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        Received account update on WhatsApp
      </label> */}
      <div className='rounded-lg bg-gray-100 p-2'> 
      <label className="flex items-center mb-4 space-x-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    className="peer appearance-none w-5 h-5 border border-gray-400 rounded checked:bg-yellow-400 checked:border-yellow-400 cursor-pointer"
                  />
                  <span className="pointer-events-none absolute left-[3px] top-1/2 transform -translate-y-1/2 hidden peer-checked:flex items-center justify-center text-black text-sm">
                    <GoCheck className='font-semibold'/>
                  </span> Received account update on WhatsApp
                </label>
      <input type="mobile" placeholder='+91 9080493806' className="w-full p-3 border border-gray-400 bg-white rounded mb-4 outline-none" readOnly />
      </div>
      <button onClick={goToVehicle} type='submit' className="w-full p-3 bg-yellow-400 font-bold rounded hover:bg-yellow-500">Register as a Partner</button>
      </form>
    </div>
  );
};

export default RegisterScreen;