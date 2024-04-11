import type { Meta, StoryObj } from "@storybook/react";
import { Career as data } from "../../data/Career.ts";
import { CareerTimeline } from "./CareerTimeline.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "about/organisms/CareerTimeline",
  component: CareerTimeline,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // }, // rounded="md",
} satisfies Meta<typeof CareerTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    items: data,
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const FirstItem: Story = {
  args: {
    items: [data[0]],
  },
};
export const ManyItems: Story = {
  args: {
    items: [...data, ...data, ...data, ...data, ...data, ...data, ...data],
  },
};
