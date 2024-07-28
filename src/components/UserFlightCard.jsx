import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { Card } from "@/components/ui/card";
import { LiaRupeeSignSolid } from "react-icons/lia";

const UserFlightCard = ({ flight }) => {
  const username = localStorage.getItem("username");

  // Parse the flight date
  const flightDate = new Date(flight.date);

  // Format the date and time
  const formattedDate = flightDate.toLocaleDateString("en-US", {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const formattedTime = flightDate.toLocaleTimeString("en-US", {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Card className="w-full max-w-md p-6 grid gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-semibold">{flight.airline}</h3>
        </div>
        <div className="text-sm bg-primary px-2 py-1 flex items-center justify-center rounded-md text-primary-foreground">
          <LiaRupeeSignSolid />
          {flight.price}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 items-center">
          <div className="text-sm text-muted-foreground">Departure</div>
          <div className="flex items-center gap-2 ">
            <div className="text-2xl font-medium">{flight.from}</div>
          </div>
          <div>{formattedTime}</div>
          <div className="text-sm text-muted-foreground">
            {formattedDate}  
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="text-sm text-muted-foreground">Arrival</div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-medium">{flight.to}</div>
          </div>
          <div>{formattedTime}</div>
          <div className="text-sm text-muted-foreground">
            {formattedDate} 
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Duration: {flight.duration} hours
        </div>
      </div>
    </Card>
  );
};

export default UserFlightCard;
