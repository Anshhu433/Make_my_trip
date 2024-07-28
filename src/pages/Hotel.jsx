import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Footer from "../components/Footer";

const Hotel = () => {
  const [city, setCity] = useState("Goa");
  const [location, setLocation] = useState("India");
  const [checkIn, setCheckIn] = useState("2024-07-09");
  const [checkOut, setCheckOut] = useState("2024-07-10");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [priceRange, setPriceRange] = useState("₹0-₹1500, ₹1500-₹2500");

  // List of countries for the dropdown
  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Australia",
    "Canada",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "China",
    "Japan",
    "Brazil",
    "Russia",
    "Mexico",
    "South Africa",
  ];

  return (
    <div className="w-full py-10">
      <Card className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 space-y-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Find Your Perfect Stay</CardTitle>
          <CardDescription>Enter your travel details to search for accommodations.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 flex flex-col items-start">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="space-y-2 flex flex-col items-start">
                  <Label htmlFor="location">Location</Label>
                  <Select
                    value={location}
                    onValueChange={(value) => setLocation(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 flex flex-col items-start">
                  <Label htmlFor="check-in">Check-in</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="check-in"
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                        {checkIn ? (
                          new Date(checkIn).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })
                        ) : (
                          "Select date"
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={new Date(checkIn)}
                        onSelect={(date) =>
                          setCheckIn(date.toISOString().split("T")[0])
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2 flex flex-col items-start">
                  <Label htmlFor="check-out">Check-out</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="check-out"
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                        {checkOut ? (
                          new Date(checkOut).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })
                        ) : (
                          "Select date"
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={new Date(checkOut)}
                        onSelect={(date) =>
                          setCheckOut(date.toISOString().split("T")[0])
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 flex flex-col items-start">
                  <Label htmlFor="rooms">Rooms</Label>
                  <Input
                    id="rooms"
                    type="number"
                    placeholder="1"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                  />
                </div>
                <div className="space-y-2 flex flex-col items-start">
                  <Label htmlFor="guests">Guests</Label>
                  <Input
                    id="guests"
                    type="number"
                    placeholder="2"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4 flex flex-col gap-4">
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="price">Price per night</Label>
                <Select
                  id="price"
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="₹0-₹1500">₹0 - ₹1,500</SelectItem>
                    <SelectItem value="₹1500-₹2500">₹1,500 - ₹2,500</SelectItem>
                    <SelectItem value="₹2500-₹3500">₹2,500 - ₹3,500</SelectItem>
                    <SelectItem value="₹3500-₹4500">₹3,500 - ₹4,500</SelectItem>
                    <SelectItem value="₹4500+">₹4,500+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Link to={"/hotel-list"}>
                <Button type="submit" className="w-full">
                  Search
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>

      <Footer/>
    </div>
  );
};

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

export default Hotel;
