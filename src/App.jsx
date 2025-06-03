import React from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import OtpScreen from './components/OtpScreen';
import RegisterScreen from './components/RegisterScreen';
import VehicleSelectionScreen from './components/VehicleSelectionScreen';
import ReferralCodeScreen from './components/ReferralCodeScreen';
import QRCodeScreen from './components/QRCodeScreen';
import SplashScreen from './components/SplashScreen';
import QRCodeScanner from './components/QrCodeScanner';
import RewardPopup from './components/RewardPopup';
import DashboardScreen from './components/DashboardScreen';
import DataDrivenScreen from './components/DataDrivenScreen';
import PaymentGateway from './components/PaymentGateway';
import MenuScreen from './components/MenuScreen';
import TransactionHistory from './components/TransactionHistory';
import CombinedDashboard from './components/CombinedDashboard';

const App = () => {

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashScreen />
  },
  {
    path: '/login',
    element:<LoginScreen />
  },
  {
    path: '/otp',
    element:<OtpScreen />
  },
  {
    path: '/register',
    element:<RegisterScreen />
  },
  {
    path: '/vehicleSelection',
    element:<VehicleSelectionScreen />
  },
  {
    path: '/dashboard',
    element:<CombinedDashboard />
  },
  {
    path: '/paymentgateway',
    element:<PaymentGateway />
  },
  {
    path: '/menu',
    element:<MenuScreen />
  },
  {
    path: '/transaction',
    element:<TransactionHistory />
  },
  {
    path: '/userhomepage',
    element:<HomeScreen />
  },
  {
    path: '/qrscan',
    element:<QRCodeScanner />
  },
  {
    path: '/reward',
    element:<RewardPopup />
  },


])

return <RouterProvider router={router} />;

  // return (
  //   <Router>
  //     <Routes>
  //       {/* <Route path="/" element={<SplashScreen />} />
  //       <Route path="/home" element={<HomeScreen />} />
  //       <Route path="/login" element={<LoginScreen />} />
  //       <Route path="/otp" element={<OtpScreen />} />
  //       <Route path="/register" element={<RegisterScreen />} />
  //       <Route path="/vehicle-select" element={<VehicleSelectionScreen />} />
  //       <Route path="/referral-code" element={<ReferralCodeScreen />} />
  //       <Route path="/qrcode" element={<QRCodeScreen />} />
  //       <Route path="/qrscan" element={<QRCodeScanner />} /> */}
  //       {/* <Route path="/dashboard" element={<Dashboard />} />
  //       {/* <Route path="/data-driven" element={<DataDriven />} /> */}
  //       {/* <Route path="/transactions" element={<TransactionHistory />} />  */}
  //     </Routes>
  //     {/* <RewardPopup /> */}
  //     <LoginScreen />
  //     <OtpScreen />
  //     <RegisterScreen />
  //     <VehicleSelectionScreen />
  //     <SelfieUploadScreen />

  //     <PaymentGateway />
  //     <MenuScreen />
  //     <TransactionHistory />

  //     <CombinedDashboard />
  //   </Router>
     
  // );
};

export default App;
