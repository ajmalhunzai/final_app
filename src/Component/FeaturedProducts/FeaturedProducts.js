/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect, useContext } from "react";
import { Createcart } from "../../Context/Context";
import logo from "../images/logo-nav.png";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import { CiCirclePlus } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
const FeaturedProducts = () => {
  const { userId } = useParams();
  const {


    // Trending offer functions and nodes data
    trending,
    addToCardTrending,


    // freah vegetables 
    freshvegetables,
    addToCartFreshVegetables,
    // fresh fruits
    freshfruits,
    addToCardfreshfruits

  } = useContext(Createcart);




  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init();
  }, []);





  // console.log("trending",trending)



  const files = [
    {

      imageUrl: 'https://apt.farmtohome.com.pk/products-images/Mutton Mince (0.9-1kg)1724275797.webp',
    },
    {

      imageUrl: "https://apt.farmtohome.com.pk/products-images/Chicken Steak Fillet (0.9-1kg)2024-08-07 16:41:30.webp"
    },
    {

      imageUrl: "https://apt.farmtohome.com.pk/products-images/Mango Langra 1kg1686993051.webp"
    },
    {

      imageUrl: 'https://apt.farmtohome.com.pk/products-images/Imli Chutni 400gm1710850768.webp',
    },
    {

      imageUrl: 'https://apt.farmtohome.com.pk/products-images/Kolson Spaghetti 450gm2024-07-06 12:12:12.webp',
    }

  ]
  return (
    <div className="py-8">
      {/* Feature products */}
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%]">
          <div className="grid place-items-center">
            <p className="font-bold text-[36px] leading-[24px] text-[#00C851]">Featured Products</p>
          </div>


          <div className="">

            <div className="py-8 flex justify-center items-center">
              <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">
                {trending.map((person) => (
                  <li
                    key={person.email}
                    
                    className="col-span-1 w-[150px] h-[20vh] relative flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow overflow-hidden"
                  >
                    <Link to={person.data.link} className="flex flex-1 flex-col relative">
                      <img
                        alt=""
                        src={person.data?.trendingImagesURL}
                        className="absolute z-10 w-full h-full object-cover"
                      />
                      <div className="relative z-20 bg-black bg-opacity-30 w-full h-full p-4">
                        <div className="absolute right-2 top-2">
                          <button onClick={(e) => { e.preventDefault(); addToCardTrending(person); }}>
                            <CiCirclePlus size={35} className="text-[#E66C42] hover:bg-[#E66C42] hover:text-white rounded-full" />
                          </button>
                        </div>
                        <div className="flex flex-col justify-end items-start h-full">
                          <p class="text-lg  font-medium text-white  leading-[26px]">
                            {person.data.trendingName}</p>
                          <p className="text-sm  font-medium text-white">RS {person.data.trendingPrice}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </div>
      </div>







      <div className="w-full flex justify-center items-center px-4">
        <div className="w-full">
          <div className="grid place-items-center">
            <p className=" font-bold text-[36px] leading-[24px] text-[#00C851]">Fresh Vegetables</p>
          </div>

          <div className="py-10">

            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-8 xl:gap-x-8">
              {freshvegetables.slice(0, 8).map((person) => (
                <li
                  key={person.email}
                  className="col-span-1 w-[150px] h-[20vh] relative flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow overflow-hidden"
                >
                  <Link to={"/fresh-vegetables"} className="flex flex-1 flex-col relative">
                    <img
                      alt=""
                      src={person.data?.image}
                      className="absolute z-10 w-full h-full object-cover"
                    />
                    <div className="relative z-20 bg-black bg-opacity-30 w-full h-full p-4">
                      <div className="absolute right-2 top-2">
                        <button onClick={(e) => { e.preventDefault(); addToCartFreshVegetables(person); }}>
                          <CiCirclePlus size={35} className="text-[#E66C42] hover:bg-[#E66C42] hover:text-white rounded-full" />
                        </button>
                      </div>
                      <div className="flex flex-col justify-end items-start h-full">
                        <p className="text-lg font-medium text-white leading-[26px]">
                          {person.data.name}
                        </p>
                        <p className="text-sm font-medium text-white">RS {person.data.price}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Second Row: Display next 2 items and center them */}
            <div className="flex justify-center mt-4">
              <ul className="grid grid-cols-2 gap-x-4">
                {freshvegetables.slice(8, 10).map((person) => (
                  <li
                    key={person.email}
                    className="col-span-1 w-[150px] h-[20vh] relative flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow overflow-hidden"
                  >
                    <Link to={"/fresh-vegetables"} className="flex flex-1 flex-col relative">
                      <img
                        alt=""
                        src={person.data?.image}
                        className="absolute z-10 w-full h-full object-cover"
                      />
                      <div className="relative z-20 bg-black bg-opacity-30 w-full h-full p-4">
                        <div className="absolute right-2 top-2">
                          <button onClick={(e) => { e.preventDefault(); addToCartFreshVegetables(person); }}>
                            <CiCirclePlus size={35} className="text-[#E66C42] hover:bg-[#E66C42] hover:text-white rounded-full" />
                          </button>
                        </div>
                        <div className="flex flex-col justify-end items-start h-full">
                          <p className="text-lg font-medium text-white leading-[26px]">
                            {person.data.name}
                          </p>
                          <p className="text-sm font-medium text-white">RS {person.data.price}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            className="flex justify-center items-end py-6 text-[#E66C42] underline transition-all duration-300 ease-in-out hover:text-[#E66C42] hover:font-medium hover:underline group"
            to="/fresh-vegetables"
          >
            <span className="transition-all duration-300 ease-in-out ">
              Show More
            </span>
            <IoIosArrowRoundForward

              className="h-6 w-6 ml-1 transition-all duration-300 ease-in-out text-[#E66C42]"
            />
          </Link>


        </div>
      </div>
      <div className="w-full flex justify-center items-center px-4">
        <div className="w-full">
          <div className="grid place-items-center">
            <p className=" font-bold text-[36px] leading-[24px] text-[#00C851]">Fresh Fruits</p>
          </div>

          <div className="py-10">

            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-8 xl:gap-x-8">
              {freshfruits.slice(0, 8).map((person) => (
                <li
                  key={person.email}
                  className="col-span-1 w-[150px] h-[20vh] relative flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow overflow-hidden"
                >
                  <Link to={"/fresh-fruits"} className="flex flex-1 flex-col relative">
                    <img
                      alt=""
                      src={person.data?.image}
                      className="absolute z-10 w-full h-full object-cover"
                    />
                    <div className="relative z-20 bg-black bg-opacity-30 w-full h-full p-4">
                      <div className="absolute right-2 top-2">
                        <button onClick={(e) => { e.preventDefault(); addToCardfreshfruits(person); }}>
                          <CiCirclePlus size={35} className="text-[#E66C42] hover:bg-[#E66C42] hover:text-white rounded-full" />
                        </button>
                      </div>
                      <div className="flex flex-col justify-end items-start h-full">
                        <p className="text-lg font-medium text-white leading-[26px]">
                          {person.data.name}
                        </p>
                        <p className="text-sm font-medium text-white">RS {person.data.price}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Second Row: Display next 2 items and center them */}
            <div className="flex justify-center mt-4">
              <ul className="grid grid-cols-2 gap-x-4">
                {freshvegetables.slice(8, 10).map((person) => (
                  <li
                    key={person.email}
                    className="col-span-1 w-[150px] h-[20vh] relative flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow overflow-hidden"
                  >
                    <Link to={"/fresh-fruits"} className="flex flex-1 flex-col relative">
                      <img
                        alt=""
                        src={person.data?.image}
                        className="absolute z-10 w-full h-full object-cover"
                      />
                      <div className="relative z-20 bg-black bg-opacity-30 w-full h-full p-4">
                        <div className="absolute right-2 top-2">
                          <button onClick={(e) => { e.preventDefault(); addToCardfreshfruits(person); }}>
                            <CiCirclePlus size={35} className="text-[#E66C42] hover:bg-[#E66C42] hover:text-white rounded-full" />
                          </button>
                        </div>
                        <div className="flex flex-col justify-end items-start h-full">
                          <p className="text-lg font-medium text-white leading-[26px]">
                            {person.data.name}
                          </p>
                          <p className="text-sm font-medium text-white">RS {person.data.price}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            className="flex justify-center items-end py-6 text-[#E66C42] underline transition-all duration-300 ease-in-out hover:text-[#E66C42] hover:font-medium hover:underline group"
            to={"/fresh-fruits"}
          >
            <span className="transition-all duration-300 ease-in-out ">
              Show More
            </span>
            <IoIosArrowRoundForward

              className="h-6 w-6 ml-1 transition-all duration-300 ease-in-out text-[#E66C42]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;



