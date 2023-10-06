import React from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillShopping,
} from "react-icons/ai";

const Navbar = () => {
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
              <a href="/favourites">
                <AiOutlineHeart size="25px" />
              </a>
            </li>
            <li>
              <a href="/cart">
                <AiOutlineShoppingCart size="25px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
