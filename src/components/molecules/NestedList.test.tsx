import type { NestedListItem } from "@/types/NestedList";
import { render, screen } from "@testing-library/react";
import { NestedList } from "./NestedList";

describe("NestedList", () => {
  it("renders list items correctly", () => {
    const listItems: NestedListItem[] = [
      { item: "Item 1" },
      { item: "Item 2", subItem: [{ item: "Sub Item 2-1" }] },
      {
        item: "Item 3",
        subItem: [
          { item: "Sub Item 3-1", subItem: [{ item: "Sub Item 3-1-1" }] },
        ],
      },
    ];
    render(<NestedList spacing={4} color="red" listItems={listItems} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
    expect(screen.getByText("Sub Item 2-1")).toBeInTheDocument();
    expect(screen.getByText("Sub Item 3-1")).toBeInTheDocument();
    expect(screen.getByText("Sub Item 3-1-1")).toBeInTheDocument();
  });

  it("renders empty list correctly", () => {
    render(<NestedList spacing={4} color="red" listItems={[]} />);
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });
});
