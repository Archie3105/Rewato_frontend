// components/QRCodeScreen.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-full bg-white">
      <div className="p-4 border-4 border-yellow-300 rounded-lg">
        <QRCodeSVG value="https://rewato.app/scan" size={200} fgColor="#FFD700" />
      </div>
      <button onClick={() => navigate('/home')} className="mt-6 px-6 py-2 bg-yellow-300 text-black rounded-full">← Back</button>
    </div>
  );
};

export default QRCodeScreen;
