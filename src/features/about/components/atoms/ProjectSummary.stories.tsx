import type { Meta, StoryObj } from "@storybook/react";
import { CareerItemsData as data } from "../organisms/CareerItemsData.ts";
import { ProjectSummary } from "./ProjectSummary.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "about/atoms/ProjectSummary",
  component: ProjectSummary,
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
} satisfies Meta<typeof ProjectSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FirstItem: Story = {
  args: {
    title: data[0].title,
    summary: data[0].summary,
    keywords: data[0].keywords,
  },
};

export const SecondItem: Story = {
  args: {
    title: data[1].title,
    summary: data[1].summary,
    keywords: data[1].keywords,
  },
};
export const ThirdItem: Story = {
  args: {
    title: data[2].title,
    summary: data[2].summary,
    keywords: data[2].keywords,
  },
};
export const LongString: Story = {
  args: {
    title: data[3].title,
    summary: data[3].summary,
    keywords: data[3].keywords,
  },
};
