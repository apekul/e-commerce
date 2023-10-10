import React, { useRef, useState } from "react";
import {
  AiOutlineHeart,
  AiFillStar,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

const ScrollableSection = ({ data, title }) => {
  const trendingRef = useRef(null);
  const [swapImage, setSwapImage] = useState({ id: null, img: "" });

  const scroll = (scrollOffset) => {
    trendingRef.current.scrollLeft += scrollOffset;
  };

  const swapImageFunc = (id, img) => {
    setSwapImage(() => ({ id, img }));
  };

  return (
    <section id="trendingSection">
      <div className="TrendingGroup">
        <h1>{title}</h1>
        <ul ref={trendingRef}>
          {Object.values(data)
          .map((item, index) => (
            <li key={index}>
              <a href="/">
                <span>
                  <AiOutlineHeart size="25px" className="HeartButton" />
                </span>
                <img
                  src={
                    swapImage.id === item.id ? swapImage.img : item.images[0]
                  }
                  alt={item.title}
                />
                {/*  */}
                <div className="TrendingHoverImages">
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
                {/*  */}
                <div className="TrendingTextGroup">
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
                    <p>({item.rating})</p>
                  </span>
                  <p>${item.price}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <AiOutlineLeft
          size="30px"
          className="NextButton"
          id="left-button"
          onClick={() => scroll(-550)}
        />
        <AiOutlineRight
          size="30px"
          className="NextButton"
          id="right-button"
          onClick={() => scroll(550)}
        />
      </div>
    </section>
  );
};

export default ScrollableSection;
