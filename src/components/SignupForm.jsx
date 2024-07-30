import { useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Importing toast

const url = "https://make-my-trip-api-three.vercel.app";

export default function SignupForm() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define submit handler for the form
  const onSubmit = async (formData) => {
    console.log(formData);
    const toastId = toast.loading("Signing up..."); // Start loading toast
    try {
      const res = await axios.post(url + "/api/auth/register", formData);
      const { success, message } = res.data; // Extract success and message from res.data
      console.log(res);

      if (!success) {
        toast.error(message || "Sign up failed", { id: toastId }); // Show error toast
        return;
      }

      toast.success("Sign up successful!", { id: toastId }); // Show success toast
      setIsSignUp(false); // Switch to login form after successful sign-up
    } catch (error) {
      console.log("error is :", error);
      toast.error("Sign up error: " + error.message, { id: toastId }); // Show error toast
    }
  };

  const handleLogin = async (formData) => {
    console.log("Login data:", formData);
    const endPoint = formData.admin
      ? "/api/auth/adminLogin"
      : "/api/auth/userLogin";

    const toastId = toast.loading("Logging in..."); // Start loading toast
    try {
      const result = await axios.post(url + endPoint, formData);

      const { success, message, accessToken, userData } = result.data;

      console.log("this is result :", result.data);

      if (!success) {
        toast.error(message || "Login failed", { id: toastId }); // Show error toast
        return;
      }

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("username", userData.username);

      toast.success("Login successful!", { id: toastId }); // Show success toast
      navigate(formData.admin ? "/profile" : "/");

      window.location.reload();
    } catch (error) {
      console.log("Login error:", error);
      toast.error("Login error: " + error.message, { id: toastId }); // Show error toast
    }
  };

  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md rounded-md bg-card p-6 shadow-lg">
        {isSignUp ? (
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-muted-foreground">
                Enter your details to create an account.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 ">
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="jdoe"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="contact">Contact</Label>
                <Input
                  id="contact"
                  type="tel"
                  placeholder="+1 (555) 555-5555"
                  {...register("contact")}
                />
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Log In</h1>
              <p className="text-muted-foreground">
                Enter your email and password to access your account.
              </p>
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {/* <input type="checkbox" id="admin" {...register("admin")} /> */}
                {/* <Label htmlFor="admin" className="text-sm">
                  Admin
                </Label> */}
              </div>
              <Button type="submit" className="w-full">
                Log In
              </Button>
            </form>
          </div>
        )}
        <div className="mt-6 text-center text-sm">
          <p className="text-muted-foreground">
            {isSignUp
              ? "Already have an account?"
              : "Don't have an account yet?"}
            <button
              type="button"
              className="ml-1 font-medium text-black hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Log in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
