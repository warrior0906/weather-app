import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Dashboard } from "../../../src/app/screens/Dashboard";

describe("Dashboard component", () => {
  it("should render Dashboard component correctly", () => {
    render(<Dashboard />);
    const element = screen.getByText(/Weather App/i);
    expect(element).toBeInTheDocument();
  });
});