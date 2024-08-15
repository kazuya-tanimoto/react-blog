import { type Meta, type StoryObj } from "@storybook/react";
import { BlogCardCollection } from "@/features/blog/components/organisms/BlogCardCollection";

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
