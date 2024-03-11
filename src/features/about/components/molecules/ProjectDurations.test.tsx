import { render, screen } from "@testing-library/react";
import { ProjectDuration } from "./ProjectDuration.tsx";

describe("renders correctly y", () => {
  it("Searched for 'from' and rendered correctly", () => {
    render(<ProjectDuration bg="red" font="white" from="2020" to="2022" />);
    const textElement = screen.getByText(/2020/i);
    expect(textElement).toBeInTheDocument();
  });

  it("Searched for 'to' and rendered correctly", () => {
    render(<ProjectDuration bg="red" font="white" from="2020" to="2022" />);
    const textElement = screen.getByText(/2022/i);
    expect(textElement).toBeInTheDocument();
  });

  it("renders correctly when 'to' prop is not provided", () => {
    render(<ProjectDuration bg="red" font="white" from="2020" />);
    const textElement = screen.getByText(/現在/i);
    expect(textElement).toBeInTheDocument();
  });

  it("renders correctly with different 'bg' and 'font' props", () => {
    render(<ProjectDuration bg="blue" font="yellow" from="2020" to="2022" />);
    const textElement = screen.getByText(/2022/i);
    expect(textElement).toBeInTheDocument();
  });
});
