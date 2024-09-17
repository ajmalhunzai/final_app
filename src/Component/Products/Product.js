/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";



import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

import {

  GemsProduct,
  MineralsProduct,
} from "./ProductElement";
import Gems from "../images/Gem-removebg-preview.png";

const Product = () => {
  useEffect(() => {
    AOS.init();
  }, []);



  const people = [
    {
      to: "chicken-&-meat",
      name: 'Chicken Meat',
      imageUrl: 'https://apt.farmtohome.com.pk/banners/8.webp',
    },
    {
      to: "fresh-fruits",
      name: 'Fresh Fruits',

      imageUrl: "https://apt.farmtohome.com.pk/banners/fruits.webp"
    },
    {
      name: 'Fresh Vegetables',
      to: "fresh-vegetables",
      imageUrl: "https://apt.farmtohome.com.pk/banners/veggies.webp"
    },
    {
      name: 'Chopped & Peeled',
      to: "chopped-&-peeled",
      imageUrl: 'https://apt.farmtohome.com.pk/banners/Chooped.webp',
    },
    {
      name: 'Frozen Snacks',
      to: "frozen-snacks",
      imageUrl:
        'https://apt.farmtohome.com.pk/banners/5.webp',
    },
    {
      name: 'Dairy',
      to: "dairy",
      imageUrl:
        'https://apt.farmtohome.com.pk/banners/dairyy.webp',
    },
    {
      name: 'Spices & Sauces',
      to: "spices-&-sauces",
      imageUrl: 'https://apt.farmtohome.com.pk/banners/Spices new.webp',
    },
    {
      name: 'Rice,Flour & Sugar',
      to: "rice-flour-&-sugar",
      imageUrl:'https://apt.farmtohome.com.pk/banners/rice 2.webp',
    },
    {
      name: 'Dates & Dry Fruit',
      to: "dates-&-dry-fruit",
      imageUrl:
        'https://apt.farmtohome.com.pk/banners/dry%20fruits.webp',
    },

  ]


  return (
    <div className="py-5 px-6 sm:py-0 " id="Product">
      <div className="flex justify-center items-center my-6 sm:w-full">
        <div className="rounded-lg bg-[#00C851]  text-center px-6 py-4">
          <h1 className="font-semibold text-white">Our Categories</h1>
        </div>
      </div>
      <div className="flex justify-center items-center py-3">

        <ul role="list" className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 overflow-hidden">
          {people.map((person) => (
            <li
              key={person.email}
              className="col-span-1 flex flex-col  p-6 rounded-lg bg-white text-center "
            >
              <Link to={person.to} className="flex flex-1 flex-col group  hover:text-[#00C851] ">
                <img alt="" src={person.imageUrl} className="mx-auto h-48 w-48 flex-shrink-0 rounded-full" />
                <h3 className="mt-6 text-md font-semibold text-gray-900 group-hover:text-[#00C851]  transition-colors duration-300 ease-in-out">{person.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;



<div className="flex justify-between w-[95%] lg:w-full lg:flex-col lg:justify-center lg:items-center">
  {" "}
  <GemsProduct>
    <Link
      to="/Gems"
      style={{
        textDecoration: "none",
        color: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div className="Card">
        <div className="CardInner">
          <div className="CardFront">
            <h3>Gems </h3>
            <div className="Image">
              <img src={Gems} alt="Gems" />
            </div>
          </div>
          <div className="CardBack">
            <div>
              <h3>Gems</h3>
              <p>View Collection</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </GemsProduct>
  <MineralsProduct>
    <Link
      to="/Minerals"
      style={{
        textDecoration: "none",
        color: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div className="Card">
        <div className="CardInner">
          <div className="CardFront">
            {" "}
            <h3>Mineral </h3>
            <div className="Image">
              <img src={Gems} alt="Gems" />
            </div>
          </div>
          <div className="CardBack">
            <div>
              <h3>Minerals</h3>
              <p>View Collection</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </MineralsProduct>
</div>