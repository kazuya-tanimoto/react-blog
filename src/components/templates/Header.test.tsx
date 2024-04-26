import { render, screen } from "@testing-library/react";
import { Header } from "./Header.tsx";

describe("Header component", () => {
  it("renders logo image", () => {
    render(<Header />);
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders links when not logged in", () => {
    render(<Header />);
    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");
    const contactLink = screen.getByText("Contact");
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it("does not render admin menu and logout links when not logged in", () => {
    render(<Header />);
    const adminMenuLink = screen.queryByText("Admin menu");
    const logoutLink = screen.queryByText("Logout");
    expect(adminMenuLink).not.toBeInTheDocument();
    expect(logoutLink).not.toBeInTheDocument();
  });

  it("renders admin menu and logout links when logged in", () => {
    render(<Header loggedIn />);
    const adminMenuLink = screen.getByText("Admin menu");
    const logoutLink = screen.getByText("Logout");
    expect(adminMenuLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });
});
