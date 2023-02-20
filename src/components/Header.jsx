import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
import RangeSlider from "./RangeSlider";

const Header = ({
  setChosenAlgo,
  randomize,
  sort,
  canSort,
  setSpeed,
  setNumberOfBars,
  isRunning,
}) => {
  const [showHamburgerNav, setShowHamburgerNav] = useState(false);

  return (
    <header>
      <div className="nav-logo">
        <h1>sorting-visualizer</h1>
      </div>
      <button className="hamburger-icon" onClick={() => setShowHamburgerNav(prev => !prev)}>
        <svg viewBox="0 0 100 70" width="40" height="30">
          <rect width="100" height="10" rx="10"></rect>
          <rect y="30" width="100" height="10" rx="10"></rect>
          <rect y="60" width="100" height="10" rx="10"></rect>
        </svg>
      </button>
      <nav className={showHamburgerNav ? `show-hamburger-nav` : ''}>
        <CustomSelect
          onChange={(e) => setChosenAlgo(e.value)}
          disabled={isRunning}
        />
        <RangeSlider
          label={"Speed"}
          setState={setSpeed}
          defaultValue={50}
          minValue={1}
          maxValue={100}
          disabled={isRunning}
        />
        <RangeSlider
          label={"Size"}
          setState={setNumberOfBars}
          defaultValue={50}
          minValue={5}
          maxValue={100}
          disabled={isRunning}
        />
        <div className="nav-btns">
          <button
            className="randomize-btn"
            type="button"
            onClick={randomize}
            disabled={isRunning}
          >
            Randomize
          </button>
          <button
            className="sort-btn"
            type="button"
            onClick={() => {
              setShowHamburgerNav(false);
              sort();
            }}
            disabled={!canSort}
          >
            Sort
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
