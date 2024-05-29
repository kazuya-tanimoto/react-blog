import type { Meta, StoryObj } from "@storybook/react";
import { Career as data } from "../../data/Career";
import { DateRange } from "./DateRange";

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

const colors = ["blue.600", "purple.800", "yellow.700"];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Blue: Story = {
  args: {
    color: colors[0],
    from: data[0].from,
  },
};

export const Purple: Story = {
  args: {
    color: colors[1],
    from: data[1].from,
    to: data[1].to,
  },
};
export const Yellow: Story = {
  args: {
    color: colors[2],
    from: data[2].from,
    to: data[2].to,
  },
};
