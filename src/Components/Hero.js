import React from "react";

const Hero = ({ categories }) => {
  return (
    <section id="heroGrid">
      {categories.map((v, i) => (
        <div className={`heroItem${i + 1} HeroGroup`} key={i}>
          <a href="/Allproducts">
            <img src={require(`../Assets/HeroImages/${v}.jpg`)} alt="heroImg" />
            <p>{v.replace("-", " ")}</p>
          </a>
        </div>
      ))}
      <div className={`heroItem${4} HeroGroup`}>
        <a href="/Allproducts">
          <img
            src={require(`../Assets/HeroImages/smartphones.jpg`)}
            alt="heroImg"
          />
          <p>Smartphones</p>
        </a>
      </div>
    </section>
  );
};

export default Hero;
