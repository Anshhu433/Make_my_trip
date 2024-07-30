import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { toast } from "react-hot-toast"; // Import the toast library

const HotelBookingForm = ({ hotel, onClose }) => {
  const { name, shortDescription, city, price } = hotel;
  const [hotelName, setHotelName] = useState(name);
  const [hotelDescription, setHotelDescription] = useState(shortDescription);
  const [hotelCity, setHotelCity] = useState(city);
  const [hotelPrice, setHotelPrice] = useState(price);
  const username = localStorage.getItem("username") || "";
  const token = localStorage.getItem("accessToken");
  const api = "https://make-my-trip-api-three.vercel.app";

  // State for loading and error handling
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const hotelData = {
      hotelName,
      hotelDescription,
      city: hotelCity,
      hotelPrice,
      username,
    };

    const toastId = toast.loading("Booking hotel..."); // Show loading toast

    try {
      const response = await fetch(api + "/api/user/bookHotel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(hotelData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong while booking the hotel.");
      }

      console.log("Success:", data);
      toast.success("Hotel booked successfully!"); // Show success toast
      onClose();
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      toast.error("Booking failed. Please try again."); // Show error toast
    } finally {
      setIsLoading(false);
      toast.dismiss(toastId); // Dismiss the loading toast
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Book Your Hotel</CardTitle>
        <CardDescription>Fill out the form to reserve your stay.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="hotel-name" className="text-left">Hotel Name</Label>
            <Input
              id="hotel-name"
              placeholder="Enter hotel name"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
              disabled
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="hotel-description" className="text-left">Hotel Description</Label>
            <Textarea
              id="hotel-description"
              placeholder="Describe the hotel"
              value={hotelDescription}
              onChange={(e) => setHotelDescription(e.target.value)}
              disabled
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="city" className="text-left">City</Label>
            <Input
              id="city"
              placeholder="Enter city"
              value={hotelCity}
              onChange={(e) => setHotelCity(e.target.value)}
              disabled
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price" className="text-left">Hotel Price</Label>
            <Input
              id="price"
              type="number"
              placeholder="Enter price"
              value={hotelPrice}
              onChange={(e) => setHotelPrice(e.target.value)}
              disabled
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username " className="text-left">Username</Label>
            <Input
              id="username"
              placeholder="Enter your username"
              value={username}
              disabled
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Booking..." : "Book Hotel"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default HotelBookingForm;
