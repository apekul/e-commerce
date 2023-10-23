import React, { useContext } from "react";
import { Context } from "../context";
import AllItems from "../Components/AllItems";

const FavPage = () => {
  const [data] = useContext(Context);

  return (
    <section id="favouritePage">
      <div className="Container">
        <h1>Favourite Items</h1>
        <AllItems data={data} />
      </div>
    </section>
  );
};

export default FavPage;
