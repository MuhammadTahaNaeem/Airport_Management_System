import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center fade-in-up">
        <div className="mb-8 inline-block animate-bounce">
          <span className="text-9xl">✈️</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Airport Management
        </h1>

        <p className="text-xl md:text-2xl opacity-90 mb-4 drop-shadow-md">
          Streamline Flights, Users & Bookings
        </p>

        <p className="text-lg opacity-75 drop-shadow-md">Redirecting in a moment...</p>

        {/* Loading spinner */}
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white via-blue-200 to-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
