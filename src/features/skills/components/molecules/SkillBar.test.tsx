import { render, screen } from "@testing-library/react";
import { SkillBar } from "@/features/skills/components/molecules/SkillBar";

describe("SkillBar", () => {
  const skill = {
    name: "JavaScript",
    icon: "icon-url",
    years: 5,
  };

  it("renders skill name, icon and years correctly", () => {
    render(<SkillBar {...skill} />);

    expect(screen.getByText(skill.name)).toBeInTheDocument();
    expect(screen.getByAltText(skill.name)).toHaveAttribute("src", skill.icon);
    expect(screen.getByText(`${skill.years}y+`)).toBeInTheDocument();
  });

  it("displays 10y+ when years is 10 or more", () => {
    const skillWithTenYears = { ...skill, years: 10 };
    render(<SkillBar {...skillWithTenYears} />);

    expect(screen.getByText("10y+")).toBeInTheDocument();
  });

  it("displays 10y+ when years is more than 10", () => {
    const skillWithMoreThanTenYears = { ...skill, years: 15 };
    render(<SkillBar {...skillWithMoreThanTenYears} />);

    expect(screen.getByText("10y+")).toBeInTheDocument();
  });
});
