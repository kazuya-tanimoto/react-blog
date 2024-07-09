import { render, screen } from "@testing-library/react";
import { SkillSetCircle } from "@/features/skills/components/organisms/SkillSetCircle";
import { skills } from "@/features/skills/data/Skill";

describe("SkillSetCircle", () => {
  it("renders skill categories correctly", () => {
    render(<SkillSetCircle />);

    skills.forEach((skill) => {
      expect(screen.getByText(skill.category)).toBeInTheDocument();
    });
  });

  it("renders skill items correctly", () => {
    render(<SkillSetCircle />);

    skills.forEach((skill) => {
      skill.items.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
        expect(screen.getByAltText(item.name)).toHaveAttribute(
          "src",
          item.icon,
        );
        const yearsElements = screen.getAllByText(`(${item.years}y+)`);
        expect(yearsElements.length).toBeGreaterThan(0);
        yearsElements.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      });
    });
  });
});
