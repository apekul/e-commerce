import React from "react";
import { AiFillStar } from "react-icons/ai";

const Product = ({ item }) => {
  console.log(item);
  return (
    <section id="product">
      <div className="ProductGroup">
        <img src={item.images[0]} alt={item.title} />
        <div>
          <h1>{item.title}</h1>
          <p>{item.category}</p>
          <p>${item.price}</p>
          <span>
            {Array.from({ length: 5 }).map((_, key) => (
              <React.Fragment key={key}>
                {Math.round(item.rating) <= key ? (
                  <AiFillStar color="lightgray" size="20px" />
                ) : (
                  <AiFillStar color="#fbbf24" size="20px" />
                )}
              </React.Fragment>
            ))}
          </span>
          <p>{item.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
