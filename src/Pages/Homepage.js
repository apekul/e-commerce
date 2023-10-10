import React, { useContext } from "react";
import Hero from "../Components/Hero";
import Trending from "../Components/Trending";
import { Context, UserContext } from "../context";

const Homepage = () => {
  const [data, setData] = useContext(Context);
  const [userData, setUserData] = useContext(UserContext);

  return (
    <section id="homepage">
      <div className="Container">
        <Hero categories={[...new Set(data.map((v, i) => v.category))]} />
        <Trending data={data} />
      </div>
    </section>
  );
};

export default Homepage;
