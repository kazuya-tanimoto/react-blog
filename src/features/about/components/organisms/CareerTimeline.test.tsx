import { render, screen } from "@testing-library/react";
import type { CareerItems } from "../../types/Career.ts";
import { CareerTimeline } from "./CareerTimeline.tsx";

describe("CareerTimeline component", () => {
  it("renders with provided items", () => {
    const data: CareerItems = {
      items: [
        {
          title: "Test Title",
          summary: "Test Summary",
          keywords: "Test Keywords",
          color: "blue",
          from: "2000/01",
          to: "2020/12",
        },
      ],
    };
    render(<CareerTimeline items={data.items} />);
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
    const dateElement = screen.getByText(/2000\/01/i);
    expect(dateElement).toBeInTheDocument();
  });

  it("renders multiple items", () => {
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
    render(<CareerTimeline items={data.items} />);
    const titleElement1 = screen.getByText("Test Title 1");
    const dateElement1 = screen.getByText(/2020\/01/i);

    expect(titleElement1).toBeInTheDocument();
    expect(dateElement1).toBeInTheDocument();

    const titleElement2 = screen.getByText("Test Title 2");
    const dateElement2 = screen.getByText(/2022\/01/i);
    expect(titleElement2).toBeInTheDocument();
    expect(dateElement2).toBeInTheDocument();
  });

  it("does not render when items are empty", () => {
    const data = { items: [] };
    render(<CareerTimeline items={data.items} />);
    const timelineElement = screen.queryByRole("list");
    expect(timelineElement).not.toBeInTheDocument();
  });
});
