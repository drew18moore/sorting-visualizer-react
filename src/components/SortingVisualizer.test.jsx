import React from "react";
import SortingVisualizer from "./SortingVisualizer";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("numberOfBars", () => {
  test("Number of rendered bars matches the default value of the size slider on initial load.", () => {
    render(<SortingVisualizer />);

    const sizeSlider = screen.getByTestId("size-slider");
    const sizeSliderValue = Number(sizeSlider.closest("input").value);

    const bars = screen.getByTestId("bars");
    const barsCount = bars.childElementCount;

    expect(sizeSliderValue).toEqual(barsCount);
  });

  test("Number of rendered bars is properly updated when the size slider is changed", () => {
    render(<SortingVisualizer />);

    const sizeSlider = screen.getByTestId("size-slider");
    const bars = screen.getByTestId("bars");
    
    fireEvent.change(sizeSlider, { target: { value: '5' } });
    expect(bars.childElementCount).toEqual(Number(sizeSlider.closest("input").value));

    fireEvent.change(sizeSlider, { target: { value: '79' } });
    expect(bars.childElementCount).toEqual(Number(sizeSlider.closest("input").value));
  })
});
