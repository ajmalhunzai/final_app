/* eslint-disable jsx-a11y/no-redundant-roles */
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
const FeaturedProducts = () => {
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






  const files = [
    {

      imageUrl: 'https://apt.farmtohome.com.pk/products-images/Mutton Mince (0.9-1kg)1724275797.webp',
    },
    {

      imageUrl: "https://apt.farmtohome.com.pk/products-images/Chicken Steak Fillet (0.9-1kg)2024-08-07 16:41:30.webp"
    },
    {

      imageUrl: "https://apt.farmtohome.com.pk/products-images/Mango Langra 1kg1686993051.webp"
    },
    {

      imageUrl: 'https://apt.farmtohome.com.pk/products-images/Imli Chutni 400gm1710850768.webp',
    },
    {

      imageUrl: 'https://apt.farmtohome.com.pk/products-images/Kolson Spaghetti 450gm2024-07-06 12:12:12.webp',
    },
    {

      imageUrl:
        'https://apt.farmtohome.com.pk/products-images/National Apple Jam 440gm2024-08-18 04:08:31.webp',
    },
    {

      imageUrl: 'https://apt.farmtohome.com.pk/products-images/Mutton Shoulder (0.9-1kg)1724275862.webp',
    },


  ]
  return (
    <div className="py-8">
      {/* Feature products */}
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%]">
          <div className="grid place-items-center">
            <p className="font-bold text-[36px] leading-[24px] text-[#00C851]">Featured Products</p>
          </div>

          <div className="py-8">
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-7 xl:gap-x-8">
              {files.map((file) => (
                <li className="py-4 rounded-lg bg-gray-300 overflow-hidden ">
                  <div className=" w-44 h-28 flex justify-center items-center">
                    <img alt="" src={file.imageUrl} className="w-full h-full object-cover " />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>



      <div className="w-full flex justify-center items-center px-4">
        <div className="w-full">
          <div className="grid place-items-center">
            <p className="font-bold text-[36px] leading-[24px] text-[#00C851]">Fresh Fruits</p>
          </div>

          <div className="py-8">
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-7 xl:gap-x-8">
              {files.map((file) => (
                <li key={file.name} className="">
                  <div className=" rounded-lg ">
                    <img alt="" src={file.imageUrl} className="w-50 h-50" />

                  </div>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>



      <div className="w-full flex justify-center items-center px-4">
        <div className="w-full">
          <div className="grid place-items-center">
            <p className=" font-bold text-[36px] leading-[24px] text-[#00C851]">Fresh Vegetables</p>
          </div>

          <div className="py-8 ">
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-7 xl:gap-x-8">
              {files.map((file) => (
                <li key={file.name} className="">
                  <div className=" rounded-lg ">
                    <img alt="" src={file.imageUrl} className="w-64" />
                    <button type="button" className="">
                      <span className="sr-only">View details for {file.title}</span>
                    </button>
                  </div>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;




// <ContinerFlex>
// <SpecailOfferConatiner>
//   <Header>
//     <Logo src={logo} alt="logo" />
//     <h3>Special Offer </h3>
//   </Header>
//   <SpecialCardConatiner>
//     {specialOffer.map((items) => (
//       <SpecialCard key={items.key}>
//         <div>
//           <div style={{ textAlign: "center" }}>
//             <h3>{items.data.offerName}</h3>
//             <p>{items.data.offerPrice} $</p>
//           </div>
//         </div>
//         <ImgDivofr>
//           <h3>
//             {items.data.offerPriceoff} $ <br />
//             OFF
//           </h3>
//           <img
//             src={items.data.offerImageURL}
//             alt={items.data.offerName}
//           />
//         </ImgDivofr>

//         <div>
//           {!offerCartItems.find((item) => item.key === items.key) ? (
//             <div>
//               <button
//                 onClick={() => {
//                   addToCardOffer(items);
//                 }}
//               >
//                 Add to cart
//               </button>
//             </div>
//           ) : (
//             <div>
//               <button
//                 onClick={() => {
//                   addToCardOffer(items);
//                 }}
//               >
//                 +
//               </button>
//               <p>
//                 {
//                   offerCartItems.find((item) => item.key === items.key)
//                     .quantity
//                 }
//               </p>
//               <button
//                 onClick={() => {
//                   const cartItem = offerCartItems.find(
//                     (item) => item.key === items.key
//                   );
//                   if (cartItem.quantity === 1) {
//                     handleRemoveFromCartOffer(items);
//                   } else {
//                     removeofferFromCart(items);
//                   }
//                 }}
//               >
//                 -
//               </button>
//             </div>
//           )}
//         </div>
//       </SpecialCard>
//     ))}

//     <SpecialCard className="maintimer">
//       <div className="timer">
//         <h1>Fash Sale</h1>
//         <h4>End in</h4>

//         <div>
//           <h2>{formatTime(elapsedTime)}</h2>
//         </div>
//       </div>
//     </SpecialCard>
//   </SpecialCardConatiner>
// </SpecailOfferConatiner>
// <TrendingProductConatiner>
//   <Header>
//     <Logo src={logo} alt="logo" />
//     <h3>Trending Products </h3>
//   </Header>

//   <TrendindCardConatiner>
//     {trending.map((items) => (
//       <TrendingCard>
//         <img
//           src={items.data.trendingImageURL}
//           alt={items.data.trendingName}
//         />

//         <Remaning>
//           <div>
//             <h3>{items.data.trendingName}</h3>
//             <p>{items.data.trendingPrice}$</p>
//           </div>
//           <div>
//             {!trendingCartItems.find(
//               (item) => item.key === items.key
//             ) ? (
//               <div>
//                 <button
//                   onClick={() => {
//                     addToCardTrending(items);
//                   }}
//                 >
//                   Add to cart
//                 </button>
//               </div>
//             ) : (
//               <div>
//                 <button
//                   onClick={() => {
//                     addToCardTrending(items);
//                   }}
//                 >
//                   +
//                 </button>
//                 <p>
//                   {
//                     trendingCartItems.find(
//                       (item) => item.key === items.key
//                     ).quantity
//                   }
//                 </p>
//                 <button
//                   onClick={() => {
//                     const cartItem = trendingCartItems.find(
//                       (item) => item.key === items.key
//                     );
//                     if (cartItem.quantity === 1) {
//                       handleRemoveFromCart(items);
//                     } else {
//                       removeTrendingFromCart(items);
//                     }
//                   }}
//                 >
//                   -
//                 </button>
//               </div>
//             )}
//           </div>
//         </Remaning>
//       </TrendingCard>
//     ))}
//   </TrendindCardConatiner>

//   <FavoriteConatiner>
//     <Header>
//       <Logo src={logo} alt="logo" />
//       <h3>Favorite Products </h3>
//     </Header>

//     <FavCardConatiner>
//       {fav.map((items) => (
//         <FavCard>
//           <img
//             src={items.data.favoriteImageURL}
//             alt={"imge"}
//             style={{ padding: 0 }}
//           />

//           <div className="text">
//             <div>
//               <h2>{items.data.favoriteName}</h2>
//               <p>
//                 {" "}
//                 <b>{items.data.favoriteDescrition}</b>
//               </p>
//             </div>
//             <Link
//               to={`/favoriteCategories/${userId}`}
//               style={{ textDecoration: "none", color: "inherit" }}
//             >
//               <button>View Details </button>
//             </Link>
//           </div>
//         </FavCard>
//       ))}
//     </FavCardConatiner>
//   </FavoriteConatiner>
// </TrendingProductConatiner>
// </ContinerFlex>