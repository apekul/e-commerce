import React from "react";
import Item from "./Item";

const AllItems = ({ data }) => {
  return (
    <section className="AllItemGroup">
      {data.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </section>
  );
};

export default AllItems;
