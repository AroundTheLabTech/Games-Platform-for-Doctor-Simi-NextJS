"use client";

import { useState, useEffect } from "react";

let toastId = 0;

export default function Toaster() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {
    const id = toastId++;
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => removeToast(id), 3000);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    window.addToast = addToast; // Expose globally for easy testing
    return () => {
      delete window.addToast;
    };
  }, []);

  return (
    <div className="toaster-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      ))}
      <style jsx>{`
        .toaster-container {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
        }
        .toast {
          margin-bottom: 10px;
          padding: 10px 20px;
          border-radius: 5px;
          color: white;
          font-weight: bold;
          animation: fadeIn 0.3s;
        }
        .toast.info {
          background-color: #2196f3;
        }
        .toast.success {
          background-color: #4caf50;
        }
        .toast.error {
          background-color: #f44336;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
