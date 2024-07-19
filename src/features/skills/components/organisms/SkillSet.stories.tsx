import { type Meta, type StoryObj } from "@storybook/react";
import { skills } from "@/features/skills/data/Skill";
import { SkillSet } from "./SkillSet";

const meta = {
  title: "skills/organisms/SkillSet",
  component: SkillSet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SkillSet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    skills,
  },
};
