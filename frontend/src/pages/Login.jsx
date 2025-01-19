import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const {
    navigate,
    backendUrl,
    currentState,
    setCurrentState,
    user,
    setUser,
    mobile,
    setMobile,
    token,
  } = useContext(ShopContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          user,
          mobile: "+91" + mobile,
        });

        if (response.data.success) {
          navigate("/verify-login");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          mobile: "+91" + mobile,
        });

        if (response.data.success) {
          navigate("/verify-login");
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
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setUser(e.target.value)}
          value={user}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Username"
          required
        />
      )}
      <input
        onChange={(e) => setMobile(e.target.value)}
        value={mobile}
        type="text"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Mobile Number"
        required
      />

      <div className="w-full flex justify-end text-sm mt-[-8px]">
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className=" cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className=" cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
