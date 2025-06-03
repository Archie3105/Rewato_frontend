// // src/components/QRCodeScanner.jsx
// import React, { useEffect, useRef } from 'react';
// import { Html5Qrcode } from 'html5-qrcode';
// import { useNavigate } from 'react-router-dom';

// const QRCodeScanner = () => {
//   const navigate = useNavigate();
//   const hasScanned = useRef(false);
//   const scannerRef = useRef(null);

//   useEffect(() => {
//       const html5QrCode = new Html5Qrcode("qr-reader");
//       scannerRef.current = html5QrCode;

//       html5QrCode.start(
//         { facingMode: "environment" },
//         { fps: 10, qrbox: 250 },
//         qrCodeMessage => {
//           if (!hasScanned.current) {
//             hasScanned.current = true;
//             console.log(`Scanned: ${qrCodeMessage}`);
//             html5QrCode.stop().then(() => {
//               navigate('/dashboard');
//             }).catch(err => {
//               console.warn("Stop error (after scan):", err);
//               navigate('/dashboard');
//             });
//           }
//         },
//         errorMessage => {
//           // Optional: console.log("Scan error", errorMessage);
//         }
//       ).catch(err => {
//         console.error("Scanner start error:", err);
//       });

//       return () => {
//         if (scannerRef.current) {
//           scannerRef.current
//             .stop()
//             .catch((err) => {
//               console.warn("Scanner stop error on unmount:", err);
//             });
//         }
//       };
//   }, [navigate]);

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center h-screen bg-transparent p-4">
//         {/* <h2 className="text-xl font-bold mb-4 text-gray-800">Scan QR Code</h2> */}

//         {/* Styled scanner box like your image, without visible QR */}
//         <div className="relative w-76 h-76 bg-transparent border-yellow-400 rounded-lg shadow-lg">
//           <div id="qr-reader" className="absolute p-2 m-2 top-0 left-0 w-full h-full rounded-lg" />
//           {/* Yellow corners for scanner look */}
//           <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-yellow-400 rounded-" />
//           <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-yellow-400" />
//           <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-yellow-400" />
//           <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-yellow-400 " />
//         </div>

//         {/* <p className="mt-4 text-gray-500 text-sm">Align QR code within the frame</p> */}
//       </div>
//     </>
//   );
// };

// export default QRCodeScanner;



// src/components/QRCodeScanner.jsx
import React, { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';

const QRCodeScanner = () => {
  const navigate = useNavigate();
  const hasScanned = useRef(false);
  const scannerRef = useRef(null);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("qr-reader");
    scannerRef.current = html5QrCode;

    html5QrCode.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      qrCodeMessage => {
        if (!hasScanned.current) {
          hasScanned.current = true;
          console.log(`Scanned: ${qrCodeMessage}`);
          html5QrCode.stop().then(() => {
            navigate('/?scanned=true'); // ✅ Pass scanned flag
          }).catch(err => {
            console.warn("Stop error (after scan):", err);
            navigate('/?scanned=true');
          });
        }
      },
      errorMessage => {
        // console.log("Scan error", errorMessage);
      }
    ).catch(err => {
      console.error("Scanner start error:", err);
    });

    return () => {
      if (scannerRef.current) {
        scannerRef.current
          .stop()
          .catch((err) => {
            console.warn("Scanner stop error on unmount:", err);
          });
      }
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent p-4">
      <div className="relative w-76 h-76 bg-transparent border-yellow-400 rounded-lg shadow-lg">
        <div id="qr-reader" className="absolute p-2 m-2 top-0 left-0 w-full h-full rounded-lg" />
        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-yellow-400" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-yellow-400" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-yellow-400" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-yellow-400" />
      </div>
    </div>
  );
};

export default QRCodeScanner;
