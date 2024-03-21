import type { Meta, StoryObj } from "@storybook/react";

import { CareerItemsData as data } from "../organisms/CareerItemsData.ts";
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
    color: data[0].color,
    from: data[0].from,
  },
};

export const Purple: Story = {
  args: {
    color: data[1].color,
    from: data[1].from,
    to: data[1].to,
  },
};
export const Yellow: Story = {
  args: {
    color: data[2].color,
    from: data[2].from,
    to: data[2].to,
  },
};
