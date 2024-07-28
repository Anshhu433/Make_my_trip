import React, { useState } from "react";
import Rating from "./Rating";
import Modal from "./Modal";
import HotelBookingForm from "./HotelBookingForm";
import { Button } from "@/components/ui/button"

const HotelDetail = ({ hotel }) => {
  const { name, hotelRating, thumbNailUrl, price } = hotel;
  const [open, isOpen] = useState(false);
  function onClose() {
    isOpen((old) => !old);
  }
  function onOpen() {
    isOpen((old) => !old);
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <HotelBookingForm hotel={hotel} onClose={onClose} />
      </Modal>
      
    <div className="w-full bg-card rounded-lg py-16 overflow-hidden shadow-lg">
      <div className="grid md:grid-cols-[300px_1fr] gap-4 md:gap-8 items-center">
        <img
          src={thumbNailUrl}
          width={300}
          height={200}
          alt="Hotel Image"
          className="object-cover rounded-xl w-full aspect-[3/2]"
        />
        <div className="p-4 md:p-6 space-y-6">
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-7 items-center justify-between">
            <h3 className="text-xl font-semibold">{name}</h3>
            <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon
                key={index}
                className={`w-5 h-5 ${
                  index < hotelRating ? "fill-primary" : "fill-muted stroke-muted-foreground"
                }`}
              />
            ))}
          </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">₹{price} / night</p>
            <Button onClick={onOpen} size="lg">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  
    </>
  );
};

function StarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }

export default HotelDetail;
