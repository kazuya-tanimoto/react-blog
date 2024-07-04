import type { Meta, StoryObj } from "@storybook/react";
import { SkillBar } from "./SkillBar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "skills/molecules/SkillBar",
  component: SkillBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // }        // rounded="md",
} satisfies Meta<typeof SkillBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const ReactJS: Story = {
  args: {
    name: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    years: 2,
  },
};

export const Flask: Story = {
  args: {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    years: 1,
  },
};

export const LongName: Story = {
  args: {
    name: "Amazon Web Services",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    years: 2,
  },
};
