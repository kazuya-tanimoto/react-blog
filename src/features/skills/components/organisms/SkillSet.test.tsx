import { useBreakpointValue } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { SkillSet } from "@/features/skills/components/organisms/SkillSet";
import { skills } from "@/features/skills/data/Skill";

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

  skills.forEach((skill) => {
    expect(screen.getByText(skill.category)).toBeInTheDocument();
  });
};

/*
 * Asserts that the skill items are rendered correctly.
 */
const assertSkillItemsRendering = (isBaseResolution: boolean) => {
  if (isBaseResolution) {
    vi.mocked(useBreakpointValue).mockImplementation(() => true);
  }

  render(<SkillSet />);

  skills.forEach((skill) => {
    expect(screen.getByText(skill.category)).toBeInTheDocument();

    skill.items.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByAltText(item.name)).toHaveAttribute("src", item.icon);
      const yearsElements = screen.getAllByText(
        isBaseResolution ? `${item.years}y+` : `(${item.years}y+)`,
      );
      expect(yearsElements.length).toBeGreaterThan(0);
      yearsElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
};
