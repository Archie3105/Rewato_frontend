import React from 'react'
import { FiHelpCircle, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
function Header({ onBack }) {
  const navigate = useNavigate();
  const helpBtn = () => {
    // navigate('/help')
  }
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-2">
        {/* <div className="bg-yellow-300 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-2xl">U</div> */}
        <FiArrowLeft onClick={onBack} className="text-gray-500 text-2xl hover:text-gray-900" />
      </div>
      <FiHelpCircle onClick={''} className="text-gray-500 text-2xl hover:text-gray-900" />
    </div>
  )
}

export default Header
