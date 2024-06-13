import { render, screen } from "@testing-library/react";
import { Qualifications } from "./Qualifications";

describe("Qualifications", () => {
  it("renders without crashing", () => {
    render(<Qualifications />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders qualifications list after successful load", async () => {
    render(<Qualifications />);
    expect(
      await screen.findByText("プロジェクトマネージャ(2011/06)"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("データベーススペシャリスト(2010/06)"),
    ).toBeInTheDocument();
    // ...assert the rest of the items
  });

  it("renders error state when something goes wrong", async () => {
    render(<Qualifications />);
    expect(
      await screen.findByText("Something went wrong:"),
    ).toBeInTheDocument();
  });
});
