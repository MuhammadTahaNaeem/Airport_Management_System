import React, { useState, useEffect } from "react";

const Flights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const storedFlights = JSON.parse(localStorage.getItem("tickets")) || [];
    setFlights(storedFlights);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <span className="text-5xl">✈️</span>
            Available Flights
          </h1>
          <p className="text-gray-600 font-medium">Browse all scheduled flights and their status</p>
        </div>

        {flights.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-5xl mb-4 opacity-50">📭</div>
            <p className="text-gray-500 text-lg font-medium">No flights available yet.</p>
            <p className="text-gray-400 mt-2">Add flights from the Manage Tickets section.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {flights.map((flight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-blue-600"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{flight.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">Flight Information</p>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-white text-sm font-semibold ${
                        flight.status === "On Time"
                          ? "bg-gradient-to-r from-green-500 to-green-600"
                          : flight.status === "Delayed"
                          ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                          : "bg-gradient-to-r from-red-500 to-red-600"
                      }`}
                    >
                      {flight.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <span className="text-2xl">🕐</span>
                      <div>
                        <p className="text-xs text-gray-600 uppercase font-medium">Departure Time</p>
                        <p className="text-lg font-bold text-gray-900">{flight.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                      <span className="text-2xl">🚪</span>
                      <div>
                        <p className="text-xs text-gray-600 uppercase font-medium">Gate Number</p>
                        <p className="text-lg font-bold text-gray-900">{flight.gate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-4 border-t">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase font-medium tracking-wide">Flight #{index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Flights;
