import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../layout/CartDrawer";
import { IoMdClose } from "react-icons/io";
import CodeCartLogo from "../../assets/CodeCart.png";

function Navbar() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [navDrawer, setnavDrawer] = useState(false);
  const toggleNavDrawer = () => {
    setnavDrawer(!navDrawer);
  };
  return (
    <>
      <nav className="container overflow-hidden mx-auto flex items-center justify-between max-h-[90px] px-6">
        <div className="overflow-hidden">
          <Link
            to={"/"}
            className="text-2xl font-medium"
          >
            <img
              src={CodeCartLogo}
              className="w-[200px] max-h-[100px]"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to={"/collection/all"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to={"/#"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to={"/#"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to={"/#"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/profile"} className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700 cursor-pointer" />
          </Link>
          <button
            onClick={() => setisDrawerOpen(true)}
            className="relative hover:text-black cursor-pointer"
          >
            <HiOutlineShoppingBag className="h-8 w-8 text-gray-700 " />
            <span className="absolute -top-1 text-sm text-white rounded-full px-2 py-0.5">
              5
            </span>
          </button>
          <div className="overflow-hidden "></div>
          <SearchBar />
          <button onClick={() => setnavDrawer(true)} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700 cursor-pointer" />
          </button>
        </div>
      </nav>
      <CartDrawer
        isDrawerOpen={isDrawerOpen}
        setisDrawerOpen={setisDrawerOpen}
      />

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 ">
          <button onClick={toggleNavDrawer} className="cursor-pointer">
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4 ">Menu</h2>
          <nav className="space-y-4">
            <Link
              to={"#"}
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to={"#"}
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to={"#"}
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to={"#"}
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
