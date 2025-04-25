import { ErrorBoundaryWrapper } from "@/components/organisms/ErrorBoundaryWrapper";
import { BlogCard } from "@/features/blog/components/molecules/BlogCard";
import { tags } from "@/features/blog/data/Tag.ts";
import type { Card } from "@/features/blog/types/BlogCard";
import { sleep } from "@/lib/sleep";
import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";
import { type JSX, Suspense, useEffect } from "react";
import Masonry from "react-masonry-css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const breakpointColumnsObj = {
  default: 5,
  1900: 4,
  900: 3,
  700: 2,
  450: 1,
};

const fetchPosts = async () => {
  await sleep(1000); // Delay for 1 seconds
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return data;
};

const masonryStyles = css`
  .my-masonry-grid {
    display: flex;
    width: auto;
  }

  .my-masonry-grid-column {
    background-clip: padding-box;
  }

  .fade-in {
    opacity: 0;
    transition:
      opacity 0.6s ease-out,
      transform 0.6s ease-out;
    transform: translateY(20px);
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BlogCardCollectionContent = (): JSX.Element => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      for (const element of elements) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { data } = useSuspenseQuery<Post[]>({
    queryKey: ["blog"],
    queryFn: fetchPosts,
    retry: false,
  });

  const cards: Card[] = data.map((post: Post) => ({
    id: post.id,
    title: post.title,
    content: post.body,
    image: `https://picsum.photos/500/${Math.floor(Math.random() * 500) + 200}`,
    alt: "Placeholder",
    tags: tags.slice(0, Math.floor(Math.random() * tags.length) + 1),
  }));

  return (
    <Box css={masonryStyles}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {cards.map((card) => (
          <Box key={card.id} mx={1} my={4} className="fade-in">
            <BlogCard {...card} />
          </Box>
        ))}
      </Masonry>
    </Box>
  );
};

export const BlogCardCollection = (): JSX.Element => (
  <ErrorBoundaryWrapper>
    <Suspense fallback="Loading...">
      <BlogCardCollectionContent />
    </Suspense>
  </ErrorBoundaryWrapper>
);
