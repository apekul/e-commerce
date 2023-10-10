import React, { useContext } from "react";
import Hero from "../Components/Hero";
import ScrollableSection from "../Components/ScrollableSection";
import { Context, UserContext } from "../context";

const Homepage = () => {
  const [data, setData] = useContext(Context);
  const [userData, setUserData] = useContext(UserContext);

  return (
    <section id="homepage">
      <div className="Container">
        <Hero categories={[...new Set(data.map((v, i) => v.category))]} />
        <ScrollableSection data={data.slice(0, 10)} title="Trending Now" />
        <ScrollableSection data={data.slice(0, 10)} title="Bestsellers" />
      </div>
    </section>
  );
};

export default Homepage;
