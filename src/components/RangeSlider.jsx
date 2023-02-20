import React, { useState, useEffect } from "react";

const RangeSlider = ({ label, setState, defaultValue, minValue, maxValue, disabled, sliderTestId }) => {
  const [value, setValue] = useState(defaultValue);
  const [showValueHover, setShowValueHover] = useState(false);

  useEffect(() => {
    setState(defaultValue)
  }, [])

  const handleChange = (e) => {
    setValue(Number(e.target.value));
    setState(Number(e.target.value));
  };

  return (
    <div className="range-slider">
      <label>
        {label}
        <div className="slider-container">
          <input
            data-testid={sliderTestId}
            type="range"
            min={minValue}
            max={maxValue}
            value={value}
            onChange={handleChange}
            onMouseEnter={() => setShowValueHover(true)}
            onMouseLeave={() => setShowValueHover(false)}
            disabled={disabled}
          />
          {showValueHover && <div className="hover-value">{value}</div>}
        </div>
      </label>
    </div>
  );
};

export default RangeSlider;
