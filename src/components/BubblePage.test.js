import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  render(<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  render(<BubblePage/>);

  const colors = screen.findByText(/blue/i);
  expect(colors).toBeInTheDocument;
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading