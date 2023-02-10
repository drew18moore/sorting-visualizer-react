import { useState, useEffect } from "react";

const RangeSlider = ({ label, setState, defaultValue }) => {
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
            type="range"
            min={1}
            max={100}
            value={value}
            onChange={handleChange}
            onMouseEnter={() => setShowValueHover(true)}
            onMouseLeave={() => setShowValueHover(false)}
          />
          {showValueHover && <div className="hover-value">{value}</div>}
        </div>
      </label>
    </div>
  );
};

export default RangeSlider;
