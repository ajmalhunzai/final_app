import { createContext, useState, useEffect, } from "react";
import App from "../App";
import { db } from "../Component/firebase";
import { onValue, ref } from "firebase/database";

// Context to store state and pass it globally
export const Createcart = createContext();

// This component wraps its children with the context provider, making cart-related data and functions available to all nested component

const Statestore = ({ children }) => {
  //// . It checks the browser's localStorage for any existing cart items and parses
  //them into an array. If no items are found, an empty array is used as the default value.



  // gems store in local storage
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  // minerals store in local storage
  const [mineralsCartItems, setMineralsCartItems] = useState(
    localStorage.getItem("mineralsCartItems")
      ? JSON.parse(localStorage.getItem("mineralsCartItems"))
      : []
  );

  // specail offer in local storage
  const [offerCartItems, setOfferCartItems] = useState(
    localStorage.getItem("offerCartItems")
      ? JSON.parse(localStorage.getItem("offerCartItems"))
      : []
  );

  // Trending products in local storage

  const [trendingCartItems, setTrendingCartItems] = useState(
    localStorage.getItem("trendingCartItems")
      ? JSON.parse(localStorage.getItem("trendingCartItems"))
      : []
  );
  // chickenmeat products in local storage

  const [chickenmeatCartItems, setchickenmeatCartItems] = useState(
    localStorage.getItem("chickenmeatCartItems")
      ? JSON.parse(localStorage.getItem("chickenmeatCartItems"))
      : []
  );
  // freshfruits products in local storage

  const [freshfruitsCartItems, setfreshfruitsCartItems] = useState(
    localStorage.getItem("freshfruitsCartItems")
      ? JSON.parse(localStorage.getItem("freshfruitsCartItems"))
      : []
  );
  // freshvegetables products in local storage

  const [freshvegetablesCartItems, setfreshvegetablesCartItems] = useState(
    localStorage.getItem("freshvegetablesCartItems")
      ? JSON.parse(localStorage.getItem("freshvegetablesCartItems"))
      : []
  );
  // herbs products in local storage

  const [herbsCartItems, setHerbsCartItems] = useState(
    localStorage.getItem("herbsCartItems")
      ? JSON.parse(localStorage.getItem("herbsCartItems"))
      : []
  );
  // datesdryfruit products in local storage

  const [datesdryfruitCartItems, setdatesdryfruitCartItems] = useState(
    localStorage.getItem("datesdryfruitCartItems")
      ? JSON.parse(localStorage.getItem("datesdryfruitCartItems"))
      : []
  );

  // data calling from firebase





  const [trending, setTrending] = useState([]);
  const [chickenmeat, setChickenmeat] = useState([]);
  const [freshfruits, setFreshfruits] = useState([]);
  const [freshvegetables, setFreshvegetables] = useState([]);
  const [herbs, setHerbs] = useState([]);
  const [datesdryfruit, setDatesdryfruit] = useState([]);






  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const dbreftrend = ref(db, "trendingProducts");
        const dbrefchickenmeat = ref(db, "chicken-&-meat");
        const dbreffreshfruits = ref(db, "fresh-fruits");
        const dbreffreshvegetables = ref(db, "fresh-vegetables");
        const dbrefherbs = ref(db, "herbs");
        const dbrefdatesdryfruit = ref(db, "dates-&-dry-fruit");

        // Parallel fetching using Promises for faster data retrieval
        await Promise.all([
         
          onValue(dbreftrend, (snapshot) => {
            let trending = [];
            snapshot.forEach((childSnapshot) => {
              trending.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setTrending(trending);
          }),
          onValue(dbrefchickenmeat, (snapshot) => {
            let chickenmeat = [];
            snapshot.forEach((childSnapshot) => {
              chickenmeat.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setChickenmeat(chickenmeat);
          }),
          onValue(dbreffreshfruits, (snapshot) => {
            let freshfruits = [];
            snapshot.forEach((childSnapshot) => {
              freshfruits.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setFreshfruits(freshfruits);
          }),
          onValue(dbreffreshvegetables, (snapshot) => {
            let freshvegetables = [];
            snapshot.forEach((childSnapshot) => {
              freshvegetables.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setFreshvegetables(freshvegetables);
          }),
          onValue(dbrefherbs, (snapshot) => {
            let herbs = [];
            snapshot.forEach((childSnapshot) => {
              herbs.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setHerbs(herbs);
          }),
          onValue(dbrefdatesdryfruit, (snapshot) => {
            let datesdryfruit = [];
            snapshot.forEach((childSnapshot) => {
              datesdryfruit.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setDatesdryfruit(datesdryfruit);
          }),
        ]);

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // This function, addToCart, is responsible for adding items to the cart. It first checks if the item already exists in the
  // cart. If it does, the item's quantity is increased; otherwise, a new item with a quantity of 1 is added

  // gems add to cart
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.key === item.key);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // minerals  add to cart
  const addToMineralsCart = (item) => {
    const isItemInCart = mineralsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart) {
      setMineralsCartItems(
        mineralsCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setMineralsCartItems([...mineralsCartItems, { ...item, quantity: 1 }]);
    }
  };

  // Specail offer add to cart
  const addToCardOffer = (item) => {
    const isItemInCart = offerCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart) {
      setOfferCartItems(
        offerCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setOfferCartItems([...offerCartItems, { ...item, quantity: 1 }]);
    }

    localStorage.setItem("offerCartItems", JSON.stringify(offerCartItems));
  };

  // Trending Product add to cart
  const addToCardTrending = (item) => {
    const isItemInCart = trendingCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart) {
      setTrendingCartItems(
        trendingCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setTrendingCartItems([...trendingCartItems, { ...item, quantity: 1 }]);
    }
    localStorage.setItem("trendingCartItems", JSON.stringify(trendingCartItems));
  };

  const addToCardchickenmeat = (item) => {
    const isItemInCart = chickenmeat.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart) {
      setchickenmeatCartItems(
        chickenmeatCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setchickenmeatCartItems([...chickenmeatCartItems, { ...item, quantity: 1 }]);
    }
    localStorage.setItem("chickenmeatCartItems", JSON.stringify(chickenmeatCartItems));
  };
  const addToCardfreshfruits = (item) => {
    const isItemInCart = freshfruitsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    let updatedCartItems;

    if (isItemInCart) {
      updatedCartItems = freshfruitsCartItems.map((cartItem) =>
        cartItem.key === item.key
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...freshfruitsCartItems, { ...item, quantity: 1 }];
    }

    setfreshfruitsCartItems(updatedCartItems);
    // After updating the state, save it to localStorage
    localStorage.setItem("freshfruitsCartItems", JSON.stringify(updatedCartItems));

    console.log("Updated Cart Items:", updatedCartItems);
  };


  const addToCartFreshVegetables = (item) => {
    const isItemInCart = freshvegetablesCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    let updatedCartItems;

    if (isItemInCart) {
      updatedCartItems = freshvegetablesCartItems.map((cartItem) =>
        cartItem.key === item.key
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...freshvegetablesCartItems, { ...item, quantity: 1 }];
    }

    setfreshvegetablesCartItems(updatedCartItems);
    localStorage.setItem(
      "freshvegetablesCartItems",
      JSON.stringify(updatedCartItems)
    );
  };


  const addToCartherbs = (item) => {
    const isItemInCart = herbsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    let updatedCartItems;

    if (isItemInCart) {
      updatedCartItems = herbsCartItems.map((cartItem) =>
        cartItem.key === item.key
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...herbsCartItems, { ...item, quantity: 1 }];
    }

    setHerbsCartItems(updatedCartItems);
    localStorage.setItem(
      "herbsCartItems",
      JSON.stringify(updatedCartItems)
    );
  };

  const addToCartDatesDryFruit = (item) => {
    const isItemInCart = datesdryfruitCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    let updatedCartItems;

    if (isItemInCart) {
      updatedCartItems = datesdryfruitCartItems.map((cartItem) =>
        cartItem.key === item.key
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...datesdryfruitCartItems, { ...item, quantity: 1 }];
    }

    setdatesdryfruitCartItems(updatedCartItems);
    localStorage.setItem(
      "datesdryfruitCartItems",
      JSON.stringify(updatedCartItems)
    );
  };




  

  // gems remove from cart
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.key === item.key);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.key !== item.key));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  // minerals remove from cart
  const removemineralFromCart = (item) => {
    const isItemInCart = mineralsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart.quantity === 1) {
      setMineralsCartItems(
        mineralsCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setMineralsCartItems(
        mineralsCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  //  Specail offer remove from cart
  const removeofferFromCart = (item) => {
    const isItemInCart = offerCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart.quantity === 1) {
      setOfferCartItems(
        offerCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setOfferCartItems(
        offerCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? {
              ...cartItem, quantity: cartItem.quantity - 1

            }
            : cartItem
        )
      );
    }
  };

  // Trending producct remove from card

  const removeTrendingFromCart = (item) => {
    const isItemInCart = trendingCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart.quantity === 1) {
      setTrendingCartItems(
        trendingCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setTrendingCartItems(
        trendingCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removechickenmeatFromCart = (item) => {
    const isItemInCart = chickenmeatCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart.quantity === 1) {
      setchickenmeatCartItems(
        chickenmeatCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setchickenmeatCartItems(
        chickenmeatCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };
  const removefreshfruitsFromCart = (item) => {
    const isItemInCart = freshfruitsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart.quantity === 1) {
      setfreshfruitsCartItems(
        freshfruitsCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setfreshfruitsCartItems(
        freshfruitsCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removefreshvegetablesFromCart = (item) => {
    const isItemInCart = freshvegetablesCartItems.find(
      (cartItem) => cartItem.key === item.key
    );
  
    if (isItemInCart.quantity === 1) {
      setfreshvegetablesCartItems(
        freshvegetablesCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setfreshvegetablesCartItems(
        freshvegetablesCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeherbsFromCart = (item) => {
    const isItemInCart = herbsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );
  
    if (isItemInCart.quantity === 1) {
      setHerbsCartItems(
        herbsCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setHerbsCartItems(
        herbsCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removedatesdryfruitFromCart = (item) => {
    const isItemInCart = datesdryfruitCartItems.find(
      (cartItem) => cartItem.key === item.key
    );
  
    if (isItemInCart.quantity === 1) {
      setdatesdryfruitCartItems(
        datesdryfruitCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setdatesdryfruitCartItems(
        datesdryfruitCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };
  
  
  // Function to get total price for freshfruits


// Function to get total price for freshvegetables
const getCartTotalfreshvegetables = () => {
  return freshvegetablesCartItems.reduce(
    (total, item) => total + item.data.price * item.quantity,
    0
  );
};

// Function to get total price for herbs
const getCartTotalherbs = () => {
  return herbsCartItems.reduce(
    (total, item) => total + item.data.price * item.quantity,
    0
  );
};

// Function to get total price for datesdryfruit
const getCartTotaldatesdryfruit = () => {
  return datesdryfruitCartItems.reduce(
    (total, item) => total + item.data.price * item.quantity,
    0
  );
};


  // simply empties the cart by setting the cartItems state to an empty array.

  // gems cart clear
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");

  };

  // minerals cart clear
  const clearCartmineral = () => {
    setMineralsCartItems([]);
    localStorage.removeItem("mineralsCartItems");

  };

  // specail offer clear cart
  const clearCartoffer = () => {
    setOfferCartItems([]);
    localStorage.removeItem("offerCartItems");
  };

  // Trending product clear cart
  const clearCartTrending = () => {
    setTrendingCartItems([]);
    localStorage.removeItem("trendingCartItems");
  };
  const clearCartchickenmeat = () => {
    setchickenmeatCartItems([]);
    localStorage.removeItem("chickenmeatCartItems");
  };
  const clearCartfreshfruits = () => {
    setfreshfruitsCartItems([]);
    localStorage.removeItem("freshfruitsCartItems");
  };

  const clearCartFreshVegetables = () => {
    setfreshvegetablesCartItems([]);
    localStorage.removeItem("freshvegetablesCartItems");
  };
  const clearCartherbs = () => {
    setHerbsCartItems([]);
    localStorage.removeItem("herbsCartItems");
  };
  const clearCartDatesDryFruits = () => {
    setdatesdryfruitCartItems([]);
    localStorage.removeItem("datesdryfruitCartItems");
  };




  // calculates the total cost of the items in the cart by iterating through each item and multiplying its price by its quantity.

  // gem total cart
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.data.gemPrice * item.quantity,
      0
    );
  };

  // minerals total  in cart
  const getCartTotalmineral = () => {
    return mineralsCartItems.reduce(
      (total, item) => total + item.data.mineralPrice * item.quantity,
      0
    );
  };

  // offer totol in cart

  const getCartTotaloffer = () => {
    return offerCartItems.reduce(
      (total, item) => total + item.data.offerPrice * item.quantity,
      0
    );
  };


  
  const getCartTotalTrending = () => {
    return trendingCartItems.reduce(
      (total, item) => total + item.data.trendingPrice * item.quantity,
      0
    );
  };
  const getCartTotalchickemeat = () => {
    return chickenmeatCartItems.reduce(
      (total, item) => total + item.data.price * item.quantity,
      0
    );
  };
  const getCartTotalfreshfruits = () => {
    return freshfruitsCartItems.reduce(
      (total, item) => total + item.data.price * item.quantity,
      0
    );
  };

  




  // This useEffect runs when the component mounts.
  // It retrieves cart data from localStorage and updates the cartItems state with the parsed data.

  useEffect(() => {
    const data = localStorage.getItem("cartItems");
    if (data) {
      setCartItems(JSON.parse(data));
    }

    // minerals local storege
    const mineralsData = localStorage.getItem("mineralsCartItems");
    if (mineralsData) {
      setMineralsCartItems(JSON.parse(mineralsData));
    }

    // special offer

    const offerData = localStorage.getItem("offerCartItems");
    if (offerData) {
      setOfferCartItems(JSON.parse(offerData));
    }

    // trending
    const trendingData = localStorage.getItem("trendingCartItems");
    if (trendingData) {
      setTrendingCartItems(JSON.parse(trendingData));
    }
    const chickenmeatData = localStorage.getItem("chickenmeatCartItems");
    if (chickenmeatData) {
      setchickenmeatCartItems(JSON.parse(chickenmeatData));
    }
    const freshvegetablesData = localStorage.getItem("freshvegetablesCartItems");
if (freshvegetablesData) {
  setfreshvegetablesCartItems(JSON.parse(freshvegetablesData));
}
const herbsData = localStorage.getItem("herbsCartItems");
if (herbsData) {
  setHerbsCartItems(JSON.parse(herbsData));
}
const datesdryfruitData = localStorage.getItem("datesdryfruitCartItems");
if (datesdryfruitData) {
  setdatesdryfruitCartItems(JSON.parse(datesdryfruitData));
}

  }, []);

  // This useEffect runs whenever the cartItems state changes.
  //  It updates the localStorage with the current state of the cart, converting the array to a JSON string
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);




  return (
    <Createcart.Provider
      value={{
        // gems functions and node data //
        

        loading,

      
        // Trending offer functions and nodes data
        trending,
        trendingCartItems,
        addToCardTrending,
        removeTrendingFromCart,
        clearCartTrending,
        getCartTotalTrending,



        // chicken-&-meat
        chickenmeat,
        addToCardchickenmeat,
        chickenmeatCartItems,
        removechickenmeatFromCart,
        clearCartchickenmeat,
        getCartTotalchickemeat,


        // freshfruits
        freshfruits,
        addToCardfreshfruits,
        freshfruitsCartItems,
        removefreshfruitsFromCart,
        clearCartfreshfruits,
        getCartTotalfreshfruits,


        // freshvegetables
        freshvegetables,
        freshvegetablesCartItems,
        addToCartFreshVegetables,
        clearCartFreshVegetables,
        getCartTotalfreshvegetables,
        removefreshvegetablesFromCart,

        //herbs
        herbs,
        addToCartherbs,
        herbsCartItems,
        clearCartherbs,
        getCartTotalherbs,
        removeherbsFromCart,


        //datesdryfruit
        datesdryfruit,
        datesdryfruitCartItems,
        addToCartDatesDryFruit,
        clearCartDatesDryFruits,
        getCartTotaldatesdryfruit,
        removedatesdryfruitFromCart
        


      }}
    >
      {children}
      <App />
    </Createcart.Provider>
  );
};
export default Statestore;
