import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Contact from "../../Contact/Contact";
import Whatapp from "../../Whatapp/Whatapp";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Contianer,
  GemsWrapper,
  GemStore,
  Items,
  ItemDetail,
} from "./GemElements";
import GemNav from "./GemNav";

import { Createcart } from "../../../Context/Context";
const Gems = () => {
  const { records, cartItems, addToCart, removeFromCart } =
    useContext(Createcart);

  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init();
  }, []);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  console.log(records);

  return (
    <Contianer>
      <Whatapp />
      <GemNav />
      <GemsWrapper>
        <GemStore>
          <div style={{ width: "70%" }}>
            <h1>Gems for Sale</h1>
            <p>
              A huge selection of fossils from Madagascar including natural
              Ammonites, polished Ammonites, iridescent Ammonites, Ammonite
              pairs, fossilised wood, Nautilus, Copal with insects, Echinoids,
              Bi-Valves and Gastropods.
            </p>
          </div>
          <Items>
            <ItemDetail
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              {records.map((product) => (
                <div key={product.id}>
                  <img
                    src={product.data.gemImageURL}
                    alt={product.data.gemName}
                  />
                  <div>
                    <h1>{product.data.gemName}</h1>
                    <p>{product.data.gemDescription}...</p>
                    <p>${product.data.gemPrice}</p>
                  </div>
                  <div>
                    {!cartItems.find((item) => item.key === product.key) ? (
                      <div>
                        <button
                          onClick={() => {
                            addToCart(product);
                          }}
                        >
                          Add to cart
                        </button>

                      <Link to={`/SingleGem/${product.key}`}  >View Details</Link>
                       
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
                            cartItems.find((item) => item.key === product.key)
                              .quantity
                          }
                        </p>
                        <button
                          onClick={() => {
                            const cartItem = cartItems.find(
                              (item) => item.key === product.key
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
              ))}
            </ItemDetail>
          </Items>
        </GemStore>
      </GemsWrapper>
      <Contact />
    </Contianer>
  );
};

export default Gems;
