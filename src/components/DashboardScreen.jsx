import React from 'react';

const DashboardScreen = () => {
  // Define data for segments: value out of 100 and color
  const chartData = [
    { label: "High", value: 60, color: "#4ade80" },     // green-400
    { label: "Medium", value: 25, color: "#3b82f6" },   // blue-500
    { label: "Low", value: 15, color: "#facc15" },      // yellow-400
  ];

  // Convert values into strokeDasharray format
  let cumulative = 0;
  const circles = chartData.map((item, index) => {
    const startAngle = (cumulative / 100) * 360;
    cumulative += item.value;

    return (
      <circle
        key={index}
        cx="18"
        cy="18"
        r="15"
        fill="transparent"
        stroke={item.color}
        strokeWidth="6"
        strokeDasharray={`${item.value} ${100 - item.value}`}
        transform={`rotate(${(startAngle - 90)} 18 18)`}
      />
    );
  });

  return (
    <div>
      <div className="grid grid-cols-2  gap-2">
        <div className="border border-gray-300 rounded-xl p-3 shadow-lg w-full ">
          <h2 className="text-sm font-semibold w-full mb-4">Scan Category Overview</h2>

          <div className="flex justify-between mt-2 items-center ">
            {/* Legend */}
            <ul className="text-xs space-y-1 space-x-2">
              {chartData.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span
                    className="w-[6px] h-[6px] rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.label}
                </li>
              ))}
            </ul>

            {/* Chart */}
            <svg width="100" height="100" viewBox="0 0 36 36">
              {circles}
            </svg>
          </div>
        </div>


        <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
          <p className="text-sm font-semibold">Total Scans</p>
          <p className="text-blue-700 font-semibold text-xl">1,235</p>
          <p className="text-xs font-semibold mt-5 text-gray-600">Total Earnings: ₹2500.00</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
          <p className="text-sm font-semibold">Cashback Returned</p>
          <p className="text-blue-700 font-semibold text-xl">₹2,468</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
          <p className="text-sm font-semibold">Today Revenue</p>
          <p className="text-blue-700 font-semibold text-xl">₹4,468</p>
        </div>
      </div>

      <div className="mt-6">
        <button className="bg-yellow-400 text-black py-3 w-full rounded-md font-semibold shadow hover:bg-yellow-500">
          Bank Transfer
        </button>
      </div>
    </div>
  );
};

export default DashboardScreen