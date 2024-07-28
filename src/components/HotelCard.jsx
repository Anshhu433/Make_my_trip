import React from "react";
import { Card } from "@/components/ui/card";

const HotelCard = ({ hotel }) => {
  const username = localStorage.getItem("username");

  return (
    <div className="flex justify-center">
      <Card className="max-w-md w-full p-6 grid gap-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105">
        <div className="grid gap-2">
          <h3 className="text-2xl font-bold text-gray-900">{hotel.name}</h3>
          <p className="text-sm text-black font-extralight">{hotel.city}</p>
        </div>
        <div className="grid gap-4">
          <p className="text-gray-900 text-justify">{hotel.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">
              ₹ {hotel.price}{" "}
              <span className="text-sm text-gray-500 italic">per night</span>
            </span>
          </div>
        </div>
        {username === "mmtAdmin" && (
          <div className="text-lg font-medium text-gray-700 bg-gray-200 p-2 rounded-lg">
            User Reference: {hotel.userRef}
          </div>
        )}
      </Card>
    </div>
  );
};

export default HotelCard;
