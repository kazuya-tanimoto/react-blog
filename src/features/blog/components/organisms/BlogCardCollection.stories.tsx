import { BlogCardCollection } from "@/features/blog/components/organisms/BlogCardCollection";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "blog/organisms/BlogCardCollection",
  component: BlogCardCollection,
} satisfies Meta<typeof BlogCardCollection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BlogCardStory: Story = {
  name: "Default",
  args: {},
};
