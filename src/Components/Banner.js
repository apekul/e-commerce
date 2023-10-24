import React from "react";

const Banner = ({ val, content }) => {
  return (
    <section className={`BannerSection ${val} `}>
      <img
        src={content.img}
        alt="bannerImg"
        style={content.pos && { objectPosition: "left" }}
      />
      <div>
        <span>
          <h1>{content.title}</h1>
          <p>{content.content}</p>
          <a href={content.link}>SHOP NOW</a>
        </span>
      </div>
    </section>
  );
};

export default Banner;
