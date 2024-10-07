import React, { useContext } from "react";
import { Createcart } from "../../Context/Context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


import { CheckIcon,  } from '@heroicons/react/20/solid'
import Contact from "../Contact/Contact";




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
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


    freshfruits,
    addToCardfreshfruits,
    freshfruitsCartItems,
    removefreshfruitsFromCart,
    getCartTotalfreshfruits,
    clearCartfreshfruits,


  


    getCartTotalchickemeat,

    getCartTotalfreshvegetables,
    getCartTotaldatesdryfruit,
    getCartTotalspicessauces,
  } = useContext(Createcart);




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
  const handleRemoveFromCartfruits = (product) => {
    removefreshfruitsFromCart(product);
    notifyRemovedFromCart(product);
  };


  return (
    <>
      <div className="pt-20">
        <header className="bg-[#F8F9FA]">
          <p className="flex justify-start items-center px-2">
            <Link to="/" className="px-2 hover:text-[#00C851]" >Home</Link> /  <p className="px-2"> Cart</p>
          </p>
        </header>
      </div>


      <div className="bg-white">


        <main>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl pt-16">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>

              <form className="mt-12">
                <section aria-labelledby="cart-heading">
                  <h2 id="cart-heading" className="sr-only">
                    Items in your shopping cart
                  </h2>

                  <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                    <p> Featured Product Cart</p>
                    {trendingCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.trendingImageURL}
                            src={item.data.trendingImageURL}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-sm">
                                  <a href={"#"} className="font-medium text-gray-700 hover:text-gray-800">
                                    {item.data.trendingName}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{item.data.trendingPrice}</p>

                              </div>

                              <p className="text-right text-sm font-medium text-gray-900">
                                <p>
                                  Total
                                </p>
                                <p>

                                  {getCartTotalTrending()}</p>
                              </p>
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

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                    <p> Fresh Fruits Cart</p>
                    {freshfruits.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.image}
                            src={item.data.name}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-sm">
                                  <a href={"#"} className="font-medium text-gray-700 hover:text-gray-800">
                                    {item.data.name}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{item.data.price}</p>

                              </div>

                              <p className="text-right text-sm font-medium text-gray-900">
                                <p>
                                  Total
                                </p>
                                <p>

                                  {getCartTotalfreshfruits()}</p>
                              </p>
                            </div>

                            <div>
                              <button
                                onClick={() => {
                                  addToCardfreshfruits(item);
                                }}
                              >
                                +
                              </button>
                              <p>{item.quantity}</p>
                              <button
                                onClick={() => {
                                  const cartItem = freshfruitsCartItems.find(
                                    (product) => product.key === item.key
                                  );
                                  if (cartItem.quantity === 1) {
                                    removefreshfruitsFromCart(item);
                                  } else {
                                    removefreshfruitsFromCart(item);
                                  }
                                }}
                              >
                                -
                              </button>
                            </div>
                          </div>

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                    <p> Fresh Vegetables Carts</p>
                    {trendingCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.trendingImageURL}
                            src={item.data.trendingImageURL}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-sm">
                                  <a href={"#"} className="font-medium text-gray-700 hover:text-gray-800">
                                    {item.data.trendingName}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{item.data.trendingPrice}</p>

                              </div>

                              <p className="text-right text-sm font-medium text-gray-900">
                                <p>
                                  Total
                                </p>
                                <p>

                                  {getCartTotalTrending()}</p>
                              </p>
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

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                    <p> Chopped Peeled Carts</p>
                    {trendingCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.trendingImageURL}
                            src={item.data.trendingImageURL}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-sm">
                                  <a href={"#"} className="font-medium text-gray-700 hover:text-gray-800">
                                    {item.data.trendingName}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{item.data.trendingPrice}</p>

                              </div>

                              <p className="text-right text-sm font-medium text-gray-900">
                                <p>
                                  Total
                                </p>
                                <p>

                                  {getCartTotalTrending()}</p>
                              </p>
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

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                    <p> Dairy and Jams Carts</p>
                    {trendingCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.trendingImageURL}
                            src={item.data.trendingImageURL}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-sm">
                                  <a href={"#"} className="font-medium text-gray-700 hover:text-gray-800">
                                    {item.data.trendingName}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{item.data.trendingPrice}</p>

                              </div>

                              <p className="text-right text-sm font-medium text-gray-900">
                                <p>
                                  Total
                                </p>
                                <p>

                                  {getCartTotalTrending()}</p>
                              </p>
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

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                    <p> Herbs Carts</p>
                    {trendingCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.trendingImageURL}
                            src={item.data.trendingImageURL}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-sm">
                                  <a href={"#"} className="font-medium text-gray-700 hover:text-gray-800">
                                    {item.data.trendingName}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{item.data.trendingPrice}</p>

                              </div>

                              <p className="text-right text-sm font-medium text-gray-900">
                                <p>
                                  Total
                                </p>
                                <p>

                                  {getCartTotalTrending()}</p>
                              </p>
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

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                    <p> Dates and Dry Fruit Carts</p>
                    {trendingCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.trendingImageURL}
                            src={item.data.trendingImageURL}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-sm">
                                  <a href={"#"} className="font-medium text-gray-700 hover:text-gray-800">
                                    {item.data.trendingName}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{item.data.trendingPrice}</p>

                              </div>

                              <p className="text-right text-sm font-medium text-gray-900">
                                <p>
                                  Total
                                </p>
                                <p>

                                  {getCartTotalTrending()}</p>
                              </p>
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

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Order summary */}
                <section aria-labelledby="summary-heading" className="mt-10 sm:ml-32 sm:pl-6">
                  <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
                    <h2 id="summary-heading" className="sr-only">
                      Order summary
                    </h2>

                    <div className="flow-root">
                      <dl className="-my-4 divide-y divide-gray-200 text-sm">
                        <div className="flex items-center justify-between py-4">
                          <dt className="text-gray-600">Subtotal</dt>
                          <dd className="font-medium text-gray-900">$99.00</dd>
                        </div>
                        <div className="flex items-center justify-between py-4">
                          <dt className="text-gray-600">Shipping</dt>
                          <dd className="font-medium text-gray-900">$5.00</dd>
                        </div>
                        <div className="flex items-center justify-between py-4">
                          <dt className="text-gray-600">Tax</dt>
                          <dd className="font-medium text-gray-900">$8.32</dd>
                        </div>
                        <div className="flex items-center justify-between py-4">
                          <dt className="text-base font-medium text-gray-900">Order total</dt>
                          <dd className="text-base font-medium text-gray-900">$112.32</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Checkout
                    </button>
                  </div>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    <p>
                      or
                      <Link to={"/"} className="font-medium text-indigo-600 hover:text-indigo-500">
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </Link>
                    </p>
                  </div>
                </section>
              </form>
            </div>
          </div>


        </main>

        <Contact />
      </div>
   
    </>
  );
};

export default Cart;
