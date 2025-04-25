import { SkillSet } from "@/features/skills/components/organisms/SkillSet";
import { skills } from "@/features/skills/data/Skill";
import { useBreakpointValue } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";

describe("SkillSet", () => {
  it("renders skill categories correctly", () => {
    assertSkillCategoriesRendering(false);
  });

  it("renders skill categories correctly in base resolution", () => {
    assertSkillCategoriesRendering(true);
  });

  it("renders skill items correctly", () => {
    assertSkillItemsRendering(false);
  });

  it("renders skill items correctly in base resolution", () => {
    assertSkillItemsRendering(true);
  });
});

/*
 * Asserts that the skill categories are rendered correctly.
 */
const assertSkillCategoriesRendering = (isBaseResolution: boolean) => {
  if (isBaseResolution) {
    vi.mocked(useBreakpointValue).mockImplementation(() => true);
  }

  render(<SkillSet />);

  for (const skill of skills) {
    expect(screen.getByText(skill.category_name)).toBeInTheDocument();
  }
};

/*
 * Asserts that the skill items are rendered correctly.
 */
const assertSkillItemsRendering = (isBaseResolution: boolean) => {
  if (isBaseResolution) {
    vi.mocked(useBreakpointValue).mockImplementation(() => true);
  }

  render(<SkillSet />);

  for (const skill of skills) {
    expect(screen.getByText(skill.category_name)).toBeInTheDocument();

    for (const item of skill.items) {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByAltText(item.name)).toHaveAttribute("src", item.icon);
      const yearsElements = screen.getAllByText(
        isBaseResolution ? `${item.years}y+` : `(${item.years}y+)`,
      );
      expect(yearsElements.length).toBeGreaterThan(0);
      for (const element of yearsElements) {
        expect(element).toBeInTheDocument();
      }
    }
  }
};
