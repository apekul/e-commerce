import React, { useContext } from "react";
import Hero from "../Components/Hero";
import ScrollableSection from "../Components/ScrollableSection";
import { Context } from "../context";
import Banner from "../Components/Banner";
import GetInspired from "../Components/GetInspired";

const Homepage = () => {
  const [data] = useContext(Context);

  return (
    <section id="homepage">
      <div className="Container">
        <Hero categories={[...new Set(data.map((v, i) => v.category))]} />
        <Banner
          img=""
          content={{
            img: require(`../Assets/Images/lens.jpg`),
            title: "It's the little things",
            content: "Capture the moments that matter most.",
            link: "/Allproducts",
          }}
        />
        <ScrollableSection data={data.slice(0, 10)} title="Trending Now" />
        {/* <GetInspired /> */}
        <Banner
          val="BannerReverse"
          content={{
            img: require(`../Assets/Images/furniture.jpg`),
            title: "Comfortable & Elegante Living",
            content:
              "Discover home decoration and create the space of your dreams.",
            link: "/Allproducts",
            pos: "left",
          }}
        />
        <ScrollableSection data={data.slice(0, 10)} title="Bestsellers" />
      </div>
    </section>
  );
};

export default Homepage;
