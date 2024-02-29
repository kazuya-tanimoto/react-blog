// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { MyComponent } from "./MyComponent.tsx";

test("「Hello Test」が描画されている", () => {
  render(<MyComponent />);
  // screen.debug();
  /* eslint-disable-next-line @typescript-eslint/no-unsafe-call */
  expect(screen.getByText("Hello Test")).toBeInTheDocument();
});
