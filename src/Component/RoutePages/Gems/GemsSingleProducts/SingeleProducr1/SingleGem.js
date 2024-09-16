import React, { useState,useContext,useEffect } from "react";
import Contact from "../../../../Contact/Contact";
import Whatapp from "../../../../Whatapp/Whatapp";
import {  useParams } from "react-router-dom";
import { Createcart } from "../../../../../Context/Context";

import { Conatiner, FelxWrapper, FelxCard } from "./SingeleProducr1Elements";
import SingleNav from "./Singlenav";
const SingleGem = () => {
  const { userId } = useParams();
  const { records, cartItems, addToCart, removeFromCart } = useContext(Createcart);
  const [detailrecord, setDetailrecord] = useState([]);
  
  useEffect(() => {
    // Find the user's data in the 'records' array based on 'userId'
    const userRecord = records.find(record => record.key === userId);
  
    // Set 'detailrecord' to the found user's data
    if (userRecord) {
      setDetailrecord(userRecord);
      
    } else {
      // Handle the case where the user's data is not found
      // You can set it to an empty object, for example
      setDetailrecord({});
    }
  
    console.log(detailrecord);
  
    // You can also perform other actions based on the 'records' data.
  }, [userId, records]);
  
  
  return (
    <Conatiner>
      <Whatapp />
      <SingleNav />
      <h3>Home / Gems / SingeleProducr1</h3>
      <FelxWrapper>
        <FelxCard></FelxCard>
        <FelxCard>
          {/* {records.map((product) => (
            <div key={product.id}>
              <img src={product.data.gemImageURL} alt={product.data.gemName} />
              <div>
                <h1>{product.data.gemName}</h1>
                <p>{product.data.gemDescription}...</p>
                <p>${product.data.gemPrice}</p>
              </div>
              <div>
                {!cartItems.find((item) => item.id === product.id) ? (
                  <div>
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      Add to cart
                    </button>

                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      +
                    </button>
                    <p>
                      {
                        cartItems.find((item) => item.id === product.id)
                          .quantity
                      }
                    </p>
                    <button
                      onClick={() => {
                        const cartItem = cartItems.find(
                          (item) => item.id === product.id
                        );
                        if (cartItem.quantity === 1) {
                          handleRemoveFromCart(product);
                        } else {
                          removeFromCart(product);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))} */}
        </FelxCard>
      </FelxWrapper>
      <Contact />
    </Conatiner>
  );
};

export default SingleGem;
