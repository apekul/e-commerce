import React from "react";
import { Products } from "../Assets/products";

const Homepage = () => {
  return (
    <section id="homepage">
      Homepage
      {/* <div>
        {Object.values(Products).map((item, index) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <img src={item.thumbnail} alt={item.title} />
            {item?.images.map((image, i) => (
              <div key={i}>
                <img src={image} alt={`${item.title}`} />
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Homepage;
