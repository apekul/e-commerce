import React from "react";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const PriceRange = ({ value, range, setRange }) => {
  // const [range, setRange] = React.useState([value.min, value.max]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  const handleInputChange = (event, val) => {
    if (val === "min") {
      return setRange(([min, max]) => [event.target.value, max]);
    }
    setRange(([min, max]) => [min, event.target.value]);
  };

  const handleBlur = () => {
    if (range[0] < 0) {
      setRange(([min, max]) => [value.min, max]);
    } else if (range[1] > 100) {
      setRange(([min, max]) => [min, value.max]);
    }
  };
  return (
    <div
      style={{ width: "200px", padding: "20px" }}
      className="PriceRangeContainer"
    >
      <div className="PriceRangeGroup">
        <span>
          $
          <MuiInput
            value={range[0]}
            size="small"
            onChange={(event) => handleInputChange(event, "min")}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: value.min,
              max: value.max,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </span>
        <span>-</span>
        <span>
          $
          <MuiInput
            value={range[1]}
            size="small"
            onChange={(event) => handleInputChange(event, "max")}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: value.min,
              max: value.max,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </span>
      </div>
      <Slider
        value={range}
        onChange={handleChanges}
        max={value.max}
        min={value.min}
      />
      <button onClick={() => setRange([value.min, value.max])}>Reset</button>
    </div>
  );
};

export default PriceRange;
