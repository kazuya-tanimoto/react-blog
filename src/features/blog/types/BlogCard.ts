import type { Tag } from "@/features/blog/types/Tag.ts";

export interface Card {
  id: number;
  title: string;
  content: string;
  tags: Tag[];
  image: string;
  alt: string;
}
