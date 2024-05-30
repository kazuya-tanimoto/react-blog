// src/features/about/components/molecules/SubTitle.test.tsx
import { render, screen } from "@testing-library/react";
import { SubTitle } from "./SubTitle";

describe("SubTitle component", () => {
  it("renders without crashing", () => {
    render(<SubTitle>Test SubTitle</SubTitle>);
    const element = screen.getByText("Test SubTitle");
    expect(element).toBeInTheDocument();
  });

  it("renders the correct number of line items", () => {
    render(<SubTitle lineItems={3}>Test SubTitle</SubTitle>);
    const elements = screen.getAllByTestId(/line-item-/);
    expect(elements.length).toBe(3);
  });

  it("not render line items when count 0 provided", () => {
    render(<SubTitle lineItems={0}>Test SubTitle</SubTitle>);
    const elements = screen.queryAllByTestId(/line-item-/);
    expect(elements.length).toBe(0);
  });

  it("renders the correct text", () => {
    render(<SubTitle>Test SubTitle</SubTitle>);
    const element = screen.getByText("Test SubTitle");
    expect(element).toHaveTextContent("Test SubTitle");
  });
});
