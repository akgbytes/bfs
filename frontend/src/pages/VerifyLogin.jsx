import { ShopContext } from "@/context/ShopContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const VerifyLogin = () => {
  const [otp, setOtp] = useState("");

  const { token, setToken, navigate, backendUrl, currentState, mobile } =
    useContext(ShopContext);
  console.log("current state : ", currentState);
  console.log("mobile : ", mobile);
  console.log("current otp : ", otp);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(
          backendUrl + "/api/user/verify-register",
          { mobile: "+91" + mobile, otp }
        );
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(
          backendUrl + "/api/user/verify-login",
          { mobile: "+91" + mobile, otp }
        );
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <p className="text-3xl">Enter OTP</p>

      <input
        onChange={(e) => setOtp(e.target.value)}
        value={otp}
        type="text"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Enter OTP"
        required
      />

      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        Verify OTP
      </button>
    </form>
  );
};

export default VerifyLogin;
