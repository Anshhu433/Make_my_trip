import React, { useEffect, useState } from "react";
import UserFlight from "../components/UserFlight";
import UserHotel from "../components/UserHotel";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Footer from "../components/Footer";

const UserProfile = () => {
  const username = localStorage.getItem("username");
  const [isLogin, setIsLogin] = useState(true);
  const [userFlight, setUserFlight] = useState([]);
  const [adminFlight, setAdminFlight] = useState([]);
  const [userHotels, setUserHotels] = useState([]);
  const [adminHotels, setAdminHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Manage loading state
  const [fetchError, setFetchError] = useState(null); // Manage error state
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");
  const api = "http://localhost:8001";

  // Redirect to login if no token
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // Toggle between flight and hotel views
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Function to fetch all necessary data
  const fetchData = async () => {
    setIsLoading(true); // Start loading
    const toastId = toast.loading("Loading data..."); // Show loading toast

    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const fetchPromises = [];

      // Fetch user flights
      fetchPromises.push(
        fetch(
          `${api}/api/user/bookedFlightList?username=${username}`,
          requestOptions
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `Error fetching flight data! Status: ${response.status}`
              );
            }
            return response.json();
          })
          .then((data) => {
            setUserFlight(data.bookedFlightListData);
          })
      );

      // Fetch admin flights
      fetchPromises.push(
        fetch(`${api}/api/admin/allBookedFlightsList`, requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `Error fetching admin flight data! Status: ${response.status}`
              );
            }
            return response.json();
          })
          .then((data) => {
            setAdminFlight(data.allBookedFlightsListData);
          })
      );

      // Fetch user hotels
      fetchPromises.push(
        fetch(
          `${api}/api/user/bookedHotelList?username=${username}`,
          requestOptions
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `Error fetching hotel data! Status: ${response.status}`
              );
            }
            return response.json();
          })
          .then((data) => {
            setUserHotels(data.bookedHotelListData);
          })
      );

      // Fetch admin hotels
      fetchPromises.push(
        fetch(`${api}/api/admin/allBookedHotelsList`, requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `Error fetching admin hotel data! Status: ${response.status}`
              );
            }
            return response.json();
          })
          .then((data) => {
            setAdminHotels(data.allBookedHotelListData);
          })
      );

      // Wait for all fetch operations to complete
      await Promise.all(fetchPromises);

      // Successfully fetched all data
      toast.dismiss(toastId); // Dismiss loading toast
      toast.success("All data loaded successfully!"); // Show success toast
      setFetchError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetchError(error.message); // Set error state
      toast.dismiss(toastId); // Dismiss loading toast
      toast.error(`You are not logged in`); // Show error toast
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  // Effect to fetch data on component mount
  useEffect(() => {
    fetchData();
    console.log("this is it");
  }, [username]);

  return (
    <div>
      <div className="flex w-full gap-4 bg-white h-full justify-center">
        <div className="w-full p-6 rounded-lg flex flex-col">
          <div className="flex justify-between mb-16 text-black w-full sm:w-96 self-center">
            <button
              onClick={toggleForm}
              className={`w-full py-2 ${
                isLogin
                  ? "bg-slate-500 text-white font-semibold"
                  : "bg-gray-700"
              } rounded-l-lg text-white`}
            >
              {username === "mmtAdmin"
                ? "Flight Booked Detail"
                : "Flight Detail"}
            </button>
            <button
              onClick={toggleForm}
              className={`w-full py-2 ${
                !isLogin
                  ? "bg-slate-500 text-white font-semibold"
                  : "bg-gray-700"
              } rounded-r-lg text-white`}
            >
              {username === "mmtAdmin" ? "Hotel Booked Detail" : "Hotel Detail"}
            </button>
          </div>

          {isLogin ? (
            <UserFlight
              flight={username === "mmtAdmin" ? adminFlight : userFlight}
            />
          ) : (
            <UserHotel
              hotels={username === "mmtAdmin" ? adminHotels : userHotels}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
