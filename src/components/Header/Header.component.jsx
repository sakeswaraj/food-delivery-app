import React from "react";
import "./Header.styles.css";
import Logo from "../../img/logo.png";
import Avatar from "../../img/avatar.png";

import { BsFillCartPlusFill } from "react-icons/bs";
const Header = () => {
  return (
    <header className="fixed w-screen z-50 bg-slate-100 p-6 px-5">
      {/* for desktop and tablets */}
      <div className="hidden md:flex w-full h-full items-center justify-between px-8 ">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="font-bold text-xl text-headingColor">City</p>
        </div>
        <div className="flex items-center">
          <ul className="flex justify-center items-center gap-8 ml-auto">
            <li className="text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              Offers
            </li>
            <li className="text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base hover:text-headingColor text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              Contact Us
            </li>
          </ul>
          <div className="relative flex justify-center items-center ml-5">
            <BsFillCartPlusFill className="text-2xl text-textColor cursor-pointer" />
            <div className="absolute w-5 h-5 rounded-full bg-cartNumBg flex justify-center items-center -top-2 -right-2">
              <p className="text-white text-xs font-semibold ">2</p>
            </div>
          </div>
          <div className="ml-6">
            <img
              src={Avatar}
              alt="avatar user profile"
              className="w-10 h-10 min-h=[40px] min-w-[40px] shadow-2xl"
            />
          </div>
        </div>
      </div>
      {/* for mobile screens */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
};

export default Header;
