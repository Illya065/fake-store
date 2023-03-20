import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should render correctly", () => {
    render(<App />);
    const appElem = screen.getByRole("heading", {
      name: /app/i,
    });
    expect(appElem).toBeInTheDocument();
  });
});
