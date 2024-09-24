/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useContext } from "react";
import { Createcart } from "../../../Context/Context";
import { Link } from "react-router-dom";

const FreshFruits = () => {
  const {
    freshfruits,
    addToCardfreshfruits,
    freshfruitsCartItems,
    removefreshfruitsFromCart,
    loading
  } = useContext(Createcart);

  const handleRemoveFromCart = (product) => {
    removefreshfruitsFromCart(product);
  };
  return (
    <div className=" pt-20 ">
      <header className="bg-[#F8F9FA]">
        <p className="flex justify-start items-center px-2">
          <Link to="/" className="px-2 hover:text-[#00C851]">
            Home
          </Link>{" "}
          / <p className="px-2"> fresh fruits</p>
        </p>
      </header>
      <div className="px-6 py-4">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {loading}
          {freshfruits.map((person) => (
            <li
              key={person.email}
              className="col-span-1  min-w-[100px]  relative flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow overflow-hidden"
            >
              <div className="flex flex-1 flex-col relative">
                <img
                  alt=""
                  src={person.data.image}
                  className="absolute z-10 w-full h-full object-cover"
                />

                <div className="relative z-20 bg-black bg-opacity-50   p-4">

                  <div>

                  <p className="text-sm font-medium text-white">
                    {person.data.name}
                  </p>
                  <p className="text-sm text-white">{person.data.price}</p>
                  </div>
               
                
                  <div>
                    {!freshfruitsCartItems.find(
                      (item) => item.key === person.key
                    ) ? (
                      <div>
                        <button
                          onClick={() => {
                            addToCardfreshfruits(person);
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
                            addToCardfreshfruits(person);
                          }}
                        >
                          +
                        </button>
                        <p className="mx-2">
                          {
                            freshfruitsCartItems.find(
                              (item) => item.key === person.key
                            ).quantity
                          }
                        </p>
                        <button
                          onClick={() => {
                            const cartItem = freshfruitsCartItems.find(
                              (item) => item.key === person.key
                            );
                            if (cartItem.quantity === 1) {
                              handleRemoveFromCart(person);
                            } else {
                              removefreshfruitsFromCart(person);
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
    </div>
  );
};

export default FreshFruits;
