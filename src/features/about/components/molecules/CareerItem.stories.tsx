import type { Meta, StoryObj } from "@storybook/react";
import { CareerItemsData as data } from "../organisms/CareerItemsData.ts";
import { CareerItem } from "./CareerItem.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "about/molecules/CareerItem",
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

export const FirstItem: Story = {
  args: data[0],
};

export const SecondItem: Story = {
  args: data[1],
};
export const ThirdItem: Story = {
  args: data[2],
};
