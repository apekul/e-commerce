import React, { useState, useContext, useRef } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BsCheck, BsSortDownAlt, BsSortUpAlt } from "react-icons/bs";
import { Context, UserContext } from "../context";
import PriceRange from "../Components/priceRange";

const AllProductsPage = () => {
  const [data, setData] = useContext(Context);
  const [show, setShow] = useState(undefined);
  const [type, setType] = useState([]);
  const [range, setRange] = useState();

  const PriceRangeRef = useRef();

  const updateType = (e) => {
    if (type.includes(e))
      return setType((prev) => prev.filter((item) => item !== e));
    setType((prev) => [...prev, e]);
  };

  const updateShow = (e) => {
    const { id } = e.currentTarget;
    if (show === id) return setShow(undefined);
    setShow(id);
  };

  const categories = [...new Set(data.map((v, i) => v.category))];

  return (
    <section id="allProductsPage">
      <div className="Container">
        <div className="filterPanelGroup">
          {/* Filter by type */}
          <div className="filterButtonGroup">
            <div
              id="filterType"
              className="filterButton"
              onClick={(e) => updateShow(e)}
            >
              <p>Type</p>
              <div
                className="filterMark"
                style={{ visibility: type.length > 0 ? "visible" : "hidden" }}
              >
                {type.length}
              </div>
              {show === "filterType" ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </div>
            {show === "filterType" && (
              <ul className="filterList typeBefore">
                {categories.map((category, index) => (
                  <li key={index} onClick={() => updateType(category)}>
                    <p>{category}</p>
                    {type.includes(category) && <BsCheck size="20px" />}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Filter by Price */}
          <div className="filterButtonGroup">
            <div
              id="filterPrice"
              className="filterButton"
              onClick={(e) => updateShow(e)}
            >
              <p>Price</p>
              <div
                className="filterMark"
                style={{ visibility: range ? "visible" : "hidden" }}
              >
                1
              </div>
              {show === "filterPrice" ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </div>
            <div
              ref={PriceRangeRef}
              className="filterList priceBefore"
              style={{
                visibility: show === "filterPrice" ? "visible" : "hidden",
              }}
            >
              <PriceRange value={{ min: 100, max: 1000 }} />
            </div>
          </div>
          {/* Filter by Rate */}
          <div className="filterButtonGroup">
            <div
              id="filterRate"
              className="filterButton"
              onClick={(e) => updateShow(e)}
            >
              <p>Rate</p>
              <div
                className="filterMark"
                style={{ visibility: range ? "visible" : "hidden" }}
              >
                1
              </div>
              {show === "filterRate" ? <BsSortUpAlt /> : <BsSortDownAlt />}
            </div>
          </div>
        </div>
        <div>Content Items</div>
      </div>
    </section>
  );
};

export default AllProductsPage;
