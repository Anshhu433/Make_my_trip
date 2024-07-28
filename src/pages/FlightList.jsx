import React, { useEffect, useState } from "react";
import FlightCard from "../components/FlightCard";
import Footer from "../components/Footer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IoIosArrowDown } from "react-icons/io";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const FlightList = () => {
  const [airports, setAirports] = useState([]);
  const [departure, setDeparture] = useState("2024-07-09");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [classType, setClassType] = useState("Economy/Premium Economy");
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [priceRange, setPriceRange] = useState(""); // State for selected price range

  useEffect(() => {
    fetch("/airports.json")
      .then((response) => response.json())
      .then((data) => {
        setAirports(data);
      })
      .catch((error) => console.error("Error fetching airport data:", error));
  }, []);

  useEffect(() => {
    fetch("/flights.json")
      .then((response) => response.json())
      .then((data) => {
        setFlights(data);
        setFilteredFlights(data);
      })
      .catch((error) => console.error("Error fetching flight data:", error));
  }, []);

  useEffect(() => {
    if (priceRange === "") {
      setFilteredFlights(flights);
    } else {
      const [min, max] = priceRange.split("-").map(Number);
      setFilteredFlights(
        flights.filter((flight) => {
          const price = flight.price; // Adjust according to your data structure
          return (isNaN(min) || price >= min) && (isNaN(max) || price <= max);
        })
      );
    }
  }, [priceRange, flights]);

  return (
    <div className="w-full mt-10">
      <div className="flex justify-start pl-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-[200px] justify-between">
              <span>Select Price Range</span>
              <IoIosArrowDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuLabel>Price Range</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setPriceRange("")}>All</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPriceRange("0-1000")}>Below ₹1000</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPriceRange("1000-3000")}>₹1000 - ₹3000</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPriceRange("3000-5000")}>₹3000 - ₹5000</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPriceRange("5000-10000")}>₹5000 - ₹10000</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPriceRange("10000-")}>Above ₹10000</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex w-full pt-0 gap-4 bg-white">
        <div className="flex w-full mx-auto flex-col gap-4">
          <div className="w-full max-w-4xl mx-auto py-16 px-4 md:px-6">
            <Tabs defaultValue="flights" className="w-full space-y-10">
              <TabsList className="grid grid-cols-1 ">
                <div value="flights">Flights</div>
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
                  <div className="space-y-2 flex flex-col items-start">
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
            </Tabs>
          </div>
          <div className="flex flex-col gap-2 rounded bg-gray-100 p-4">
            {filteredFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FlightList;
