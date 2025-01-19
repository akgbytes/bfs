import React from "react";

const Navbar = ({ setToken }) =>
  //
  {
    return (
      <div className="flex items-center py-2 px-[4%] justify-between">
        <img className="w-[max(3%,50px)]" src="Logo.svg" alt="logo" />
        <button
          onClick={() => setToken("")}
          className="bg-green-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
        >
          Logout
        </button>
      </div>
    );
  };

export default Navbar;
