import { render, screen } from "@testing-library/react";
import { SkillSetBar } from "@/features/skills/components/organisms/SkillSetBar";
import { skills } from "@/features/skills/data/Skill";

describe("SkillSetBar", () => {
  it("renders skill categories correctly", () => {
    render(<SkillSetBar />);

    skills.forEach((skill) => {
      expect(screen.getByText(skill.category)).toBeInTheDocument();
    });
  });

  it("renders skill items correctly", () => {
    render(<SkillSetBar />);

    skills.forEach((skill) => {
      skill.items.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
        expect(screen.getByAltText(item.name)).toHaveAttribute(
          "src",
          item.icon,
        );
        const yearsElements = screen.getAllByText(`${item.years}y+`);
        expect(yearsElements.length).toBeGreaterThan(0);
        yearsElements.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      });
    });
  });
});
