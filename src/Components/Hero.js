import React from "react";

const Hero = ({ categories }) => {
  return (
    <section id="heroGrid">
      {categories.slice(0, 4).map((v, i) => (
        <div className={`heroItem${i + 1} HeroGroup`} key={i}>
          <a href="/Allproducts">
            <img src={require(`../Assets/HeroImages/${v}.jpg`)} alt="heroImg" />
            <p>{v}</p>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Hero;
