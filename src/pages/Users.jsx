import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Users = () => {
  const { users, addUser, updateUser, deleteUser } = useContext(UserContext);
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.role) {
      alert("Please fill out all fields!");
      return;
    }

    if (editingIndex !== null) {
      updateUser(editingIndex, form);
      setEditingIndex(null);
    } else {
      addUser(form);
    }

    setForm({ name: "", email: "", role: "" });
  };

  const handleEdit = (index) => {
    setForm(users[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(index);
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setForm({ name: "", email: "", role: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <span className="text-5xl">👥</span>
            User Management
          </h1>
          <p className="text-gray-600 font-medium">Manage system users and their roles</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {editingIndex !== null ? "Edit User" : "Add New User"}
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                placeholder="e.g., Passenger, Admin"
              />
            </div>

            <div className="flex gap-3 items-end">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 font-semibold transition-all duration-200 transform hover:-translate-y-1"
              >
                {editingIndex !== null ? "Update User" : "Add User"}
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

        {/* Users List */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Users ({users.length})
          </h2>

          {users.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="text-5xl mb-4 opacity-50">👤</div>
              <p className="text-gray-500 text-lg font-medium">No users yet.</p>
              <p className="text-gray-400 mt-2">Add a user using the form above.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-blue-600"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
                          <p className="text-gray-500 text-sm">{user.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 p-3 bg-indigo-50 rounded-lg">
                      <p className="text-sm text-gray-600">Role</p>
                      <p className="font-semibold text-gray-900">{user.role}</p>
                    </div>

                    <div className="flex gap-2 pt-4 border-t">
                      <button
                        onClick={() => handleEdit(index)}
                        className="flex-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
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

export default Users;
