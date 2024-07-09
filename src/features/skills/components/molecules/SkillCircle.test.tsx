import { render, screen } from "@testing-library/react";
import { SkillCircle } from "@/features/skills/components/molecules/SkillCircle";

describe("SkillCircle", () => {
  const skill = {
    name: "JavaScript",
    icon: "icon-url",
    years: 5,
  };

  it("renders skill name, icon and years correctly", () => {
    render(<SkillCircle {...skill} />);

    expect(screen.getByText(skill.name)).toBeInTheDocument();
    expect(screen.getByAltText(skill.name)).toHaveAttribute("src", skill.icon);
    expect(screen.getByText(`(${skill.years}y+)`)).toBeInTheDocument();
  });

  it("displays 10y+ when years is 10 or more", () => {
    const skillWithTenYears = { ...skill, years: 10 };
    render(<SkillCircle {...skillWithTenYears} />);

    expect(screen.getByText("(10y+)")).toBeInTheDocument();
  });

  it("displays 10y+ when years is more than 10", () => {
    const skillWithMoreThanTenYears = { ...skill, years: 15 };
    render(<SkillCircle {...skillWithMoreThanTenYears} />);

    expect(screen.getByText("(10y+)")).toBeInTheDocument();
  });
});
