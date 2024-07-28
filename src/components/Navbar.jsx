import React from "react";

import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { LogOutIcon } from "lucide-react";

const Navbar = () => {
  let username = localStorage.getItem("username");
  let view = Boolean(username);
  const navigate = useNavigate();

  function logoutHandler() {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  }

  return (
    <div className="w-full ">
      {/* <div className="top-0 fixed left-0 w-full  bg-slate-400 text-white z-10">
        <img
          src="/static/images/bg3.jpg"
          className="h-4/5 bg-cover bg-center absolute w-full top-0 -z-10"
        />
        <div className="flex max-h-16 items-center justify-between p-1 px-10 text-xs ">
          <Link to={"/flight"}>
            <img
              src="static\images\mmt_dt_top_icon.avif"
              alt="logo"
              className="h-full w-44 object-contain hover:cursor-pointer"
            />
          </Link>
          <div className="flex gap-3">
            {view && (
              <div className="flex items-center">
                <Link to={"/profile"}>
                  <button className="flex h-full items-center gap-1 rounded-md text-center shadow-lg ">
                    <FaUserAstronaut className="h-full w-9 fill-white transition-colors ease-in-out duration-200 hover:fill-blue-500" />
                  </button>
                </Link>
                <div className="flex h-full items-center gap-1 rounded-md bg-gradient-to-r px-4 py-4 text-center text-sm font-semibold shadow-lg">
                  Welcome
                  <span className="font-bold text-slate-600">{username}</span>
                </div>
                <div
                  className="flex items-center gap-1 text-sm font-bold  hover:text-red-400 transition-colors duration-200 ease-in-out hover:cursor-pointer"
                  onClick={logoutHandler}
                >
                  Logout <IoMdLogOut className="size-6" />
                </div>
              </div>
            )}
            <div>
              <button className="flex h-full items-center gap-1 rounded-md bg-white bg-opacity-10 px-4 py-3 font-bold shadow-lg">
                <img
                  src="static\images\india.svg"
                  alt="india"
                  className="w-5"
                />
                <span className="font-bold">IN | ENG | INR</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <header className="flex bg-black h-16 w-full items-center justify-between bg-background px-4 md:px-6">
        <Link to={"/"}>
          <img
            src="static\images\mmt_dt_top_icon.avif"
            alt="logo"
            className="h-full w-44 object-contain hover:cursor-pointer"
          />
        </Link>
        {/* <span className="text-lg font-semibold">Acme Inc</span> */}

        <div className="flex items-center text-white gap-4">
          <div className="hidden sm:flex items-center gap-1 text-sm font-medium">
            <span>Welcome,</span>
            <span className="font-bold">{username || "Guest"}</span>
          </div>
          <Link to="/profile">
            <Button variant="primary" size="icon" className="rounded-full">
              <CgProfile className="h-5 w-5 text-white" />
            </Button>
          </Link>
          {username ? (
            <Button
              variant="primary"
              size="icon"
              className="rounded-full"
              onClick={logoutHandler}
            >
              <LogOutIcon className="h-5 w-5 text-white" />
            </Button>
          ) : (
            <Button
              variant="primary"
              size="icon"
              className="rounded-full "
              onClick={logoutHandler}
            >
              <CiLogout className="h-5 w-5  text-white" />
            </Button>
          )}
        </div>
      </header>
    </div>
  );
};

("useMemo()");
export default Navbar;
