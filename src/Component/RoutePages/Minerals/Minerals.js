import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Contianer,
  MineralWrapper,
  MineralStore,
  Items,
  ItemDetail,
} from "./MineralsElements";
import Contact from "../../Contact/Contact";
import Whatapp from "../../Whatapp/Whatapp";
import MineralsNav from "./MineralsNav";
import { Createcart } from "../../../Context/Context";

const Minerals = () => {
  const { recordtwo, mineralsCartItems, addToMineralsCart } =
    useContext(Createcart);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  // const handleRemoveFromCart = (product) => {
  //   removeFromCart(product);
  // };
  console.log(recordtwo);

  return (
    <Contianer>
      <Whatapp />
      <MineralsNav />
      <MineralWrapper>
        <MineralStore>
          <div style={{ width: "70%" }}>
            <h1>Minerals for Sale</h1>
            <p>
              A huge selection of fossils from Madagascar including natural
              Ammonites, polished Ammonites, iridescent Ammonites, Ammonite
              pairs, fossilised wood, Nautilus, Copal with insects, Echinoids,
              Bi-Valves and Gastropods.
            </p>
          </div>
          <Items>
            {recordtwo.map((val) => (
              <ItemDetail
              // data-aos="flip-left"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="2000"
              >
                <div key={val.id}>
                  <h1>Mineral Name : {val.data.mineralName}</h1>

                  <div>
                    <h1>{val.data.mineralName}</h1>
                    <p>{val.data.mineralDescription}...</p>
                    <p>${val.data.mineralPrice}</p>
                  </div>
                  <div>
                    {!mineralsCartItems.find((item) => item.key === val.key) ? (
                      <button
                        onClick={() => {
                          addToMineralsCart(val);
                        }}
                      >
                        Add to cart
                      </button>
                    ) : (
                      <div>
                        <button
                          onClick={() => {
                            addToMineralsCart(val);
                          }}
                        >
                          +
                        </button>
                        <p>
                          {
                            mineralsCartItems.find((item) => item.key === val.key)
                              .quantity
                          }
                        </p>
                        <button
                          onClick={() => {
                            const cartItem = mineralsCartItems.find(
                              (item) => item.key === val.key
                            );
                            if (cartItem.quantity === 1) {
                              // handleRemoveFromCart(val);
                            } else {
                              // removeFromCart(val);
                            }
                          }}
                        >
                          -
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </ItemDetail>
            ))}
          </Items>
        </MineralStore>
      </MineralWrapper>
      <Contact />
    </Contianer>
  );
};

export default Minerals;
