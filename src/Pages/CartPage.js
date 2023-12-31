import React, { useContext } from "react";
import { UserContext } from "../context";
import { BsFillTrash3Fill } from "react-icons/bs";

const CartPage = () => {
  const [userData, setUserData] = useContext(UserContext);

  const removeFromCart = (id) => {
    setUserData((prev) => ({
      ...prev,
      cart: [...prev.cart].filter((v) => v.id !== id),
    }));
  };
  return (
    <section id="cartpage">
      <div className="Container">
        <div className="cartGroup">
          <div className="cartItems">
            {userData.cart.length <= 0 ? (
              <div>Your cart is empty</div>
            ) : (
              userData.cart.map((item, i) => (
                <div key={i} className="cartItem">
                  <a href={`/product/${item.id}`}>
                    <img src={item.images[0]} alt="inspired-img" />
                  </a>
                  <div>
                    <p id="itemTitle">{item.description}</p>
                    <span>
                      <p>${item.price}</p>
                      <select name="quantity" id="cartQuantity">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </span>
                    <button>
                      <BsFillTrash3Fill
                        onClick={() => removeFromCart(item.id)}
                      />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="cartSummary">
            <h2>Order Summary</h2>
            <span>
              <p>Subtotal</p>
              <p>
                ${userData.cart.reduce((acc, curr) => acc + +curr.price, 0)}
              </p>
            </span>
            <span>
              <p>Shipping estimate</p>
              <p>$5.00</p>
            </span>
            <span>
              <p>Order total</p>
              <p>
                ${userData.cart.reduce((acc, curr) => acc + +curr.price, 0) + 5}
              </p>
            </span>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
