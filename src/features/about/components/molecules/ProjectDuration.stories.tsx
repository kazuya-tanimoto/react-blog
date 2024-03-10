import type { Meta, StoryObj } from "@storybook/react";

import { ProjectDuration } from "./ProjectDuration.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "about/molecules/ProjectDuration",
  component: ProjectDuration,
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
} satisfies Meta<typeof ProjectDuration>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FirstItem: Story = {
  args: {
    // bg: "#182AB3",
    bg: "blue.600",
    font: "#FFFFFF",
    from: "2022/09",
  },
};

export const SecondItem: Story = {
  args: {
    // bg: "#7D3DAB",
    bg: "purple.700",
    font: "#FFFFFF",
    from: "2022/09",
  },
};
export const ThirdItem: Story = {
  args: {
    // bg: "#897400",
    bg: "yellow.700",
    font: "#FFFFFF",
    from: "2022/09",
  },
};
