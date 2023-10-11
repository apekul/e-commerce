import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import ScrollableSection from "../Components/ScrollableSection";
import Product from "../Components/Product";

const ProductPage = () => {
  const [data, setData] = useContext(Context);
  const { id } = useParams();
  return (
    <section id="productpage">
      <div className="Container">
        <Product item={data.filter((v) => v.id === +id)[0]} />
        <ScrollableSection data={data.slice(0, 10)} title="Trending Now" />
      </div>
    </section>
  );
};

export default ProductPage;
