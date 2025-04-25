import { SkillSetBar } from "@/features/skills/components/organisms/SkillSetBar";
import { skills } from "@/features/skills/data/Skill";
import { render, screen } from "@testing-library/react";

describe("SkillSetBar", () => {
  it("renders skill categories correctly", () => {
    render(<SkillSetBar />);

    for (const skill of skills) {
      expect(screen.getByText(skill.category_name)).toBeInTheDocument();
    }
  });

  it("renders skill items correctly", () => {
    render(<SkillSetBar />);

    for (const skill of skills) {
      for (const item of skill.items) {
        expect(screen.getByText(item.name)).toBeInTheDocument();
        expect(screen.getByAltText(item.name)).toHaveAttribute(
          "src",
          item.icon,
        );
        const yearsElements = screen.getAllByText(`${item.years}y+`);
        expect(yearsElements.length).toBeGreaterThan(0);
        for (const element of yearsElements) {
          expect(element).toBeInTheDocument();
        }
      }
    }
  });
});
