import React, { useState } from "react";

// import SignupForm from '../components/SignupForm'
import Footer from "../components/Footer";
import { FaAngleDoubleDown } from "react-icons/fa";
import SignupForm from "../components/SignupForm";


function Login() {
  const [isLogin, setIsLogin] = useState(true);


  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex  items-center  inset-0 w-full gap-10 justify-start top-20 font-semibold z-0 flex-col">
    
         <SignupForm />
        
        <div className="   text-xl font-semibold uppercase flex gap-5">
          <FaAngleDoubleDown className="size-7 animate-bounce" />
          explore more
          <FaAngleDoubleDown className="size-7 animate-bounce" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
