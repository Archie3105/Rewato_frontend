import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Header from './Header'
import { Navigate, useNavigate } from "react-router-dom";

const TransactionHistory = () => {
  const navigate = useNavigate();
  const transactions = Array(6).fill({
    type: 'Debit',
    method: 'Via UPI',
    amount: '₹4,468',
  });

  return (
    <div className="min-h-screen bg-white p-4 space-y-4">
      {/* <Header onBack={() => navigate(-1)} /> */}
      <Header onBack={() => navigate('/menu')} />
      <h2 className="text-lg font-semibold">Transactions history</h2>

      {transactions.map((txn, index) => (
        <div key={index} className="flex justify-between items-center border-b border-gray-300 text-sm p-4">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-100   p-2 rounded-lg">
              <FiArrowUpRight className="w-6 h-6"/>
            </div>
            <div>
              <p className="text-sm text-gray-300">{txn.type}</p>
              <p className="font-semibold">{txn.method}</p>
            </div>
          </div>
          <div className="font-bold">{txn.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;