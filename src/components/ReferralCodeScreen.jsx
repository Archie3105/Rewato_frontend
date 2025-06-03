// components/ReferralCodeScreen.jsx
import React from 'react';

const ReferralCodeScreen = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between p-6 bg-white">
      <div>
        <h2 className="text-xl font-bold mb-4">Referral Code (Optional)</h2>
        <input type="text" placeholder="Enter Referral Code" className="w-full p-3 border rounded mb-4" />
        <button className="w-full p-3 bg-yellow-400 font-bold rounded">Apply</button>
      </div>
      <button className="w-full mt-6 p-3 bg-yellow-400 font-bold rounded">Skip & Continue</button>
    </div>
  );
};

export default ReferralCodeScreen;