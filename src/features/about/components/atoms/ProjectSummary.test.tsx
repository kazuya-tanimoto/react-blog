import { render, screen } from "@testing-library/react";
import { ProjectSummary } from "./ProjectSummary.tsx";

describe("ProjectSummary component", () => {
  it("renders with provided title", () => {
    render(
      <ProjectSummary
        title="Test Project"
        summary="This is a test project"
        keywords="some keywords"
      />,
    );
    const titleElement = screen.getByText("Test Project");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders with provided summary", () => {
    render(
      <ProjectSummary
        title="Test Project"
        summary="This is a test project"
        keywords="some keywords"
      />,
    );
    const summaryElement = screen.getByText("This is a test project");
    expect(summaryElement).toBeInTheDocument();
  });

  it("renders with provided keywords", () => {
    render(
      <ProjectSummary
        title="Test Project"
        summary="This is a test project"
        keywords="some keywords"
      />,
    );
    const keywordsElement = screen.getByText("some keywords");
    expect(keywordsElement).toBeInTheDocument();
  });
});
