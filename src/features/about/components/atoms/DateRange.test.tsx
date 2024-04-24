import { useBreakpointValue } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { DateRange } from "./DateRange.tsx";

describe("DateRange component", () => {
  it("renders with default 'to' value when not provided", () => {
    render(<DateRange color="blue" from="2000/01" />);
    const dateRangeElement = screen.getByText(/現在/i);
    expect(dateRangeElement).toBeInTheDocument();
  });

  it("renders with provided 'to' value", () => {
    render(<DateRange color="blue" from="2000/01" to="2020/12" />);
    const dateRangeElement = screen.getByText(/2020\/12/i);
    expect(dateRangeElement).toBeInTheDocument();
  });

  it("renders with provided 'from' value", () => {
    render(<DateRange color="blue" from="2000/01" />);
    const dateRangeElement = screen.getByText(/2000\/01/i);
    expect(dateRangeElement).toBeInTheDocument();
  });

  it("renders with correct color", () => {
    render(<DateRange color="#182AB3" from="2000" />);
    const dateRangeElement = screen.getByTestId("date-range");
    expect(dateRangeElement).toHaveStyle("background-color: #182AB3");
  });

  it("renders correctly when breakpoint is 'base'", () => {
    vi.mocked(useBreakpointValue).mockReturnValue(true);
    render(<DateRange color="blue" from="2000/01" />);
    const dateRangeElement = screen.getByText(/2000\/01 → 現在/i);
    expect(dateRangeElement).toBeInTheDocument();
  });
});
