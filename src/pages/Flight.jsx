import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FaAngleDoubleDown } from "react-icons/fa";
import Footer from "../components/Footer";

const Flight = () => {
  const [airports, setAirports] = useState([]);
  const [departure, setDeparture] = useState("2024-07-09");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [classType, setClassType] = useState("Economy/Premium Economy");

  useEffect(() => {
    // Fetch the JSON data
    fetch("/airports.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("this is airport data : ",data);
      setAirports(data);
    })
    .catch((error) => console.error("Error fetching airport data:", error));
}, []);

  
  return (
    <div className=" flex flex-col gap-16 items-center">
      <div className="  flex flex-col w-full justify-center">
      

<div className="w-full max-w-4xl mx-auto py-16 px-4 md:px-6">
      <Tabs defaultValue="flights" className="w-full space-y-6">
        <TabsList className="grid grid-cols-2 gap-2">
          <TabsTrigger value="flights">Flights</TabsTrigger>
          <TabsTrigger value="hotels">Hotels</TabsTrigger>
        </TabsList>
        <TabsContent value="flights">
          <div className="grid gap-10">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="from">From</Label>
                <Input id="from" placeholder="Enter departure city" />
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="to">To</Label>
                <Input id="to" placeholder="Enter arrival city" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="departure-date">Departure Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="flex-col items-start w-full h-auto">
                      <span className="font-semibold uppercase text-[0.65rem]">Departure</span>
                      <span className="font-normal">4/2/2024</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 max-w-[276px]">
                    <Calendar />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="return-date">Return Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="flex-col items-start w-full h-auto">
                      <span className="font-semibold uppercase text-[0.65rem]">Return</span>
                      <span className="font-normal">10/2/2024</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 max-w-[276px]">
                    <Calendar />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="travelers">Travelers</Label>
                <Select>
                  <SelectTrigger className="h-auto">
                    <SelectValue
                      placeholder={
                        <div className="flex flex-col items-start">
                          <span className="font-semibold uppercase text-[0.65rem]">Travelers</span>
                          <span className="font-normal">2 adults</span>
                        </div>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 adult</SelectItem>
                    <SelectItem value="2">2 adults</SelectItem>
                    <SelectItem value="3">2 adults + 1 child</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="class">Class</Label>
                <Select>
                  <SelectTrigger className="h-auto">
                    <SelectValue
                      placeholder={
                        <div className="flex flex-col items-start">
                          <span className="font-semibold uppercase text-[0.65rem]">Class</span>
                          <span className="font-normal">Economy</span>
                        </div>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="first">First Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="flight-type">Flight Type</Label>
              <RadioGroup>
                <div className="flex items-center gap-4">
                  <RadioGroupItem value="one-way" id="one-way" />
                  <Label htmlFor="one-way">One-Way</Label>
                  <RadioGroupItem value="round-trip" id="round-trip" />
                  <Label htmlFor="round-trip">Round-Trip</Label>
                </div>
              </RadioGroup>
            </div>
            <Button size="lg" className="w-full">
              Search Flights
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="hotels">
          <div className="grid gap-10">
            <div className="space-y-2 flex flex-col items-start">
              <Label htmlFor="city">City Location</Label>
              <Input id="city" placeholder="Enter city" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="check-in">Check-in Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="flex-col items-start w-full h-auto">
                      <span className="font-semibold uppercase text-[0.65rem]">Check-in</span>
                      <span className="font-normal">4/2/2024</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 max-w-[276px]">
                    <Calendar />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="check-out">Check-out Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="flex-col items-start w-full h-auto">
                      <span className="font-semibold uppercase text-[0.65rem]">Check-out</span>
                      <span className="font-normal">10/2/2024</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 max-w-[276px]">
                    <Calendar />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="rooms">Rooms</Label>
                <Select>
                  <SelectTrigger className="h-auto">
                    <SelectValue
                      placeholder={
                        <div className="flex flex-col items-start">
                          <span className="font-semibold uppercase text-[0.65rem]">Rooms</span>
                          <span className="font-normal">1 room</span>
                        </div>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 room</SelectItem>
                    <SelectItem value="2">2 rooms</SelectItem>
                    <SelectItem value="3">3 rooms</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="guests">Guests</Label>
                <Select>
                  <SelectTrigger className="h-auto">
                    <SelectValue
                      placeholder={
                        <div className="flex flex-col items-start">
                          <span className="font-semibold uppercase text-[0.65rem]">Guests</span>
                          <span className="font-normal">2 guests</span>
                        </div>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 guest</SelectItem>
                    <SelectItem value="2">2 guests</SelectItem>
                    <SelectItem value="3">3 guests</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <Label htmlFor="price">Price per Night</Label>
              <Input id="price" type="number" placeholder="Enter price" />
            </div>
            <Button size="lg" className="w-full">
              Search Hotels
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>

      </div>
      <div className="  flex w-full justify-center">
        <Link to={"/flight-list"}>
          <button className="rounded-full bg-gradient-to-r from-blue-400 to-blue-600 px-16 py-2 text-2xl font-bold uppercase text-white">
            Search
          </button>
        </Link>
      </div>
    
      <div className="  text-xl font-semibold uppercase flex gap-5">
          <FaAngleDoubleDown className="size-7 animate-bounce" />
          explore more
          <FaAngleDoubleDown className="size-7 animate-bounce" />
        </div>

        <Footer/>

    </div>
  );
};

export default Flight;
