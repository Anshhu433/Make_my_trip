import React from "react";
import { FaPlaneSlash } from "react-icons/fa";
import UserFlightCard from "./UserFlightCard";

const UserFlight = ({ flight }) => {
  return (
    <div className="w-full min-h-screen flex flex-wrap gap-5 justify-center items-center">
      {flight.length > 0 ? (
        flight.map((flight) => (
          <UserFlightCard key={flight._id} flight={flight} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center text-center text-gray-500">
          <FaPlaneSlash className="text-5xl mb-4" />
          <div className="text-xl font-semibold">No booked flights</div>
        </div>
      )}
    </div>
  );
};

export default UserFlight;
