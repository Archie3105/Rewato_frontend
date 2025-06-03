// components/VehicleSelectionScreen.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoCheck } from "react-icons/go";

const vehicles = [
  { name: 'Cab', desc: 'Airport Cabs, Etc', icon: '/icons/Cab Select Vehicle.svg' },
  { name: 'Bike', desc: 'Bike Taxi', icon: '/icons/Bike.svg' },
  { name: 'Auto', desc: 'Auto Lite', icon: '/icons/Auto Select Vehicle.svg' },
  { name: 'E-Rickshaw', desc: 'Tuk Tuk, Toko', icon: '/icons/E-Rickshaw Select Vehicle.svg' }
];

const VehicleSelectionScreen = () => {
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen p-6 bg-white">
      <h2 className="text-xl font-bold mb-8">Select your vehicle</h2>
      {vehicles.map((v, i) => (
        <div key={i} className={`peer flex items-center p-4 border border-gray-300 w-full h-18 hover:bg-pink-50 checked:bg-pink-50 rounded mb-4 ${selected === i ? 'border-yellow-400' : ''}`} onClick={() => setSelected(i)}>
          <img src={v.icon} alt={v.name} className="w-12 h-12 mr-4" />
          <div className="flex-1">
            <p className="font-bold">{v.name}</p>
            <p className="text-sm text-gray-500">{v.desc}</p>
          </div>
          {/* <input type="radio" className='w-5 h-5'  checked={selected === i} readOnly /> */}
          <label className="flex items-center space-x-2 cursor-pointer relative">
            <input
              checked={selected === i}
              readOnly
              type="radio"
              className="peer appearance-none w-5 h-5 border border-gray-400 rounded-full checked:bg-yellow-400 checked:border-yellow-400 cursor-pointer"
            />
            <span className="pointer-events-none absolute left-[3px] top-1/2 transform -translate-y-1/2 hidden peer-checked:flex items-center justify-center text-black text-sm">
              <GoCheck />
            </span>
          </label>
        </div>
      ))}
      <button onClick={goToDashboard} className="w-full p-3 mt-10 bg-yellow-400 font-bold rounded hover:bg-yellow-500">Confirm Vehicle</button>
    </div>
  );
};

export default VehicleSelectionScreen;