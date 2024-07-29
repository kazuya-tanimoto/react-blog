import { type Meta, type StoryObj } from "@storybook/react";
import { BlogCard } from "./BlogCard";

const meta = {
  title: "blog/molecules/BlogCard",
  component: BlogCard,
} satisfies Meta<typeof BlogCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BlogCardStory: Story = {
  name: "Default",
  args: {},
};
