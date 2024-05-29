import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/RenderWithRouter";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the footer with correct text", () => {
    renderWithRouter(<Footer />);
    const textElement = screen.getByText(/© byte-lark All rights reserved./i);
    expect(textElement).toBeInTheDocument();
  });

  it("renders the NavigationLinks component", () => {
    renderWithRouter(<Footer />);
    const homeLinkElement = screen.getByText(/Home/i);
    const aboutLinkElement = screen.getByText(/About/i);
    const contactLinkElement = screen.getByText(/Contact/i);
    expect(homeLinkElement).toBeInTheDocument();
    expect(aboutLinkElement).toBeInTheDocument();
    expect(contactLinkElement).toBeInTheDocument();
  });
});
