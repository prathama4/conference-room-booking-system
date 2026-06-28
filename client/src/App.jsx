import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import BookingHistory from "./pages/BookingHistory";
import Calendar from "./pages/Calendar";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import ChatbotPage from "./pages/ChatbotPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminBookings from "./pages/AdminBookings";
import AdminChats from "./pages/AdminChats";
import Analytics from "./pages/Analytics";
import Pantry from "./pages/Pantry";
import Stationery from "./pages/Stationery";
import GuestNetwork from "./pages/GuestNetwork";
import Recording from "./pages/Recording";
import Transcript from "./pages/Transcript";
import Settings from "./pages/Settings";
import BookingPage from "./pages/BookingPage";
import RoomAvailability from "./pages/RoomAvailability";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
  path="/booking-history"
  element={<BookingHistory />}
/>
<Route path="/calendar" element={<Calendar />} />
<Route
  path="/notifications"
  element={<Notifications />}
/>
<Route path="/profile" element={<Profile />} />
<Route path="/chatbot" element={<ChatbotPage />} />
<Route path="/admin" element={<AdminDashboard />} />
<Route path="/admin/users" element={<AdminUsers />} />
<Route path="/admin/bookings" element={<AdminBookings />} />
<Route path="/admin/chats" element={<AdminChats />} />
<Route path="/analytics" element={<Analytics />} />
<Route path="/pantry" element={<Pantry />} />
<Route path="/stationery" element={<Stationery />} />
<Route path="/guest-network" element={<GuestNetwork />} />
<Route path="/recording" element={<Recording />} />
<Route path="/transcript" element={<Transcript />} />
<Route path="/settings" element={<Settings />} />
<Route path="/booking" element={<BookingPage />} />
<Route path="/room-availability" element={<RoomAvailability />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;