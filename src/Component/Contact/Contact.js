/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import logo from "../../images/logo.png";

import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";

const Contact = () => {
  return (
    <div id="Contact" className=" shadow-lg bg-white p-16 md:p-0">
    <div className="flex  justify-around flex-row   items-start md:items-center border-b-4 border-black pb-4">
      <div className="flex justify-center mb-8 md:w-1/2">
        <h3>
          <img src={logo} alt="sdjfha" className="w-36" />
        </h3>
      </div>
      <div className="flex justify-center flex-col mb-8 md:w-1/2">
        <h3>Company</h3>
        <div>
          <p className="font-bold">About Us FAQ</p>
          <p className="font-bold">Contact</p>
        </div>
      </div>
      <div className="flex justify-center flex-col mb-8 md:w-1/2">
        <h3>Legal</h3>
        <div>
          <p className="font-bold">
            Privacy Policy Terms <br />
            and Conditions
          </p>
          <p className="font-bold">Contact</p>
        </div>
      </div>
      {/* <div className="flex justify-center flex-col mb-8 md:w-1/2">
        <h3>Contact</h3>
        <div className="flex flex-col">
          <a href="mailto:asimmir1998@gmail.com" target="_blank" className="text-lg flex items-center text-gray-600" rel="noreferrer">
            <AiOutlineMail className="mr-2" />
            asimmir1998@gmail.com
          </a>
          <a href="tel:+923554741334" target="_blank" className="text-lg flex items-center text-gray-600 mt-4" rel="noreferrer">
            <AiFillPhone className="mr-2" />
            +923554741334
          </a>
        </div>
        <div className="flex justify-around mt-4">
          <a href="" className="text-4xl hover:scale-125 transition duration-200" >
            <CiFacebook />
          </a>
          <a href="" className="text-4xl hover:scale-125 transition duration-200">
            <CiInstagram />
          </a>
          <a href="" className="text-4xl hover:scale-125 transition duration-200">
            <CiLinkedin />
          </a>
          <a href="" className="text-4xl hover:scale-125 transition duration-200">
            <TbBrandTelegram />
          </a>
          <a href="" className="text-4xl hover:scale-125 transition duration-200">
            <CiTwitter />
          </a>
        </div>
      </div> */}
    </div>
    <div className="mt-4 text-center text-lg md:text-sm">
      &copy; FiledstoFork {new Date().getFullYear()}. All Rights Reserved.
    </div>
  </div>
  );
};

export default Contact;
