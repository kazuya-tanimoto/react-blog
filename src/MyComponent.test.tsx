import { render, screen } from "@testing-library/react";
import { MyComponent } from "./MyComponent.tsx";

test("「Hello Test」が描画されている", () => {
  render(<MyComponent />);
  // screen.debug();
  const element = screen.getByText("Hello Test");
  // const element2 = screen.queryByText("Hello Test");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  expect(element).toBeInTheDocument();
  // expect(screen.getByText("Hello Test")).toBeInTheDocument();
  // expect(screen.queryByText("Hello Test")).toBeInTheDocument();
});
