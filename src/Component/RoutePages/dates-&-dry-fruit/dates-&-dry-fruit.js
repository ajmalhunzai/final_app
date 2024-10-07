/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useContext,useEffect } from "react";
import { Createcart } from "../../../Context/Context";
import { Link } from "react-router-dom";
import Contact from "../../Contact/Contact";



const DatesDryFruit = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);
  const {
    
    loading
,
datesdryfruit,
datesdryfruitCartItems,
addToCartDatesDryFruit,

removedatesdryfruitFromCart,


   
  } = useContext(Createcart);



  const handleRemoveFromCart = (product) => {
    removedatesdryfruitFromCart(product);
  };
  return (
    <div className=" pt-20 ">
    <header className="bg-[#F8F9FA]">
      <p className="flex justify-start items-center px-2">
        <Link to="/" className="px-2 hover:text-[#00C851]">
          Home
        </Link>{" "}
        / <p className="px-2"> Dates & Dry Fruit</p>
      </p>

      
    </header>

    <div className="flex justify-center items-center flex-col py-4">
       <div className="py-4">
        <img src="https://apt.farmtohome.com.pk/banners/dry fruits.webp" alt="fresh fruits" className="w-48 h-48" />
       </div>
       <div>
       <p className="font-medium text-[#525252] text-[56px] leading-[67px]">Dates & Dry Fruit</p>
       </div>
    </div>
    <div className="px-6 py-4">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9"
      >
        {loading}
        {datesdryfruit.map((person) => (
          <li
            key={person.email}
            className="col-span-1  w-[150px] h-[20vh]  relative flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow overflow-hidden"
          >
            <div className="flex flex-1 flex-col relative">
              <img
                alt=""
                src={person.data.image}
                className="absolute z-10 w-full h-full object-cover"
              />

              <div className="relative z-20 bg-black bg-opacity-50 w-[150px] h-[20vh]  p-4">

                <div>

                <p className="text-sm font-medium text-white">
                  {person.data.name}
                </p>
                <p className="text-sm text-white">{person.data.price}</p>
                </div>
             
              
                <div>
                  {!datesdryfruitCartItems.find(
                    (item) => item.key === person.key
                  ) ? (
                    <div>
                      <button
                        onClick={() => {
                          addToCartDatesDryFruit(person);
                        }}
                        className="text-white"
                      >
                        Add to cart
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <button
                        onClick={() => {
                          addToCartDatesDryFruit(person);
                        }}
                      >
                        +
                      </button>
                      <p className="mx-2">
                        {
                          datesdryfruitCartItems.find(
                            (item) => item.key === person.key
                          ).quantity
                        }
                      </p>
                      <button
                        onClick={() => {
                          const cartItem = datesdryfruitCartItems.find(
                            (item) => item.key === person.key
                          );
                          if (cartItem.quantity === 1) {
                            handleRemoveFromCart(person);
                          } else {
                            removedatesdryfruitFromCart(person);
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                  )}
                </div>
          
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <Contact />
  </div>
  )
}

export default DatesDryFruit