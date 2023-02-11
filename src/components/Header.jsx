import { useState } from "react";
import CustomSelect from "./CustomSelect";
import RangeSlider from "./RangeSlider";

const Header = ({ setChosenAlgo, randomize, sort, canSort, setSpeed, setNumberOfBars, isRunning }) => {
  return (
    <nav>
      <div className="nav-logo">
        <h1>sorting-visualizer</h1>
      </div>
      <CustomSelect onChange={(e) => setChosenAlgo(e.value)} disabled={isRunning} />
      <RangeSlider label={"Speed"} setState={setSpeed} defaultValue={50} minValue={1} maxValue={100} disabled={isRunning} />
      <RangeSlider label={"Size"} setState={setNumberOfBars} defaultValue={50} minValue={5} maxValue={100} disabled={isRunning} />
      <div className="nav-btns">
        <button className="randomize-btn" type="button" onClick={randomize} disabled={isRunning}>
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
