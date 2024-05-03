import type React from "react";
import { render, type RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

export const renderWithRouter = (
  ui: React.ReactElement,
  { route = "/" } = {},
): { user: typeof userEvent; renderResult: RenderResult } => {
  window.history.pushState({}, "Test page", route);

  const renderResult = render(ui, { wrapper: BrowserRouter });

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    user: userEvent,
    renderResult,
  };
};
