import React, { useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import DashboardScreen  from './DashboardScreen';
import  DataDrivenScreen  from './DataDrivenScreen';
import { useNavigate } from 'react-router-dom';

const CombinedDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const homePage = () => {
    navigate('/');
  }

  return (
    <div className="min-h-screen bg-white px-5 pt-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div onClick={homePage} className="bg-yellow-300 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-2xl">U</div>
        </div>
        <FiHelpCircle className="text-gray-600 text-2xl" />
      </div>

      {/* Tabs */}
      <div className="flex justify-around  mb-4">
        <button
          className={`pb-2 font-medium text-lg w-full ${activeTab === 'dashboard' ? 'border-b-2 border-yellow-500 text-black' : 'text-gray-400'}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Your dashboard
        </button>
        <button
          className={`pb-2 font-medium text-lg w-full ${activeTab === 'data' ? 'border-b-2 border-yellow-500 text-black' : 'text-gray-400'}`}
          onClick={() => setActiveTab('data')}
        >
          Data driven
        </button>
      </div>

      {/* Content */}
      {activeTab === 'dashboard' ? <DashboardScreen /> : <DataDrivenScreen />}
    </div>
  );
};

export default CombinedDashboard;