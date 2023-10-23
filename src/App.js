import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AllProductsPage from "./Pages/AllProductsPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import FavPage from "./Pages/FavPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { Products } from "./Assets/products";
import { Context, UserContext } from "./context";

function App() {
  const [data, setData] = useState(Products);
  const [userData, setUserData] = useState(() => {
    const getStorage = JSON.parse(localStorage.getItem("userData"));
    let pattern = { favourites: [], cart: [] };
    if (!getStorage) {
      localStorage.setItem("userData", JSON.stringify(pattern));
      return pattern;
    }
    return getStorage;
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <Router>
      <Context.Provider value={[data, setData]}>
        <div className="Layout">
          <UserContext.Provider value={[userData, setUserData]}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/Allproducts" element={<AllProductsPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/favourites" element={<FavPage />} />
            </Routes>
          </UserContext.Provider>
          <Footer />
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
