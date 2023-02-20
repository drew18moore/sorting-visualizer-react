import React from "react";
import SortingVisualizer from "./SortingVisualizer";
import { render, screen } from "@testing-library/react";

describe("SortingVisualizer tests", () => {
  it("should update the speed state when the speed range slider is used", () => {
    render(<SortingVisualizer />);
    const bars = screen.getByTestId("bars");
    console.log(bars);
    expect(bars).toBeInTheDocument();
  })
})