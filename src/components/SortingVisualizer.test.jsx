import React from "react";
import SortingVisualizer from "./SortingVisualizer";
import { render, screen } from "@testing-library/react";

describe("numberOfBars", () => {
  it("should match the default value of the size slider on initial load.", () => {
    render(<SortingVisualizer />);

    const sizeSlider = screen.getByTestId("size-slider");
    const sizeSliderValue = Number(sizeSlider.closest("input").value);

    const bars = screen.getByTestId("bars");
    const barsCount = bars.childElementCount;

    expect(sizeSliderValue).toEqual(barsCount);
  });
});
