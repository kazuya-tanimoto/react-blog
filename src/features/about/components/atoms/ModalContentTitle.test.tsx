import { render, screen } from "@testing-library/react";
import { ModalContentTitle } from "./ModalContentTitle.tsx";

describe("ModalContentTitle", () => {
  it("renders the title text correctly", () => {
    render(<ModalContentTitle>Test Title</ModalContentTitle>);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("applies additional text props correctly", () => {
    render(<ModalContentTitle color="#182AB3">Test Title</ModalContentTitle>);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toHaveStyle("color: #182AB3");
  });
});
