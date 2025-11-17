import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [counts, setCounts] = useState({
    users: 0,
    tickets: 0,
    bookings: 0,
  });

  useEffect(() => {
    // Check logged-in user
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!storedUser) {
      navigate("/login");
      return;
    }
    setCurrentUser(storedUser);

    // Load counts from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setCounts({
      users: users.length,
      tickets: tickets.length,
      bookings: bookings.length,
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">Dashboard</h1>
            <p className="text-blue-100 mt-1 font-medium">
              Welcome to Airport Management System
            </p>
          </div>
          {currentUser && (
            <div className="text-right bg-white/20 backdrop-blur rounded-2xl px-6 py-4">
              <p className="text-blue-100 text-sm font-medium">Signed in as</p>
              <p className="font-bold text-white text-lg">{currentUser.name}</p>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Quick action links */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/users"
            className="group px-6 py-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 font-semibold"
          >
            <span className="text-2xl">👥</span>
            <span className="group-hover:text-blue-100">Manage Users</span>
          </Link>
          <Link
            to="/tickets"
            className="group px-6 py-4 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 font-semibold"
          >
            <span className="text-2xl">🎫</span>
            <span className="group-hover:text-indigo-100">Manage Tickets</span>
          </Link>
          <Link
            to="/flights"
            className="group px-6 py-4 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 font-semibold"
          >
            <span className="text-2xl">✈️</span>
            <span className="group-hover:text-green-100">View Flights</span>
          </Link>
          <Link
            to="/bookings"
            className="group px-6 py-4 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 font-semibold"
          >
            <span className="text-2xl">📅</span>
            <span className="group-hover:text-orange-100">Bookings</span>
          </Link>
        </div>

        {/* Summary cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-t-4 border-blue-600 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 uppercase">Users</p>
                <p className="text-4xl font-bold text-gray-900 mt-2">{counts.users}</p>
                <p className="text-xs text-gray-500 mt-2">Total registered users</p>
              </div>
              <div className="text-5xl opacity-20">👥</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-t-4 border-indigo-600 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 uppercase">Tickets</p>
                <p className="text-4xl font-bold text-gray-900 mt-2">{counts.tickets}</p>
                <p className="text-xs text-gray-500 mt-2">Available tickets/flights</p>
              </div>
              <div className="text-5xl opacity-20">🎫</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-t-4 border-green-600 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 uppercase">Bookings</p>
                <p className="text-4xl font-bold text-gray-900 mt-2">{counts.bookings}</p>
                <p className="text-xs text-gray-500 mt-2">Total bookings made</p>
              </div>
              <div className="text-5xl opacity-20">📅</div>
            </div>
          </div>
        </section>

        {/* Quick info */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">📊 Quick Info</h2>
          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <span className="text-blue-600 font-bold">•</span>
              Use the buttons above to manage Users, Tickets, Flights, and Bookings.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              All data is stored locally in your browser's storage.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-600 font-bold">•</span>
              Hover over cards to see interactive effects!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
