import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title", () => {
  render(<App />);
  const appTitleElement = screen.getByText(/Map of NYC Late Nights Spots/i);
  expect(appTitleElement).toBeInTheDocument();
});
