import React, { useState, useEffect } from "react";
import Item from "./Item";

const AllItems = ({ data, type, range, rating }) => {
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    // if (type.length > 0) {
    //   return setFilter(
    //     data.filter((v) => {
    //       return (
    //         type.includes(v.category) &&
    //         v.price >= range[0] &&
    //         v.price <= range[1]
    //       );
    //     })
    //   );
    // }
    // setFilter(
    //   data.filter((v) => {
    //     return v.price >= range[0] && v.price <= range[1];
    //   })
    // );
    const filtered = data.filter((v) => {
      if (type.length > 0) {
        return (
          type.includes(v.category) &&
          v.price >= range[0] &&
          v.price <= range[1]
        );
      }
      return v.price >= range[0] && v.price <= range[1];
    });
    setFilter(
      filtered.sort((a, b) =>
        rating ? b.rating - a.rating : a.rating - b.rating
      )
    );
  }, [type, range, rating]);

  return (
    <section className="AllItemGroup">
      {filter.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </section>
  );
};

export default AllItems;
