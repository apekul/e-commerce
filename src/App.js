import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AllProductsPage from "./Pages/AllProductsPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import FavPage from "./Pages/FavPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="Layout">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Allproducts" element={<AllProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favourites" element={<FavPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
