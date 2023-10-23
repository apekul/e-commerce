import React, { useState, useContext } from "react";
import { UserContext } from "../context";
import { AiOutlineHeart, AiFillStar, AiFillHeart } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";

const Item = ({ item }) => {
  const [swapImage, setSwapImage] = useState({ id: null, img: "" });
  const [userData, setUserData] = useContext(UserContext);

  const updateCart = () => {
    const check = userData.cart.find((e) => e.id === item.id);
    setUserData((prev) => ({ ...prev, cart: [...prev.cart, item] }));
  };

  const updateFav = () => {
    const check = userData.favourites.find((e) => e.id === item.id);
    if (check) {
      return setUserData((prev) => ({
        ...prev,
        favourites: [...prev.favourites].filter((v) => v.id !== item.id),
      }));
    }
    return setUserData((prev) => ({
      ...prev,
      favourites: [...prev.favourites, item],
    }));
  };

  const swapImageFunc = (id, img) => {
    setSwapImage(() => ({ id, img }));
  };

  return (
    <div className="ProductFrame">
      {userData.favourites.find((e) => e.id === item.id) ? (
        <AiFillHeart
          className="ProductIcon IconTop"
          style={{ color: "red" }}
          onClick={() => updateFav()}
        />
      ) : (
        <AiOutlineHeart
          className="ProductIcon IconTop"
          onClick={() => updateFav()}
        />
      )}
      <BiCartAdd
        className="ProductIcon IconBottom"
        onClick={() => updateCart()}
      />
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
