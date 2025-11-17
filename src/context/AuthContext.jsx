import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";

const Users = () => {
  const { users, addUser, updateUser, deleteUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Add or update user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Please enter name and email");

    if (editingIndex !== null) {
      updateUser(editingIndex, { name, email });
      setEditingIndex(null);
    } else {
      addUser({ name, email });
    }

    setName("");
    setEmail("");
  };

  // Edit user
  const handleEdit = (index) => {
    setName(users[index].name);
    setEmail(users[index].email);
    setEditingIndex(index);
  };

  // Delete user
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(index);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 flex flex-col gap-3 bg-gray-100 p-4 rounded"
      >
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {editingIndex !== null ? "Update User" : "Add User"}
        </button>
      </form>

      {/* User List */}
      <ul className="space-y-2">
        {users.length === 0 && <p>No users found.</p>}
        {users.map((user, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
