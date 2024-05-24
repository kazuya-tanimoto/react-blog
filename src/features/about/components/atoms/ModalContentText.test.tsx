import { render, screen } from "@testing-library/react";
import { ModalContentText } from "./ModalContentText.tsx";

describe("ModalContentText", () => {
  it("renders the text content correctly", () => {
    render(<ModalContentText>Test Content</ModalContentText>);
    const contentElement = screen.getByText(/Test Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("applies additional text props correctly", () => {
    render(<ModalContentText color="#182AB3">Test Content</ModalContentText>);
    const contentElement = screen.getByText(/Test Content/i);
    expect(contentElement).toHaveStyle("color: #182AB3");
  });
});
