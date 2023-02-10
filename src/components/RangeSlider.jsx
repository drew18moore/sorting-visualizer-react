import { useState } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState(50);
  const [showValueHover, setShowValueHover] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="range-slider">
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
  );
};

export default RangeSlider;
