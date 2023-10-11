import React, { useState, useEffect } from "react";
import {
  AiFillStar,
  AiFillPlusSquare,
  AiFillMinusSquare,
} from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";

const Product = ({ item }) => {
  const [swapImage, setSwapImage] = useState(null);
  const [totalPrice, setTotalPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(1);
  const [inStock, setInStock] = useState(10);

  const Increment = () => {
    if (quantity === inStock) return;
    setQuantity((prev) => prev + 1);
  };
  const Decrement = () => {
    if (quantity <= 1) return setQuantity(1);
    setQuantity((prev) => prev - 1);
  };

  const swapImageFunc = (img) => {
    setSwapImage(img);
  };

  useEffect(() => {
    setTotalPrice(quantity * item.price);
  }, [quantity]);

  return (
    <section id="product">
      <div className="ProductGroup">
        <div>
          <img src={swapImage || item.images[0]} alt={item.title} />
          <div className="ProductHoverImages">
            {Object.values(item.images).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={item.title}
                onMouseOver={() => swapImageFunc(img)}
                onMouseLeave={() => swapImageFunc(null)}
              />
            ))}
          </div>
        </div>
        <div className="ProductBox">
          <span className="ProductHeaderGroup">
            <h1>{item.title}</h1>
            <span className="RatingGroup">
              {Array.from({ length: 5 }).map((_, key) => (
                <React.Fragment key={key}>
                  {Math.round(item.rating) <= key ? (
                    <AiFillStar color="lightgray" size="20px" />
                  ) : (
                    <AiFillStar color="#fbbf24" size="20px" />
                  )}
                </React.Fragment>
              ))}
              <p>{item.rating}</p>
            </span>
            <p>category: {item.category}</p>
            <p className="ProductPrice">${item.price}</p>
          </span>
          <p className="ProductDesctription">{item.description}</p>
          {/* Cart buttons */}
          <div className="CartButtonGroup">
            <p className="ProductPrice">${totalPrice}</p>
            <div className="QuantityGroup">
              <AiFillMinusSquare
                className="QuantityButton"
                onClick={() => Decrement()}
              />
              <p>{quantity}</p>
              <AiFillPlusSquare
                className="QuantityButton"
                onClick={() => Increment()}
              />
            </div>
            <button>Add to cart</button>
          </div>

          {/* StockInfo */}
          <div className="ProductStockInfo">
            <div className="StockInfoGroup">
              <span className="StockText">
                <p>In Stock: </p>
                <p>{inStock}</p>
              </span>
              <p>2-4 working days</p>
              <span>
                <p>Standard Delivery: </p>
                <p>2.99$</p>
              </span>
              <span>
                <BsArrowCounterclockwise />
                <p>100 Day return policy</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
