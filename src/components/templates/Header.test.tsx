import { useBreakpointValue } from "@chakra-ui/react";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/RenderWithRouter";
import { Header } from "./Header";

describe("Header component", () => {
  it("renders logo image", () => {
    renderWithRouter(<Header />);
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders links when not logged in", () => {
    renderWithRouter(<Header />);
    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");
    const contactLink = screen.getByText("Contact");
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it("does not render admin menu and logout links when not logged in", () => {
    renderWithRouter(<Header />);
    const adminMenuLink = screen.queryByText("Admin menu");
    const logoutLink = screen.queryByText("Logout");
    expect(adminMenuLink).not.toBeInTheDocument();
    expect(logoutLink).not.toBeInTheDocument();
  });

  it("renders admin menu and logout links when logged in", () => {
    renderWithRouter(<Header loggedIn={true} />);
    const adminMenuLink = screen.getByText("Admin menu");
    const logoutLink = screen.getByText("Logout");
    expect(adminMenuLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });

  it("does not render admin menu and logout icon when not logged in, regardless of resolution", () => {
    vi.mocked(useBreakpointValue).mockImplementation(() => true);
    renderWithRouter(<Header loggedIn={false} />);
    const adminMenuIcon = screen.queryByTestId("admin-menu-icon");
    expect(adminMenuIcon).not.toBeInTheDocument();
    const logoutIcon = screen.queryByTestId("logout-icon");
    expect(logoutIcon).not.toBeInTheDocument();
  });

  it("renders admin menu and logout icon when logged in and in base resolution", () => {
    vi.mocked(useBreakpointValue).mockImplementation(() => true);
    renderWithRouter(<Header loggedIn={true} />);
    const adminMenuIcon = screen.queryByTestId("admin-menu-icon");
    expect(adminMenuIcon).toBeInTheDocument();
    const logoutIcon = screen.getByTestId("logout-icon");
    expect(logoutIcon).toBeInTheDocument();
  });
});
