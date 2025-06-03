import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

function HomePage() {
  const [page, setPage] = useState('splash');

  return (
    <div className="w-full h-screen">
      {page === 'splash' && <SplashScreen onContinue={() => setPage('home')} />}
      {page === 'home' && <HomeScreen onScan={() => setPage('reward')} onQR={() => setPage('qrcode')} />}
      {page === 'reward' && <RewardScreen amount={50} onBack={() => setPage('home')} />}
      {page === 'qrcode' && <QRCodeScreen onBack={() => setPage('home')} />}
    </div>
  );
}

const SplashScreen = ({ onContinue }) => (
  <div className="flex flex-col justify-center items-center h-full bg-yellow-400" onClick={onContinue}>
    <h1 className="text-4xl font-bold text-blue-800">Rewato</h1>
    <p className="text-sm text-white mt-2">Every scan till you cashback</p>
  </div>
);

const HomeScreen = ({ onScan, onQR }) => (
  <div className="flex flex-col justify-between h-full bg-white">
    <div className="bg-yellow-300 p-6 text-center">
      <h2 className="text-lg font-bold">CASHBACK ON EVERY RIDE</h2>
      <img src="/vehicles.png" alt="Vehicles" className="mx-auto mt-4" />
      <button onClick={onScan} className="mt-4 px-4 py-2 bg-white text-black rounded-full">Scan now →</button>
    </div>
    <div className="p-6 text-center">
      <h3 className="font-bold text-lg">EVERY RIDE GIVES YOU INSTANT CASHBACK</h3>
      <img src="/vehicles.png" alt="Vehicles" className="mx-auto mt-4" />
      <button onClick={onQR} className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-md shadow-md">GET UNLIMITED CASHBACK</button>
    </div>
    <div className="p-4 flex justify-center">
      <button className="bg-yellow-300 p-2 rounded-full">
        <span className="text-xl">₹</span>
      </button>
    </div>
  </div>
);

const RewardScreen = ({ amount, onBack }) => (
  <div className="flex flex-col justify-center items-center h-full bg-yellow-300 relative">
    <div className="absolute inset-0 bg-black opacity-30" onClick={onBack}></div>
    <div className="relative bg-yellow-400 p-10 rounded-xl shadow-lg text-center">
      <div className="text-4xl font-bold">₹{amount}</div>
      <p className="mt-2 text-lg">Congratulation</p>
    </div>
  </div>
);

const QRCodeScreen = ({ onBack }) => (
  <div className="flex flex-col justify-center items-center h-full bg-white">
    <div className="p-4 border-4 border-yellow-300 rounded-lg">
      <QRCodeSVG value="https://rewato.app/scan" size={200} fgColor="#FFD700" />
    </div>
    <button onClick={onBack} className="mt-6 px-6 py-2 bg-yellow-300 text-black rounded-full">← Back</button>
  </div>
);

export default HomePage;




