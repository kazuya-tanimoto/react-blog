import type { Meta, StoryObj } from "@storybook/react";
import { CareerItemNumber } from "./CareerItemNumber";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "career/molecules/CareerItemNumber",
  component: CareerItemNumber,
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
} satisfies Meta<typeof CareerItemNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const FirstItem: Story = {
  args: { index: 0 },
};

export const SecondItem: Story = {
  args: { index: 1 },
};
export const ThirdItem: Story = {
  args: { index: 2 },
};
