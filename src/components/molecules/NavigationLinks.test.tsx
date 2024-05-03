import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/RenderWithRouter.tsx";
import { NavigationLinks } from "./NavigationLinks.tsx";

it("renders all navigation links", () => {
  renderWithRouter(<NavigationLinks />);

  const homeLink = screen.getByText("Home");
  const aboutLink = screen.getByText("About");
  const contactLink = screen.getByText("Contact");

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

it("navigation links have correct href", () => {
  renderWithRouter(<NavigationLinks />);

  const homeLink = screen.getByText("Home");
  const aboutLink = screen.getByText("About");
  const contactLink = screen.getByText("Contact");

  expect(homeLink).toHaveAttribute("href", "/");
  expect(aboutLink).toHaveAttribute("href", "/about");
  expect(contactLink).toHaveAttribute("href", "/contact");
});
