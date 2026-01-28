import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

function SearchBar() {
  const [searchTem, setsearchTem] = useState("");
  const [isSearchOpen, setisSearchOpen] = useState(false);

  // handler to toggle the search bar to search the products
  const handleSearchToggle = async () => {
    setisSearchOpen(!isSearchOpen);
  };

  const handleSearch = async()=>{
   console.log(searchTem) 
  }

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isSearchOpen ? "absolute bg-white top-0 left-0 w-full  h-24" : "w-auto"
      }`}
    >
      {isSearchOpen ? (
        <div className=" relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              onChange={(e) => setsearchTem(e.target.value)}
              type="text"
              placeholder="Search"
              value={searchTem}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 "
              name=""
              id=""
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>
          <button onClick={handleSearchToggle} className="">
            <HiMiniXMark className="h-8 w-8 cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
      ) : (
        <button
          className="h-8 w-8 cursor-pointer"
          onClick={handleSearchToggle}
        >
          <HiMagnifyingGlass />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
