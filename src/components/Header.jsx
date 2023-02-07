import { useState } from "react";
import CustomSelect from "./CustomSelect";

const Header = ({ onChange, randomize, sort, canSort }) => {
  return (
    <nav>
      <div className="nav-logo">
        <h1>sorting-visualizer</h1>
      </div>
      <CustomSelect onChange={onChange} />
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
