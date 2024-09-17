import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gems from "./Component/RoutePages/Gems/Gems";
import Minerals from "./Component/RoutePages/Minerals/Minerals";
import HomePage from "./Component/HomePage/HomePage";
import SingleGem from "./Component/RoutePages/Gems/GemsSingleProducts/SingeleProducr1/SingleGem";
import SingleMineral from "./Component/RoutePages/Minerals/SingleProducts/SingeleProducr1/SingleMineral";
import Cart from "./Component/Cart/Cart";

import FavCard from "./Component/FavCard/FavCard";
import MainContact from "./Component/MainContact/MainContact";
import Navbar from "./Component/Navbar/Navbar";


// 
import Chickenmeat from "./Component/RoutePages/chicken-&-meat/Chickenmeat"
import FreshFruits from "./Component/RoutePages/fresh-fruits/fresh-fruits"
import ChoppedPeeled from "./Component/RoutePages/chopped-&-peeled/chopped-&-peeled"
import FreshVegetables from "./Component/RoutePages/fresh-vegetables/fresh-vegetables"
import FrozenSnacks from "./Component/RoutePages/frozen-snacks/frozen-snacks"
import Dairy from "./Component/RoutePages/dairy/dairy"
import SpicesSauces from "./Component/RoutePages/dairy/dairy"
import RiceFlourSugar from "./Component/RoutePages/rice-flour-&-sugar/rice-flour-&-sugar"
import DatesDryFruit from "./Component/RoutePages/dates-&-dry-fruit/dates-&-dry-fruit"



function App() {


  return (
    <>
      <Router>
      <Navbar  />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route exact path="/Gems" element={<Gems />} />
          <Route exact path="/Minerals" element={<Minerals />} />
          <Route exact path="/chicken-&-meat" element={<Chickenmeat />} />
          <Route exact path="/fresh-fruits" element={<FreshFruits />} />
          <Route exact path="/chopped-&-peeled" element={<ChoppedPeeled />} />
          <Route exact path="/fresh-vegetables" element={<FreshVegetables />} />
          <Route exact path="/frozen-snacks" element={<FrozenSnacks />} />
          <Route exact path="/dairy" element={<Dairy />} />
          <Route exact path="/spices-&-sauces" element={<SpicesSauces />} />
          <Route exact path="/rice-flour-&-sugar" element={<RiceFlourSugar />} />
          <Route exact path="/dates-&-dry-fruit" element={<DatesDryFruit />} />
      
        </Routes>
      </Router>
    </>
  );
}

export default App;
