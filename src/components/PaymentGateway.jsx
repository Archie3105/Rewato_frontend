import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx'; // for the close icon

const PaymentGateway = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <div className="w-full mt-2  max-w-md mx-auto bg-gray-100">
      {/* Header */}
      <div className="flex justify-between mx-2 bg-white shadow-lg items-center px-4 py-3 rounded-tl-lg rounded-tr-lg ">
        <p className="font-bold text-lg">Total transfer</p>
        <div className='flex'>
        <p className="font-semibold text-lg mr-4">₹4,468</p>
        <button className=' float-right'>
          <RxCross2 className="text-xl" />
        </button>
        </div>
      </div>

      {/* UPI Section */}
      <div className="px-4 py-3 space-y-2 mx-5 my-4 rounded-lg  shadow-lg bg-white">
        <p className="font-medium text-md">UPI ID</p>
        <input
          type="text"
          placeholder="Enter UPI ID"
          className="w-full  outline-gray-300 rounded-md px-2 py-2 text-sm"
        />

        {/* UPI Icons (replace src with your SVG paths) */}
        <div className="flex space-x-4 mt-2">
          <img
            src="/icons/phonepe-icon.svg"
            alt="PhonePe"
            className="w-8 h-8 cursor-pointer"
            // onClick={() => setSelectedPayment('PhonePe')}
            onClick={() => window.location.href = "phonepe://upi"}
            
            />
          <img
            src="/icons/google-pay-icon.svg"
            alt="GPay"
            className="w-8 h-8 cursor-pointer"
            // onClick={() => setSelectedPayment('GPay')}
            onClick={() => window.location.href = "tez://upi/pay"}
          />
           <img
            src="/icons/paytm-icon.svg"
            alt="Paytm"
            className="w-8 h-8 cursor-pointer"
            // onClick={() => setSelectedPayment('Paytm')}
            onClick={() =>  window.location.href = "paytmmp://pay"}
          />
        </div>
      </div>

      {/* Razorpay Section */}
      <div className="p-4 space-y-2 mx-5 my-4 rounded-lg  shadow-lg bg-white">
        <p className="font-medium text-md mb-4">Razorpay</p>
        <div className="flex items-center justify-between  rounded-md py-3">
          <img
            src="/icons/razorpay-icon.svg"
            alt="Razorpay"
            className="w-20"
            onClick={() => setSelectedPayment('Razorpay')}
          />
          <input
            className='outline-none w-4 h-4'
            type="radio"
            name="payment"
            checked={selectedPayment === 'Razorpay'}
            onChange={() => setSelectedPayment('Razorpay')}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="px-4 pb-4">
        <button type='submit' className="bg-yellow-400 text-black w-full py-3 rounded-md font-semibold shadow">
          Bank Transfer
        </button>
      </div>
    </div>
  );
};

export default PaymentGateway;
