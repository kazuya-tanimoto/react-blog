import type { Meta, StoryObj } from "@storybook/react";
import { Career as data } from "@/features/career/data/Career";
import { CareerItem } from "./CareerItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "career/molecules/CareerItem",
  component: CareerItem,
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
} satisfies Meta<typeof CareerItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const colors = ["blue.600", "purple.800", "yellow.700"];

export const FirstItem: Story = {
  args: { ...data[0], color: colors[0] },
};

export const SecondItem: Story = {
  args: { ...data[1], color: colors[1] },
};
export const ThirdItem: Story = {
  args: { ...data[2], color: colors[2] },
};
export const LongString: Story = {
  args: { ...data[3], color: colors[0] },
};
