import { render, screen } from "@testing-library/react";
import { CareerItemNumber } from "./CareerItemNumber";

describe("CareerItemNumber", () => {
  it("displays arrow for zero index", () => {
    render(<CareerItemNumber index={0} />);
    expect(screen.getByTestId("arrow")).toBeInTheDocument();
  });

  it("displays the correct item number", () => {
    const index = 5;
    render(<CareerItemNumber index={index} />);
    expect(screen.getByText(index + 1)).toBeInTheDocument();
  });

  it("does not display arrow for non-zero index", () => {
    render(<CareerItemNumber index={2} />);
    expect(screen.queryByTestId("arrow")).not.toBeInTheDocument();
  });
});
