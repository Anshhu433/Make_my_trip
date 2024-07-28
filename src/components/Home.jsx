import React, { useEffect, useState } from "react";
import { MdOutlineFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import HomeCard from "./HomeCard";
import Footer from "./Footer";
import { FaAngleDoubleDown } from "react-icons/fa";
import FlightCard from "./FlightCard";

const Home = () => {
  // const [formData, setFormData] = useState([]);
  // const navigate = useNavigate();

  // const username = localStorage.getItem("username");

  const [formData, setFormData] = useState([]);
  const [flighdata, setFlighData] = useState([]);

  const username = localStorage.getItem("username");

  useEffect(() => {
    fetch("/hotels.json")
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
        console.log("form data :", formData);
      })
      .catch((error) => console.error("Error fetching hotel data:", error));
  }, []);

  useEffect(() => {
    fetch("/flights.json")
      .then((response) => response.json())
      .then((data) => {
        setFlighData(data);
      })
      .catch((error) => console.error("Error fetching flight data:", error));
  }, []);

  return (
    <>
      <div className=" inset-0 top-1/4 flex w-full justify-center">
        <div className="text-l flex h-28 items-center justify-center gap-7 rounded-xl border border-white bg-white px-7 font-bold text-black shadow-inner">
          <NavLink
            to={"/flight"}
            className={({ isActive }) =>
              isActive
                ? `flex h-full w-20 flex-col items-center justify-center border-b-4 border-blue-700 text-blue-700`
                : "flex h-full w-20 flex-col items-center justify-center gap-1 transition-all duration-100 ease-in-out hover:border-b-4 hover:border-blue-700 hover:text-blue-700"
            }
          >
            <MdOutlineFlight className="size-12 text-gray-500" />
            Flight
          </NavLink>

          <NavLink
            to={"/hotel"}
            className={({ isActive }) =>
              isActive
                ? `flex h-full w-20 flex-col items-center justify-center border-b-4 border-blue-700 text-blue-700`
                : "flex h-full w-20 flex-col items-center justify-center gap-1 transition-all duration-100 ease-in-out hover:border-b-4 hover:border-blue-700 hover:text-blue-700"
            }
          >
            <FaHotel className="size-12 text-gray-500" />
            Hotels
          </NavLink>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-20 pt-10 space-y-10">
        <h2 className="text-left text-2xl sm:text-3xl font-bold">
          Explore our hotels
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {formData.map((hotel) => (
            <div key={hotel._id}>
              <HomeCard key={hotel.id} hotel={hotel} />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5 p-20">
        <h2 className="text-2xl font-bold text-left sm:text-3xl ">
          Explore our Flights
        </h2>
        <div className="flex flex-col gap-2 rounded bg-gray-100 ">
          {flighdata.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      </div>

      <main className="flex-1 bg-black text-white">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
            <div className="flex flex-col items-center gap-4">
              <BrushIcon className="h-12 w-12 text-white text-primary" />
              <h3 className="text-xl font-bold">Design Tools</h3>
              <p className="text-center text-muted-foreground">
                Unleash your creativity with our powerful design tools. Create
                stunning visuals with ease.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <CodeIcon className="h-12 w-12 text-white text-primary" />
              <h3 className="text-xl font-bold">Development Services</h3>
              <p className="text-center text-muted-foreground">
                Bring your ideas to life with our expert development services.
                We'll handle the technical details.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <RocketIcon className="h-12 w-12 text-white text-primary" />
              <h3 className="text-xl font-bold">Launch Support</h3>
              <p className="text-center text-muted-foreground">
                Get the support you need to successfully launch your project.
                We\'ll be with you every step of the way.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">
                Experience the Difference
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of experts is dedicated to helping you achieve your
                goals. Let us guide you through the process.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* <Outlet></Outlet> */}
    </>
  );
};

export default Home;

function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
function BrushIcon(props) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}
