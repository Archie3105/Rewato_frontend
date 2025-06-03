import React from "react";
import Header from './Header'
import { useNavigate } from "react-router-dom";
const MenuScreen = () => {
  const navigate = useNavigate();

  const paymentHistory = () => {
    navigate('/transaction');
  }
  const totalRevenue = () => {
    // navigate('/transaction');
  }

  const handleLogOut = () => {

  }
  return (
    <div className="min-h-screen bg-white p-4 space-y-6">
      <Header onBack={() => navigate(-1)} />
      <div className="flex justify-between items-center">
        <div className='flex space-x-4'>
          <div className="bg-yellow-400 text-white text-xl rounded-lg w-12 h-12 flex items-center justify-center font-bold">UA</div>
          <div className="font-semibold ">
            <h1 className="text-xl">Name Partner</h1>
            <p className="text-sm text-gray-400">+91 9897974768</p>
          </div>
        </div>
        <div className="text-yellow-400 text-md font-semibold">Manage</div>
      </div>
      <hr className=" border-gray-200" />
      <div className="flex justify-between gap-3 rounded-lg mb-12">
        <div onClick={totalRevenue}  className="w-full bg-gray-100 rounded-lg p-4 space-y-5 hover:bg-gray-200">
          <p className="text-lg font-semibold">Today Revenue</p>
          <p className="text-black font-bold">₹4,468</p>
        </div>
        <div onClick={paymentHistory} className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-3 space-y-5">
          <p className="text-lg font-semibold">Transaction history</p>
          <p className="text-black font-bold">₹4,468</p>
        </div>
      </div>

      <div className="space-y-2 ">
        <h2 className="text-xl text-gray-400 mb-2">PREFERANCES</h2>
        <p className="text-lg ">Languages</p>
        <p className="text-lg ">Location Permission</p>
        <p className="text-lg ">Privacy</p>
        <p className="text-lg ">Term and conditions</p>
      </div>

      <button onClick={handleLogOut} className="text-red-500 mx-auto w-full text-xl mt-10 font-semibold">Logout</button>
    </div>
  );
};

export default MenuScreen;
