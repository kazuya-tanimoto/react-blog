import { useBreakpointValue } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { Career as data } from "../../data/Career.ts";
import { CareerTimeline } from "./CareerTimeline.tsx";

describe("CareerTimeline component", () => {
  it("renders with provided items when breakpoint isn't 'base'", () => {
    render(<CareerTimeline items={[data[0]]} />);
    // with CareerItemNumber
    const noElement = screen.getByText("1");
    expect(noElement).toBeInTheDocument();

    // other elements
    const titleElement = screen.getByText("社内ポータルシステム開発");
    expect(titleElement).toBeInTheDocument();
    const dateElement = screen.getByText(/2022\/09/i);
    expect(dateElement).toBeInTheDocument();
  });

  it("renders with provided items when breakpoint is 'base'", () => {
    vi.mocked(useBreakpointValue).mockImplementation(() => true);
    render(<CareerTimeline items={[data[0]]} />);
    // without CareerItemNumber
    const noElement = screen.queryByText("1");
    expect(noElement).not.toBeInTheDocument();

    // other elements
    const titleElement = screen.getByText("社内ポータルシステム開発");
    expect(titleElement).toBeInTheDocument();
    const dateElement = screen.getByText(/2022\/09/i);
    expect(dateElement).toBeInTheDocument();
  });

  it("renders multiple items", () => {
    render(<CareerTimeline items={data} />);
    const titleElement1 = screen.getByText("社内ポータルシステム開発");
    const summaryElement1 = screen.getByText(
      "障害者支援業務にて利用するポータルサイト構築案件に参画中",
    );
    const keywordsElement1 = screen.getByText(
      "React, Laravel, Tailwind, Docker, AWS, PM, 要件定義〜保守",
    );
    const dateElement1 = screen.getByText(/2022\/09/i);

    expect(titleElement1).toBeInTheDocument();
    expect(summaryElement1).toBeInTheDocument();
    expect(keywordsElement1).toBeInTheDocument();
    expect(dateElement1).toBeInTheDocument();

    const titleElement2 = screen.getByText("医薬品購入者向け問診システム開発");
    const summaryElement2 = screen.getByText(
      "通販サイト（楽天、Shopify）の医薬品購入者向けのオンライン問診システム構築に参画",
    );
    const keywordsElement2 = screen.getByText(
      "Codeigniter, jQuery, LAMP, Docker, 要件定義〜実装",
    );
    const dateElement2 = screen.getByText(/2022\/08/i);

    expect(titleElement2).toBeInTheDocument();
    expect(summaryElement2).toBeInTheDocument();
    expect(keywordsElement2).toBeInTheDocument();
    expect(dateElement2).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(data.length);
  });

  it("does not render when items are empty", () => {
    render(<CareerTimeline items={[]} />);
    const timelineElement = screen.queryByRole("list");
    expect(timelineElement).not.toBeInTheDocument();
  });
});
