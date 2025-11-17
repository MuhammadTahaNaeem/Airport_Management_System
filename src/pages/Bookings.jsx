import React, { useState, useEffect } from "react";

const Bookings = () => {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedTicket, setSelectedTicket] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setUsers(storedUsers);
    setTickets(storedTickets);
    setBookings(storedBookings);
  }, []);

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedUser || !selectedTicket)
      return alert("Please select user & ticket");

    const newBooking = { 
      user: selectedUser, 
      ticket: selectedTicket,
      bookingDate: new Date().toLocaleDateString()
    };
    setBookings([...bookings, newBooking]);
    setSelectedUser("");
    setSelectedTicket("");
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      setBookings(bookings.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <span className="text-5xl">📅</span>
            Manage Bookings
          </h1>
          <p className="text-gray-600 font-medium">Create and manage flight bookings</p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Create New Booking</h2>

          <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select User</label>
              <select
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
              >
                <option value="">-- Choose a user --</option>
                {users.map((user, i) => (
                  <option key={i} value={user.name}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
              {users.length === 0 && (
                <p className="text-yellow-600 text-sm mt-1">⚠️ No users available. Add users first.</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Ticket</label>
              <select
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                value={selectedTicket}
                onChange={(e) => setSelectedTicket(e.target.value)}
              >
                <option value="">-- Choose a ticket --</option>
                {tickets.map((ticket, i) => (
                  <option key={i} value={ticket.name}>
                    {ticket.name} | {ticket.time} | Gate {ticket.gate}
                  </option>
                ))}
              </select>
              {tickets.length === 0 && (
                <p className="text-yellow-600 text-sm mt-1">⚠️ No tickets available. Add tickets first.</p>
              )}
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                disabled={users.length === 0 || tickets.length === 0}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                + Create Booking
              </button>
            </div>
          </form>
        </div>

        {/* Bookings List */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Bookings ({bookings.length})
          </h2>

          {bookings.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="text-5xl mb-4 opacity-50">📭</div>
              <p className="text-gray-500 text-lg font-medium">No bookings yet.</p>
              <p className="text-gray-400 mt-2">Create a booking using the form above.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {bookings.map((booking, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-green-600"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                          <span>✅</span>
                          Booking #{index + 1}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">{booking.bookingDate}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-xs text-gray-600 uppercase font-medium">👤 Passenger</p>
                        <p className="text-lg font-bold text-gray-900">{booking.user}</p>
                      </div>

                      <div className="p-3 bg-indigo-50 rounded-lg">
                        <p className="text-xs text-gray-600 uppercase font-medium">✈️ Flight</p>
                        <p className="text-lg font-bold text-gray-900">{booking.ticket}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <button
                        onClick={() => handleDelete(index)}
                        className="w-full px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition"
                      >
                        Cancel Booking
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
