import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4">News Letter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events and online
            offers
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign up and get 10% off on your first order
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-r-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">
              Subscribe
            </button>
          </div>
        </div>
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600 ">
            <li className="">
              <Link className="hover:text-gray-500 transition-colors" to={"#"}>
                Men's Top Wear
              </Link>
            </li>
            <li className="">
              <Link className="hover:text-gray-500 transition-colors" to={"#"}>
                Women's Top Wear
              </Link>
            </li>
            <li className="">
              <Link className="hover:text-gray-500 transition-colors" to={"#"}>
                Men's Bottom Wear
              </Link>
            </li>
            <li className="">
              <Link className="hover:text-gray-500 transition-colors" to={"#"}>
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600 ">
            <li className="">
              <Link className="hover:text-gray-500 transition-colors" to={"#"}>
                Contact Us
              </Link>
            </li>
            <li className="">
              <Link className="hover:text-gray-500 transition-colors" to={"#"}>
                About Us
              </Link>
            </li>
            <li className="">
              <Link className="hover:text-gray-500 transition-colors" to={"#"}>
                FAQs
              </Link>
            </li>
            <li className="">
              <Link className="hover:text-gray-500 transition-colors" to={"#"}>
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="facebook.com"
              className="hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="facebook.com"
              className="hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="facebook.com"
              className="hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-500">Call Us </p>
          <p className="">
            <FiPhoneCall className="inline-block mr-2" />
            91+ 1234567890
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">2026, All Rights Reserved .</p>
      </div>
    </footer>
  );
};

export default Footer;
