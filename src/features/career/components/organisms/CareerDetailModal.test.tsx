import { fireEvent, render, screen } from "@testing-library/react";
import { CareerDetailModal } from "./CareerDetailModal";

describe("CareerDetailModal", () => {
  const onCloseMock = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(
      <CareerDetailModal
        isOpen={true}
        onClose={onCloseMock}
        id={1}
        color="blue.600"
      />,
    );

    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    render(
      <CareerDetailModal
        isOpen={true}
        onClose={onCloseMock}
        id={1}
        color="blue.600"
      />,
    );

    fireEvent.click(screen.getByText("Close"));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("does not render the modal when isOpen is false", () => {
    render(
      <CareerDetailModal
        isOpen={false}
        onClose={onCloseMock}
        id={1}
        color="blue.600"
      />,
    );

    expect(screen.queryByText("Close")).not.toBeInTheDocument();
  });
});
