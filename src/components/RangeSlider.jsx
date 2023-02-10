import { useState } from "react";

const RangeSlider = ({ setSpeed }) => {
  const [value, setValue] = useState(50);
  const [showValueHover, setShowValueHover] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setSpeed((-999/99) * e.target.value + 1010);
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
