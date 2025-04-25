import { SkillSetCircle } from "@/features/skills/components/organisms/SkillSetCircle";
import { skills } from "@/features/skills/data/Skill";
import { render, screen } from "@testing-library/react";

describe("SkillSetCircle", () => {
  it("renders skill categories correctly", () => {
    render(<SkillSetCircle />);

    for (const skill of skills) {
      expect(screen.getByText(skill.category_name)).toBeInTheDocument();
    }
  });

  it("renders skill items correctly", () => {
    render(<SkillSetCircle />);

    for (const skill of skills) {
      for (const item of skill.items) {
        expect(screen.getByText(item.name)).toBeInTheDocument();
        expect(screen.getByAltText(item.name)).toHaveAttribute(
          "src",
          item.icon,
        );
        const yearsElements = screen.getAllByText(`(${item.years}y+)`);
        expect(yearsElements.length).toBeGreaterThan(0);
        for (const element of yearsElements) {
          expect(element).toBeInTheDocument();
        }
      }
    }
  });
});
