import React from "react";
import { FaHotel } from "react-icons/fa6";
import HotelCard from "./HotelCard";

const UserHotel = ({ hotels }) => {
  return (
    <div className="w-full min-h-screen flex flex-wrap gap-5 justify-center items-center">
      {hotels.length > 0 ? (
        hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)
      ) : (
        <div className="flex flex-col items-center justify-center text-center text-gray-500">
          <FaHotel className="text-5xl mb-4" />
          <div className="text-xl font-semibold">No booked hotels</div>
        </div>
      )}
    </div>
  );
};

export default UserHotel;
