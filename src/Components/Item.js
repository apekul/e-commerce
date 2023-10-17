import React, { useState } from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";

const Item = ({ item }) => {
  const [swapImage, setSwapImage] = useState({ id: null, img: "" });

  const swapImageFunc = (id, img) => {
    setSwapImage(() => ({ id, img }));
  };
  return (
    <div className="ProductFrame">
      <AiOutlineHeart className="ProductIcon IconTop" />
      <BiCartAdd className="ProductIcon IconBottom" />
      <a href={`/product/${item.id}`}>
        <img
          src={swapImage.id === item.id ? swapImage.img : item.images[0]}
          alt={item.title}
          className="ProductMainImg"
        />
        <div>
          <p>{item.title}</p>
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
            <p>{item.rating}</p>
          </span>
          <p>${item.price}</p>
        </div>
      </a>
      <div className="ProductImages">
        {Object.values(item.images.slice(0, 4)).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={item.title}
            onMouseOver={() => swapImageFunc(item.id, img)}
            onMouseLeave={() => swapImageFunc({ id: null, img: "" })}
          />
        ))}
      </div>
    </div>
  );
};

export default Item;
