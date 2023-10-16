import React from "react";

const GetInspired = () => {
  const numbOfItems = 6;
  return (
    <section className="GetInspiredSection">
      <h1>Get Inspired</h1>
      <div
        className="InspiredGrid"
        // style={{ gridTemplateRows: `reapet(${(numbOfItems / 3) * 5}, 1fr)` }}
      >
        {Array.from({ length: numbOfItems }).map((item, index) => (
          <div key={index}>
            <img
              src={require(`../Assets/Images/inspiredTest.jpg`)}
              alt="inspired-img"
            />
          </div>
        ))}
      </div>
      <button>Load More</button>
    </section>
  );
};

export default GetInspired;
