import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "react-hot-toast";

function CalendarDaysIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

const FlightBookingForm = ({ flight, onClose }) => {
  const { flightName, from, to, price, duration } = flight;
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");
  const api = "https://mmt-backend-tawny.vercel.app";

  const [formData, setFormData] = useState({
    airlineName: flightName || "",
    from: from || "",
    to: to || "",
    duration: duration || "",
    price: price || "",
    username: username || "Guest",
  });
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleDateChange = (selectedDate) => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      newDate.setDate(newDate.getDate() + 1); // Add one day
      const formattedDate = newDate.toISOString().split("T")[0];
      setDate(formattedDate);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!date) {
      toast.error("Please select a date for booking.");
      return;
    }

    console.log("The data is: ", formData);

    const dateObj = new Date(date);
    const formattedDate = `${dateObj.getFullYear()}/${String(
      dateObj.getMonth() + 1
    ).padStart(2, "0")}/${String(dateObj.getDate()).padStart(2, "0")}`;

    const flightData = {
      ...formData,
      date: formattedDate,
    };

    console.log("flight data : ", flightData);

    const toastId = toast.loading("Loading...");

    fetch(api + "/api/user/bookFlight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(flightData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to book the flight.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        toast.success("Flight booked successfully");
        onClose();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(
          "There was an error booking the flight. Please try again later."
        );
      })
      .finally(() => {
        toast.dismiss(toastId);
      });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Book Your Flight</CardTitle>
        <CardDescription>Fill out the form to book your trip.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="flightName" className="text-left">
              Airline Name
            </Label>
            <Input
              id="flightName"
              value={formData.airlineName}
              onChange={handleInputChange}
              placeholder="Enter airline name"
              disabled
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="from" className="text-left">
                From
              </Label>
              <Input
                id="from"
                value={formData.from}
                onChange={handleInputChange}
                placeholder="Departure city"
                disabled
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="to" className="text-left">
                To
              </Label>
              <Input
                id="to"
                value={formData.to}
                onChange={handleInputChange}
                placeholder="Arrival city"
                disabled
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="duration" className="text-left">
              Duration (hours)
            </Label>
            <Input
              id="duration"
              value={formData.duration}
              onChange={handleInputChange}
              type="text"
              disabled
              placeholder="Enter duration"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date" className="text-left">
              Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start font-normal"
                >
                  <CalendarDaysIcon className="mr-2 h-4 w-4" />
                  {date ? date : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date ? new Date(date) : undefined}
                  onSelect={handleDateChange}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price" className="text-left">
              Price (₹)
            </Label>
            <Input
              id="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Price"
              disabled
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username" className="text-left">
              Username
            </Label>
            <Input
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              disabled
            />
          </div>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Booking..." : "Book Flight"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default FlightBookingForm;
