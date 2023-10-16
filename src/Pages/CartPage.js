import React, { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

// const tempData = {
//   cart: [],
//   fav: [],
// };

const CartPage = () => {
  const [data, setData] = useState({});
  return (
    <section id="cartpage">
      <div className="Container">
        <h1>Your Cart</h1>
        <div className="cartGroup">
          <div className="cartItems">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="cartItem">
                <img
                  src={require(`../Assets/Images/inspiredTest.jpg`)}
                  alt="inspired-img"
                />
                <div>
                  <p id="itemTitle">
                    Iphone X with something super expensive etc.
                  </p>
                  <span>
                    <p>$400</p>
                    <select name="quantity" id="cartQuantity">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </span>
                  <button>
                    <BsFillTrash3Fill />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cartSummary">
            <h2>Order Summary</h2>
            <span>
              <p>Subtotal</p>
              <p>$100</p>
            </span>
            <span>
              <p>Shipping estimate</p>
              <p>$5.00</p>
            </span>
            <span>
              <p>Order total</p>
              <p>$105</p>
            </span>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
