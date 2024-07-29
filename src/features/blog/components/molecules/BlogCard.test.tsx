import { screen } from "@testing-library/react";
import { renderWithRouter } from "@/utils/RenderWithRouter";
import { BlogCard } from "./BlogCard";

describe("BlogCard", () => {
  it("renders the image", () => {
    renderWithRouter(<BlogCard />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders the title", () => {
    renderWithRouter(<BlogCard />);
    expect(screen.getByText("Blog Content Title")).toBeInTheDocument();
  });

  it("renders the content", () => {
    renderWithRouter(<BlogCard />);
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet,/i),
    ).toBeInTheDocument();
  });

  it("renders the link", () => {
    renderWithRouter(<BlogCard />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/blog");
  });

  it("renders the correct number of tags", () => {
    renderWithRouter(<BlogCard />);
    const tagCount = screen.getAllByText(/#tag\d/).length;
    expect(tagCount).toBeGreaterThanOrEqual(1);
    expect(tagCount).toBeLessThanOrEqual(5);
  });
});
