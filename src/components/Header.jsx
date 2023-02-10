import { useState } from "react";
import CustomSelect from "./CustomSelect";
import RangeSlider from "./RangeSlider";

const Header = ({ setChosenAlgo, randomize, sort, canSort }) => {
  return (
    <nav>
      <div className="nav-logo">
        <h1>sorting-visualizer</h1>
      </div>
      <CustomSelect onChange={(e) => setChosenAlgo(e.value)} />
      <RangeSlider />
      <div className="nav-btns">
        <button className="randomize-btn" type="button" onClick={randomize}>
          Randomize
        </button>
        <button className="sort-btn" type="button" onClick={sort} disabled={!canSort}>
          Sort
        </button>
      </div>
    </nav>
  );
};

export default Header;
