// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./globals.css";
// import { Button } from './components/ui/button'
// import SignupForm from './SignupForm'
// import SignupForm from './components/SignupForm';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/Login";
import Flight from "./pages/Flight";
import UserProfile from "./pages/UserProfile";
import FlightList from "./pages/FlightList";
import Hotel from "./pages/Hotel";
import HotelList from "./pages/HotelList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel-list" element={<HotelList />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flight-list" element={<FlightList />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
