import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar when near the top
      if (currentScrollY < 50) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl sticky top-0 z-50 transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="w-full">
        {/* Desktop and Mobile Header */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex-shrink-0 group"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-blue-100 transition duration-300 whitespace-nowrap">
                ✈️ Airport
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavLink to="/" isActive={isActive("/")}>Home</NavLink>
              <NavLink to="/login" isActive={isActive("/login")}>Login</NavLink>
              <NavLink to="/register" isActive={isActive("/register")}>Register</NavLink>
              <NavLink to="/dashboard" isActive={isActive("/dashboard")}>Dashboard</NavLink>
              <NavLink to="/flights" isActive={isActive("/flights")}>Flights</NavLink>
              <NavLink to="/tickets" isActive={isActive("/tickets")}>Tickets</NavLink>
              <NavLink to="/users" isActive={isActive("/users")}>Users</NavLink>
              <NavLink to="/bookings" isActive={isActive("/bookings")}>Bookings</NavLink>
            </div>

            {/* Tablet Navigation (md and up) */}
            <div className="hidden md:flex lg:hidden items-center gap-1 flex-wrap justify-center flex-1 mx-4">
              <NavLink to="/" isActive={isActive("/")} compact>Home</NavLink>
              <NavLink to="/login" isActive={isActive("/login")} compact>Login</NavLink>
              <NavLink to="/register" isActive={isActive("/register")} compact>Register</NavLink>
              <NavLink to="/dashboard" isActive={isActive("/dashboard")} compact>Dashboard</NavLink>
              <NavLink to="/flights" isActive={isActive("/flights")} compact>Flights</NavLink>
              <NavLink to="/tickets" isActive={isActive("/tickets")} compact>Tickets</NavLink>
              <NavLink to="/users" isActive={isActive("/users")} compact>Users</NavLink>
              <NavLink to="/bookings" isActive={isActive("/bookings")} compact>Bookings</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg transition duration-200 flex-shrink-0 ml-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-blue-700 to-indigo-700 max-h-[calc(100vh-80px)] overflow-y-auto animate-slideDown">
            <div className="px-3 sm:px-4 py-3 space-y-2">
              <MobileNavLink to="/" isActive={isActive("/")} onClick={() => setIsOpen(false)}>
                🏠 Home
              </MobileNavLink>
              <MobileNavLink to="/login" isActive={isActive("/login")} onClick={() => setIsOpen(false)}>
                🔐 Login
              </MobileNavLink>
              <MobileNavLink to="/register" isActive={isActive("/register")} onClick={() => setIsOpen(false)}>
                📝 Register
              </MobileNavLink>
              <div className="border-t border-white/20 my-2"></div>
              <MobileNavLink to="/dashboard" isActive={isActive("/dashboard")} onClick={() => setIsOpen(false)}>
                📊 Dashboard
              </MobileNavLink>
              <MobileNavLink to="/flights" isActive={isActive("/flights")} onClick={() => setIsOpen(false)}>
                ✈️ Flights
              </MobileNavLink>
              <MobileNavLink to="/tickets" isActive={isActive("/tickets")} onClick={() => setIsOpen(false)}>
                🎫 Tickets
              </MobileNavLink>
              <MobileNavLink to="/users" isActive={isActive("/users")} onClick={() => setIsOpen(false)}>
                👥 Users
              </MobileNavLink>
              <MobileNavLink to="/bookings" isActive={isActive("/bookings")} onClick={() => setIsOpen(false)}>
                📅 Bookings
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, isActive, children, compact = false }) => (
  <Link
    to={to}
    className={`rounded-lg transition duration-300 font-semibold whitespace-nowrap ${
      isActive
        ? "bg-white text-blue-600 shadow-lg px-3 sm:px-4 py-2"
        : "text-white hover:bg-white/20 px-3 sm:px-4 py-2"
    } ${compact ? "px-2 text-xs sm:text-sm py-2" : "text-sm sm:text-base"}`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, isActive, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-4 py-3 sm:py-4 rounded-lg transition duration-300 font-semibold text-base sm:text-lg min-h-12 sm:min-h-14 flex items-center ${
      isActive
        ? "bg-white/25 text-white border-l-4 border-white shadow-md"
        : "text-white hover:bg-white/20 border-l-4 border-transparent"
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
