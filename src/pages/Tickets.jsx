import React, { useState, useEffect } from "react";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [gate, setGate] = useState("");
  const [status, setStatus] = useState("On Time");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, []);

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !time || !gate) return alert("Please fill all fields");

    const ticketData = { name, time, gate, status };

    if (editingIndex !== null) {
      const updatedTickets = [...tickets];
      updatedTickets[editingIndex] = ticketData;
      setTickets(updatedTickets);
      setEditingIndex(null);
    } else {
      setTickets([...tickets, ticketData]);
    }

    setName("");
    setTime("");
    setGate("");
    setStatus("On Time");
  };

  const handleEdit = (index) => {
    const ticket = tickets[index];
    setName(ticket.name);
    setTime(ticket.time);
    setGate(ticket.gate);
    setStatus(ticket.status);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      setTickets(tickets.filter((_, i) => i !== index));
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setName("");
    setTime("");
    setGate("");
    setStatus("On Time");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <span className="text-5xl">🎫</span>
            Manage Tickets
          </h1>
          <p className="text-gray-600 font-medium">Add, edit, or remove flight tickets</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {editingIndex !== null ? "Edit Ticket" : "Add New Ticket"}
          </h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Flight Name</label>
              <input
                type="text"
                placeholder="e.g., BA 747"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Departure Time</label>
              <input
                type="text"
                placeholder="e.g., 10:30 AM"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gate Number</label>
              <input
                type="text"
                placeholder="e.g., A12"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                value={gate}
                onChange={(e) => setGate(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Flight Status</label>
              <select
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>On Time</option>
                <option>Delayed</option>
                <option>Cancelled</option>
              </select>
            </div>

            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 font-semibold transition-all duration-200 transform hover:-translate-y-1"
              >
                {editingIndex !== null ? "Update Ticket" : "Add Ticket"}
              </button>
              {editingIndex !== null && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-semibold transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Tickets List */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Tickets ({tickets.length})
          </h2>

          {tickets.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="text-5xl mb-4 opacity-50">📭</div>
              <p className="text-gray-500 text-lg font-medium">No tickets yet.</p>
              <p className="text-gray-400 mt-2">Add a ticket using the form above.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {tickets.map((ticket, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-indigo-600"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{ticket.name}</h3>
                        <p className="text-gray-500 text-sm mt-1">Ticket #{index + 1}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                          ticket.status === "On Time"
                            ? "bg-green-500"
                            : ticket.status === "Delayed"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </div>

                    <div className="space-y-2 mb-6">
                      <p className="text-gray-700"><strong>🕐 Time:</strong> {ticket.time}</p>
                      <p className="text-gray-700"><strong>🚪 Gate:</strong> {ticket.gate}</p>
                    </div>

                    <div className="flex gap-2 pt-4 border-t">
                      <button
                        onClick={() => handleEdit(index)}
                        className="flex-1 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition"
                      >
                        Delete
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

export default Tickets;
