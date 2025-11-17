# ✈️ Airport Management System

A modern airport management system built with **React**, **Vite**, and **Tailwind CSS**. Manage flights, users, tickets, and bookings with CRUD operations.

## ✅ Acceptance Criteria - Verified

- ✅ **No Runtime Errors** - App runs smoothly without errors
- ✅ **CRUD Operations** - Full User and Ticket management (Create, Read, Update, Delete)
- ✅ **Context API** - All state managed through Context API (AuthContext, UserContext, TicketContext)
- ✅ **Booking Interlink** - Users linked to tickets through bookings
- ✅ **Splash Screen** - Implemented with route to app
- ✅ **Responsive Layout** - Mobile and desktop verified
- ✅ **README Provided** - Setup and explanation included

## � Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── Alert.jsx       # Notifications
│   ├── Button.jsx      # Custom buttons
│   ├── Card.jsx        # Card wrapper
│   ├── Input.jsx       # Input fields
│   ├── Modal.jsx       # Modal dialogs
│   ├── Navbar.jsx      # Navigation bar
│   ├── PageLayout.jsx  # Page wrapper
│   └── Spinner.jsx     # Loading spinner
│
├── context/            # React Context API
│   ├── AuthContext.jsx    # Authentication
│   ├── UserContext.jsx    # User data
│   └── TicketContext.jsx  # Ticket data
│
├── pages/             # Page components
│   ├── Splash.jsx     # Splash screen
│   ├── Login.jsx      # Login page
│   ├── Register.jsx   # Register page
│   ├── Dashboard.jsx  # Main dashboard
│   ├── Users.jsx      # User management
│   ├── Flights.jsx    # Flight list
│   ├── Tickets.jsx    # Ticket management
│   └── Bookings.jsx   # Booking management
│
├── routes/            # React Router
│   └── AppRoutes.jsx
│
├── styles/            # Global styles
│   └── global.css
│
├── App.jsx           # Root component
└── main.jsx          # Entry point
```

## 🎯 Features

### User Management (CRUD)
- Create, Read, Update, Delete users
- Assign user roles
- User data via Context API

### Ticket Management (CRUD)
- Create flights/tickets
- Edit flight information (name, time, gate, status)
- Delete tickets
- View all flights

### Bookings
- Create bookings by linking users to flights
- View booking details
- Cancel bookings
- User-Flight interlink

### Authentication
- Splash screen with app entry
- Login & Register functionality
- Session management via Context

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.1+ | Frontend framework |
| Vite | 7.1+ | Build tool |
| Tailwind CSS | 3.4+ | Styling |
| React Router | 7.9+ | Routing |
| React Context | Built-in | State management |

## � State Management

All data flows through **React Context API** (no props drilling):

```
AuthContext     → Authentication state
UserContext     → User CRUD operations
TicketContext   → Ticket/Flight CRUD operations
```

## 📱 Responsive Design

- **Mobile** (< 640px) - Full responsive layout
- **Tablet** (640px - 1024px) - Optimized layout
- **Desktop** (> 1024px) - Full features

## 💾 Data Storage

- **localStorage** - Persistent data storage
- No backend required
- Perfect for development/demo

## 🔧 Configuration

- **Vite Config**: `vite.config.js`
- **Tailwind Config**: `tailwind.config.js`
- **PostCSS Config**: `postcss.config.js`
- **ESLint Config**: `eslint.config.js`

## 📧 Contact & Credits

**Founder & CEO**: Usama Aslam — ceo@usama-aslam.com
**Senior Project Manager**: Minahil Hasan — project.manager@minahil-hasan.info
**Official Email**: udevsofficial25@gmail.com

**Websites**:
- www.udev-hub.com
- www.usama-aslam.com
- www.minahil-hasan.info

## 📝 License

Project created for educational purposes
