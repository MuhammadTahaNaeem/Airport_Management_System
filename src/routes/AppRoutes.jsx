import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Flights from "../pages/Flights";
import Tickets from "../pages/Tickets";
import Users from "../pages/Users";
import Bookings from "../pages/Bookings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/users" element={<Users />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  );
};

export default AppRoutes;
