import React, { useContext, useState, Fragment } from "react";

import { Createcart } from "../../Context/Context";
import {

  NavBarContainer,
  NavMenu,
  NavItem,
  NavLinks,

  NavlinkR,
} from "./NavbarElement";

import { RiMenu2Fill, RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import { Dialog, TransitionChild, Transition } from "@headlessui/react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../images/logo.png"

const Navbar = ({ toggle }) => {
  const {
    // gems context functions //
    cartItems,

    // minerals context functions //
    mineralsCartItems,

    // special offer functions and node data
    offerCartItems,

    // Trending offer functions and nodes data
    trendingCartItems,
  } = useContext(Createcart);

  const one = cartItems.length;
  const minerals = mineralsCartItems.length;
  const offer = offerCartItems.length;
  const trending = trendingCartItems.length;
  const totalCart = one + minerals + offer + trending;

  const [shipmentOPen, setShipment] = useState(false);


  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-20 bg-[#ffff] text-black  shadow-lg px-4 "
      >
        <div className="flex justify-between items-center px-4 py-2 ">
          <div className="flex justify-between items-center">

            <button
              type="button"
              onClick={() => setShipment(true)}
              className="-m-2.5 p-2.5 text-gray-700 "
            >
              <RiMenu2Fill size={30} className="text-[#EC6B3C] " />
            </button>
            <Link to="/" className="px-5">
              <img src={logo} alt="logo" className="w-14 h-14 " />
            </Link>
          </div>

          <Link className="flex justify-center items-center no-underline text-black " to="/Cart">
            <RiShoppingCart2Line size={30} className="text-[#EC6B3C]  " />
            <span className="px-2">({totalCart})</span>
          </Link>
        </div>
      </div>

      <Transition show={shipmentOPen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setShipment(false)}
        >
          {/* Background overlay */}
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600/80" />
          </TransitionChild>

          {/* Dialog content */}
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed left-0 top-0 h-full w-full max-w-sm flex">
              <div className="relative flex-1 bg-white shadow-lg p-4">
                <div className="relative flex w-full flex-col overflow-hidden bg-white pb-8 pt-6 sm:rounded-lg sm:pb-6 lg:py-8">
                  <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-500"
                      onClick={() => setShipment(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="px-6 py-4">
                    <div className="-mx-4 mt-8 sm:-mx-0">
                      <NavBarContainer>
                        <NavMenu className="flex-col">
                          <NavItem>
                            <NavlinkR to="/" smooth={400} onClick={() => setShipment(false)}>
                              Home{" "}
                            </NavlinkR>
                          </NavItem>
                          <NavItem>
                            <NavLinks to="Product" smooth={300}>
                              Products
                            </NavLinks>
                          </NavItem>
                          <NavItem>
                            <NavLinks to="Uncategrical" smooth={300}>
                              Uncategrical
                            </NavLinks>
                          </NavItem>
                          <NavItem>
                            <NavLinks to="Blog" smooth={300}>
                              Blog
                            </NavLinks>
                          </NavItem>
                          <NavItem>
                            <NavlinkR
                              style={{ color: "#00000" }}
                              to="MainContact"
                              smooth={300}
                            >
                              Contact
                            </NavlinkR>
                          </NavItem>
                        </NavMenu>
                      </NavBarContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};

export default Navbar;
