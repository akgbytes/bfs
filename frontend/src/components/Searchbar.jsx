import { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { SearchIcon, X } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        {/* <img className="w-4" src={assets.search_icon} alt="" /> */}
        <SearchIcon className="w-4" />
      </div>
      <X
        onClick={() => setShowSearch(false)}
        className="inline w-6 cursor-pointer opacity-50"
      />
    </div>
  ) : null;
};

export default Searchbar;
