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
          <Route
            exact
            path="/favoriteCategories/:userId"
            element={<FavCard />}
          />
          <Route exact path="/HomePage" element={<HomePage />} />
          <Route exact path="/SingleGem/:userId" element={<SingleGem />} />
          <Route exact path="/SingleMineral" element={<SingleMineral />} />
          <Route exact path="/MainContact" element={<MainContact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
