import type { Meta, StoryObj } from "@storybook/react";
import { SubTitle } from "./SubTitle";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "about/molecules/SubTitle",
  component: SubTitle,
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
} satisfies Meta<typeof SubTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Summary: Story = {
  args: { lineItems: 4, children: "概要" },
};
export const Specialty: Story = {
  args: { children: "得意分野" },
};
export const SelfPromotion: Story = {
  args: { lineItems: 8, children: "自己アピール" },
};
export const Career: Story = {
  args: { children: "業務経歴" },
};
export const Qualifications: Story = {
  args: { children: "保有資格" },
};

export const SkillSet: Story = {
  args: { lineItems: 11, children: "利用技術[経験年数]" },
};
export const NoLine: Story = {
  args: { lineItems: 0, children: "アンダーラインなし" },
};
