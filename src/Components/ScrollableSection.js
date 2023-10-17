import React, { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Item from "./Item";

const ScrollableSection = ({ data, title }) => {
  const trendingRef = useRef(null);
  const scroll = (scrollOffset) => {
    trendingRef.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="trendingSection">
      <div className="TrendingGroup">
        <h1>{title}</h1>
        <div ref={trendingRef} className="TrendingDisplay">
          {data.slice(0, 10).map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </div>
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
