import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./product.css";

import {
  Continer,
  HeadingCard,
  HeadingWrapper,
  ProductConatiner,
  ProductWrapper,
  GemsProduct,
  MineralsProduct,
} from "./ProductElement";
import Gems from "../images/Gem-removebg-preview.png";

const Product = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Continer id="Product">
      <HeadingCard>
        <HeadingWrapper>
          <h1>Categories</h1>
        </HeadingWrapper>
      </HeadingCard>
      <ProductConatiner>
        <ProductWrapper>
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
        </ProductWrapper>
      </ProductConatiner>
    </Continer>
  );
};

export default Product;
