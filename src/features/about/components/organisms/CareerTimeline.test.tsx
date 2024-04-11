import { useBreakpointValue } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import type { CareerItems } from "../../types/Career.ts";
import { CareerTimeline } from "./CareerTimeline.tsx";

const data: CareerItems = {
  items: [
    {
      title: "Test Title 1",
      summary: "Test Summary 1",
      keywords: "Test Keywords 1",
      color: "blue",
      from: "2020/01",
      to: "2020/12",
    },
    {
      title: "Test Title 2",
      summary: "Test Summary 2",
      keywords: "Test Keywords 2",
      color: "red",
      from: "2022/01",
      to: "2022/12",
    },
  ],
};
describe("CareerTimeline component", () => {
  it("renders with provided items when breakpoint isn't 'base'", () => {
    render(<CareerTimeline items={[data.items[0]]} />);
    // with CareerItemNumber
    const noElement = screen.getByText("1");
    expect(noElement).toBeInTheDocument();

    // other elements
    const titleElement = screen.getByText("Test Title 1");
    expect(titleElement).toBeInTheDocument();
    const dateElement = screen.getByText(/2020\/01/i);
    expect(dateElement).toBeInTheDocument();
  });

  it("renders with provided items when breakpoint is 'base'", () => {
    vi.mocked(useBreakpointValue).mockImplementation(() => true);
    render(<CareerTimeline items={[data.items[1]]} />);
    // without CareerItemNumber
    const noElement = screen.queryByText("1");
    expect(noElement).not.toBeInTheDocument();

    // other elements
    const titleElement = screen.getByText("Test Title 2");
    expect(titleElement).toBeInTheDocument();
    const dateElement = screen.getByText(/2022\/01/i);
    expect(dateElement).toBeInTheDocument();
  });

  it("renders multiple items", () => {
    render(<CareerTimeline items={data.items} />);
    const titleElement1 = screen.getByText("Test Title 1");
    const dateElement1 = screen.getByText(/2020\/01/i);

    expect(titleElement1).toBeInTheDocument();
    expect(dateElement1).toBeInTheDocument();

    const titleElement2 = screen.getByText("Test Title 2");
    const dateElement2 = screen.getByText(/2022\/01/i);
    expect(titleElement2).toBeInTheDocument();
    expect(dateElement2).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(2);
  });

  it("does not render when items are empty", () => {
    const data = { items: [] };
    render(<CareerTimeline items={data.items} />);
    const timelineElement = screen.queryByRole("list");
    expect(timelineElement).not.toBeInTheDocument();
  });
});
