import React, { useState, useContext } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BsCheck, BsSortDownAlt, BsSortUpAlt } from "react-icons/bs";
import { Context } from "../context";
import PriceRange from "../Components/priceRange";
import AllItems from "../Components/AllItems";

const AllProductsPage = () => {
  const [data] = useContext(Context);

  // Show filter tab based on current ID
  const [show, setShow] = useState(undefined);

  // filter by category
  const [type, setType] = useState([]);

  // filter by price range
  const value = {
    min: 0,
    max: Math.max(...Object.values(data).map((v) => v.price)),
  };
  const [range, setRange] = React.useState([value.min, value.max]);

  // filter by rating
  const [rating, setRating] = useState(true);

  const ref = React.useRef();

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

  React.useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(undefined);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return (
    <section id="allProductsPage">
      <div className="Container">
        <div className="filterPanelGroup" ref={ref}>
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
                style={{
                  visibility:
                    range[0] !== value.min || range[1] !== value.max
                      ? "visible"
                      : "hidden",
                }}
              >
                1
              </div>
              {show === "filterPrice" ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </div>
            <div
              className="filterList priceBefore"
              style={{
                visibility: show === "filterPrice" ? "visible" : "hidden",
              }}
            >
              <PriceRange value={value} range={range} setRange={setRange} />
            </div>
          </div>
          {/* Filter by Rate */}
          <div className="filterButtonGroup">
            <div
              id="filterRate"
              className="filterButton"
              onClick={(e) => setRating(!rating)}
            >
              <p>Rate</p>
              <div className="filterMark" style={{ visibility: "hidden" }}>
                1
              </div>
              {rating ? <BsSortUpAlt /> : <BsSortDownAlt />}
            </div>
          </div>
        </div>
        <AllItems data={data} type={type} range={range} rating={rating} />
      </div>
    </section>
  );
};

export default AllProductsPage;
