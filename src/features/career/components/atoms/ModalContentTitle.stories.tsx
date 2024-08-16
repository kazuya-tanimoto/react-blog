import type { Meta, StoryObj } from "@storybook/react";
import { ModalContentTitle } from "./ModalContentTitle";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "career/atoms/ModalContentTitle",
  component: ModalContentTitle,
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
} satisfies Meta<typeof ModalContentTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

const colors = ["blue.600", "purple.800", "yellow.700"];
const titles = ["概要", "担当業務", "利用技術とツール"];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Blue: Story = {
  args: {
    color: colors[0],
    children: titles[0],
  },
};

export const Purple: Story = {
  args: {
    color: colors[1],
    children: titles[1],
  },
};
export const Yellow: Story = {
  args: {
    color: colors[2],
    children: titles[2],
  },
};
