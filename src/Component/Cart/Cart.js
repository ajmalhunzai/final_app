import React, { useContext } from "react";
import { Createcart } from "../../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Cart = () => {
  const {
    // gems context functions //
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,

    // minerals context functions //
    mineralsCartItems,
    addToMineralsCart,
    removemineralFromCart,
    clearCartmineral,
    getCartTotalmineral,

    // special offer functions and node data
    offerCartItems,
    addToCardOffer,
    removeofferFromCart,
    clearCartoffer,
    getCartTotaloffer,

    // Trending offer functions and nodes data
    trendingCartItems,
    addToCardTrending,
    removeTrendingFromCart,
    clearCartTrending,
    getCartTotalTrending,
  } = useContext(Createcart);

  // const Totalprices = getCartTotal.data.gemPrice;


  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.title} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const notifyCartCleared = () =>
    toast.error(`Cart cleared!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  const handleRemoveFromCartminearl = (product) => {
    removemineralFromCart(product);
    notifyRemovedFromCart(product);
  };
  const handleRemoveFromCartoffer = (product) => {
    removeofferFromCart(product);
    notifyRemovedFromCart(product);
  };
  const handleRemoveFromCarttrend = (product) => {
    removeTrendingFromCart(product);
    notifyRemovedFromCart(product);
  };


  return (
    <>
      <div>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black", fontWeight: "700" }}
        >
          <BiArrowBack /> <span>Home</span>
        </Link>
        <h2>Gems Cart</h2>
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <div>
               
                <div>
                  <h1>{item.category}</h1>
                 
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  +
                </button>
              
                <button
                  onClick={() => {
                    const cartItem = cartItems.find(
                      (product) => product.id === item.id
                    );
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCart(item);
                    } else {
                      removeFromCart(item);
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div>
            <b>Total of Gems : $
            {getCartTotal()}
            </b>
            <button
              onClick={() => {
                clearCart();
                notifyCartCleared();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1>Your Gem cart is empty</h1>
        )}
      </div>


      <div>
        <h2>Mineral Cart</h2>
        <div>
          {mineralsCartItems.map((item) => (
            <div key={item.key}>
              <div>
                <img
                  style={{ width: "50px" }}
                  src={item.data.mineralImageURL}
                  alt={item.title}
                />
                <div>
                  <h1>{item.data.mineralName}</h1>
                  <p>${item.data.mineralPrice}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    addToMineralsCart(item);
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    const cartItem = mineralsCartItems.find(
                      (product) => product.key === item.key
                    );
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCartminearl(item);
                    } else {
                      removemineralFromCart(item);
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {mineralsCartItems.length > 0 ? (
          <div>
            <h1>Total: ${getCartTotalmineral()}</h1>
            <button
              onClick={() => {
                clearCartmineral();
                notifyCartCleared();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1>Your mineral cart is empty</h1>
        )}
      </div>

      <div>
        <h2>Special Offer Cart</h2>
        <div>
          {offerCartItems.map((items) => (
            <div key={items.key}>
              <div>
                <img
                  style={{ width: "50px" }}
                  src={items.data.offerImageURL}
                  alt={items.data.offerName}
                />
                <div>
                  <h1>{items.data.offerName}</h1>
                  <p>${items.data.offerPrice}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    addToCardOffer(items);
                  }}
                >
                  +
                </button>
                <p>{items.quantity}</p>
                <button
                  onClick={() => {
                    const cartItem = offerCartItems.find(
                      (product) => product.key === items.key
                    );
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCartoffer(items);
                    } else {
                      removemineralFromCart(items);
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {offerCartItems.length > 0 ? (
          <div>
            <h1>Total: ${getCartTotaloffer()}</h1>
            <button
              onClick={() => {
                clearCartoffer();
                notifyCartCleared();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1>Your Special Offer cart is empty</h1>
        )}
      </div>

      <div>
        <h2>Trending Items Cart</h2>
        <div>
          {trendingCartItems.map((item) => (
            <div key={item.key}>
              <div>
                <img
                  style={{ width: "50px" }}
                  src={item.data.trendingImageURL}
                  alt={item.trendingName}
                />
                <div>
                  <h1>{item.data.trendingName}</h1>
                  <p>${item.data.trendingPrice}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    addToCardTrending(item);
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    const cartItem = trendingCartItems.find(
                      (product) => product.key === item.key
                    );
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCarttrend(item);
                    } else {
                      removeTrendingFromCart(item);
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {trendingCartItems.length > 0 ? (
          <div>
            <h1>Total: ${getCartTotalTrending()}</h1>
            <button
              onClick={() => {
                clearCartTrending();
                notifyCartCleared();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1>Your Trending Items cart is empty</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
