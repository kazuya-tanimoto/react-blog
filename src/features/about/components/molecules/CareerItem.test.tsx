import { render, screen } from "@testing-library/react";
import { CareerItem } from "./CareerItem.tsx";

describe("Career Item", () => {
  it("renders title, summary, and keywords", () => {
    render(
      <CareerItem
        title="Test Title"
        summary="Test Summary"
        keywords="Test Keywords"
        color="blue"
        from="2022"
      />,
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Summary")).toBeInTheDocument();
    expect(screen.getByText("Test Keywords")).toBeInTheDocument();
  });

  it('renders "from" and "to" date when provided', () => {
    render(
      <CareerItem
        title="Test Title"
        summary="Test Summary"
        keywords="Test Keywords"
        color="blue"
        from="2022/09"
        to="2023/08"
      />,
    );

    expect(screen.getByText(/2022\/09/i)).toBeInTheDocument();
    expect(screen.getByText(/2023\/08/i)).toBeInTheDocument();
  });

  it('renders "現在" when "to" date is not provided', () => {
    render(
      <CareerItem
        title="Test Title"
        summary="Test Summary"
        keywords="Test Keywords"
        color="blue"
        from="202209"
      />,
    );

    expect(screen.getByText(/現在/i)).toBeInTheDocument();
  });
});
