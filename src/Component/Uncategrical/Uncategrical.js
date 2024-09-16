import React, { useState, useEffect, useContext } from "react";
import { Createcart } from "../../Context/Context";
import logo from "../images/logo-nav.png";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";

import {
  ContinerFlex,
  SpecailOfferConatiner,
  SpecialCardConatiner,
  SpecialCard,
  ImgDivofr,
  Remaning,
  TrendingProductConatiner,
  TrendindCardConatiner,
  TrendingCard,
  Header,
  Logo,
  FavoriteConatiner,
  FavCardConatiner,
  FavCard,
} from "./UncataElements";
import { Link, useParams } from "react-router-dom";
const Uncategrical = () => {
  const { userId } = useParams();
  const {
    // special offer functions and node data
    specialOffer,
    addToCardOffer,
    offerCartItems,
    removeofferFromCart,

    // Trending offer functions and nodes data
    trending,
    addToCardTrending,
    trendingCartItems,

    removeTrendingFromCart,
  } = useContext(Createcart);

  const [elapsedTime, setElapsedTime] = useState(24 * 60 * 60); // 5 days in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevElapsedTime) => {
        if (prevElapsedTime > 0) {
          return prevElapsedTime - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return `${days}:${hours}:${minutes}:${seconds} `;
  };

  // import favorite

  const [fav, setFav] = useState([]);

  useEffect(() => {
    const dbRef = ref(db, "favoriteCategories");
    onValue(dbRef, (snapshot) => {
      let trend = [];
      snapshot.forEach((childSnapshot) => {
        let key = childSnapshot.key;
        let value = childSnapshot.val();
        trend.push({ key: key, data: value });
      });
      setFav(trend);
    });
  }, []);
  const handleRemoveFromCart = (product) => {
    removeTrendingFromCart(product);
  };
  const handleRemoveFromCartOffer = (product) => {
    removeofferFromCart(product);
  };

  return (
    <div style={{ padding: "15px 80px" }}>
      <h1 style={{ padding: "25px 0", textAlign: "center" }}> </h1>

      <ContinerFlex>
        <SpecailOfferConatiner>
          <Header>
            <Logo src={logo} alt="logo" />
            <h3>Special Offer </h3>
          </Header>
          <SpecialCardConatiner>
            {specialOffer.map((items) => (
              <SpecialCard key={items.key}>
                <div>
                  <div style={{ textAlign: "center" }}>
                    <h3>{items.data.offerName}</h3>
                    <p>{items.data.offerPrice} $</p>
                  </div>
                </div>
                <ImgDivofr>
                  <h3>
                    {items.data.offerPriceoff} $ <br />
                    OFF
                  </h3>
                  <img
                    src={items.data.offerImageURL}
                    alt={items.data.offerName}
                  />
                </ImgDivofr>

                <div>
                  {!offerCartItems.find((item) => item.key === items.key) ? (
                    <div>
                      <button
                        onClick={() => {
                          addToCardOffer(items);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => {
                          addToCardOffer(items);
                        }}
                      >
                        +
                      </button>
                      <p>
                        {
                          offerCartItems.find((item) => item.key === items.key)
                            .quantity
                        }
                      </p>
                      <button
                        onClick={() => {
                          const cartItem = offerCartItems.find(
                            (item) => item.key === items.key
                          );
                          if (cartItem.quantity === 1) {
                            handleRemoveFromCartOffer(items);
                          } else {
                            removeofferFromCart(items);
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                  )}
                </div>
              </SpecialCard>
            ))}

            <SpecialCard className="maintimer">
              <div className="timer">
                <h1>Fash Sale</h1>
                <h4>End in</h4>

                <div>
                  <h2>{formatTime(elapsedTime)}</h2>
                </div>
              </div>
            </SpecialCard>
          </SpecialCardConatiner>
        </SpecailOfferConatiner>
        <TrendingProductConatiner>
          <Header>
            <Logo src={logo} alt="logo" />
            <h3>Trending Products </h3>
          </Header>

          <TrendindCardConatiner>
            {trending.map((items) => (
              <TrendingCard>
                <img
                  src={items.data.trendingImageURL}
                  alt={items.data.trendingName}
                />

                <Remaning>
                  <div>
                    <h3>{items.data.trendingName}</h3>
                    <p>{items.data.trendingPrice}$</p>
                  </div>
                  <div>
                    {!trendingCartItems.find(
                      (item) => item.key === items.key
                    ) ? (
                      <div>
                        <button
                          onClick={() => {
                            addToCardTrending(items);
                          }}
                        >
                          Add to cart
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() => {
                            addToCardTrending(items);
                          }}
                        >
                          +
                        </button>
                        <p>
                          {
                            trendingCartItems.find(
                              (item) => item.key === items.key
                            ).quantity
                          }
                        </p>
                        <button
                          onClick={() => {
                            const cartItem = trendingCartItems.find(
                              (item) => item.key === items.key
                            );
                            if (cartItem.quantity === 1) {
                              handleRemoveFromCart(items);
                            } else {
                              removeTrendingFromCart(items);
                            }
                          }}
                        >
                          -
                        </button>
                      </div>
                    )}
                  </div>
                </Remaning>
              </TrendingCard>
            ))}
          </TrendindCardConatiner>

          <FavoriteConatiner>
            <Header>
              <Logo src={logo} alt="logo" />
              <h3>Favorite Products </h3>
            </Header>

            <FavCardConatiner>
              {fav.map((items) => (
                <FavCard>
                  <img
                    src={items.data.favoriteImageURL}
                    alt={"imge"}
                    style={{ padding: 0 }}
                  />

                  <div className="text">
                    <div>
                      <h2>{items.data.favoriteName}</h2>
                      <p>
                        {" "}
                        <b>{items.data.favoriteDescrition}</b>
                      </p>
                    </div>
                    <Link
                      to={`/favoriteCategories/${userId}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <button>View Details </button>
                    </Link>
                  </div>
                </FavCard>
              ))}
            </FavCardConatiner>
          </FavoriteConatiner>
        </TrendingProductConatiner>
      </ContinerFlex>
    </div>
  );
};

export default Uncategrical;
