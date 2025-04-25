import { renderWithRouter } from "@/utils/RenderWithRouter";
import { screen } from "@testing-library/react";
import { BlogCard } from "./BlogCard";

describe("BlogCard", () => {
  const mockProps = {
    id: 1,
    title: "Test Title",
    content: "Test Content",
    tags: ["tag1", "tag2"],
    image: "test.jpg",
    alt: "Test Image",
  };

  it("renders the image with correct src and alt", () => {
    renderWithRouter(<BlogCard {...mockProps} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.image);
    expect(image).toHaveAttribute("alt", mockProps.alt);
  });

  it("renders the title correctly", () => {
    renderWithRouter(<BlogCard {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("renders the content correctly", () => {
    renderWithRouter(<BlogCard {...mockProps} />);
    expect(screen.getByText(mockProps.content)).toBeInTheDocument();
  });

  it("renders the correct number of tags", () => {
    renderWithRouter(<BlogCard {...mockProps} />);
    const tags = screen.getAllByText(/tag\d/);
    expect(tags).toHaveLength(mockProps.tags.length);
  });

  it("renders the link with correct href", () => {
    renderWithRouter(<BlogCard {...mockProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/blog${mockProps.id}`);
  });
});
