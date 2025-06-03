// components/VehicleDetailsForm.jsx
import React from 'react';

const VehicleDetailsForm = () => {
  return (
    <div className="min-h-screen p-6 bg-white">
      <h2 className="text-xl font-bold mb-4">Vehicle Details</h2>
      <input type="text" placeholder="Vehicle Number" className="w-full p-3 border rounded mb-4" />
      <input type="text" placeholder="Model" className="w-full p-3 border rounded mb-4" />
      <input type="text" placeholder="Vehicle Type" className="w-full p-3 border rounded mb-4" />
      <input type="text" placeholder="Color" className="w-full p-3 border rounded mb-4" />
      <input type="number" placeholder="Seating Capacity" className="w-full p-3 border rounded mb-4" />
      <input type="text" placeholder="RC Number" className="w-full p-3 border rounded mb-4" />
      <button className="w-full p-3 bg-yellow-400 font-bold rounded">Submit Vehicle Details</button>
    </div>
  );
};

export default VehicleDetailsForm;