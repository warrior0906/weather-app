import { render } from "@testing-library/react";
import Dashboard from "../../../src/app/screens/Dashboard";

describe("Dashboard component", () => {
  it("should render Dashboard component correctly", () => {
    render(<Dashboard />);
  });
});