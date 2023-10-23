import React, { useContext } from "react";
import Hero from "../Components/Hero";
import ScrollableSection from "../Components/ScrollableSection";
import { Context, UserContext } from "../context";
import Banner from "../Components/Banner";
import GetInspired from "../Components/GetInspired";

const Homepage = () => {
  const [data, setData] = useContext(Context);
  const [userData, setUserData] = useContext(UserContext);

  return (
    <section id="homepage">
      <div className="Container">
        <Hero categories={[...new Set(data.map((v, i) => v.category))]} />
        <Banner
          img=""
          content={{
            img: "",
            title: "Comfortable & Elegante Living",
            content:
              "RAOUF Products are all made to standard sizes so that you can mix and match them freely.",
          }}
          link="/"
        />
        <ScrollableSection data={data.slice(0, 10)} title="Trending Now" />
        <GetInspired />
        <ScrollableSection data={data.slice(0, 10)} title="Bestsellers" />
        <Banner
          val="BannerReverse"
          content={{
            img: "",
            title: "Comfortable & Elegante Living",
            content:
              "RAOUF Products are all made to standard sizes so that you can mix and match them freely.",
            link: "/",
          }}
        />
      </div>
    </section>
  );
};

export default Homepage;
