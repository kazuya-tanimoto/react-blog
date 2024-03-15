import type { Meta, StoryObj } from "@storybook/react";

import { DateRange } from "./DateRange.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "about/atoms/DateRange",
  component: DateRange,
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
} satisfies Meta<typeof DateRange>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Blue: Story = {
  args: {
    color: "blue.600",
    from: "2022/09",
  },
};

export const Purple: Story = {
  args: {
    color: "purple.800",
    to: "2022/08",
    from: "2021/01",
  },
};
export const Yellow: Story = {
  args: {
    color: "yellow.700",
    to: "2020/12",
    from: "2018/09",
  },
};
