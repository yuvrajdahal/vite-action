import React from "react";


import App from "./App";
import "@testing-library/jest-dom/vitest";

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders vite", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
});
