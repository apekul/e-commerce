import React, { useState, useContext } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillShopping,
  AiOutlineClose,
} from "react-icons/ai";
import { UserContext } from "../context";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [userData] = useContext(UserContext);
  return (
    <nav id="navbar">
      <div className="Container ">
        <div className="NavBox">
          <div className="NavLogo">
            <a href="/">
              <AiFillShopping size="30px" />
            </a>
            <p>e-commerce</p>
          </div>
          <ul className="NavItems">
            <li>
              <a href="/Allproducts">Products</a>
            </li>
            <li>
              <a href="/favourites" className="NavIcon">
                <AiOutlineHeart size="25px" />
                {userData.favourites.length > 0 && (
                  <span>{userData.favourites.length}</span>
                )}
              </a>
            </li>
            <li>
              <a href="/cart" className="NavIcon">
                <AiOutlineShoppingCart size="25px" />
                {userData.cart.length > 0 && (
                  <span>{userData.cart.length}</span>
                )}
              </a>
            </li>
          </ul>
          <GiHamburgerMenu
            className="burgerButton"
            size="25px"
            onClick={() => setMobile(!mobile)}
          />
        </div>
      </div>

      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: mobile ? "10rem" : "0" }}
      >
        <AiOutlineClose
          className="closebtn"
          size="25px"
          onClick={() => setMobile(!mobile)}
        />
        <a href="/Allproducts">Products</a>
        <a href="/favourites">Favourites</a>
        <a href="/cart">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;
