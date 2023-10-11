import React from "react";

const Banner = ({ val, content }) => {
  return (
    <section className={`BannerSection ${val}`}>
      <img src={require(`../Assets/Images/furniture.jpg`)} alt="bannerImg" />
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
