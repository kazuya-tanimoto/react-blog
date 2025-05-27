import type { Meta, StoryObj } from "@storybook/react";
import { BlogCard } from "./BlogCard";

const meta = {
  title: "blog/molecules/BlogCard",
  component: BlogCard,
} satisfies Meta<typeof BlogCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BlogCardStory: Story = {
  name: "Default",
  args: {
    id: 1,
    title: "Blog Post 1",
    content: "This is a blog post.",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "Express" },
      { id: 3, name: "NestJS" },
      { id: 4, name: "TypeScript" },
      { id: 5, name: "JavaScript" },
    ],
    image: "https://picsum.photos/500/500",
    alt: "Placeholder",
  },
};
