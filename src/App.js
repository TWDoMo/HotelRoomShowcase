import React from "react";
import Navbar from "./Navbar";
import HotelRoomShowcase from "./HotelRoomShowcase";
import BookingForm from "./BookingForm";

function App() {
  return (
    <>
      <Navbar />
      <div id="rooms">
        <HotelRoomShowcase />
      </div>
      <BookingForm />
    </>
  );
}

export default App;
