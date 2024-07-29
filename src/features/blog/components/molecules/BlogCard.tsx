import { type JSX } from "react";
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const BlogCard = (): JSX.Element => {
  const heights = [300, 400, 500, 600, 700];
  const height = heights[Math.floor(Math.random() * heights.length)];
  const tagLimitCount = Math.floor(Math.random() * 5) + 1;

  const url = `https://picsum.photos/500/${height}`;
  const alt = "Placeholder";
  const title = "Blog Content Title";
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const tags = ["#tag1", "#tag2", "#tag3", "#tag4", "#tag5"];

  return (
    <Card>
      <CardBody>
        <Image src={url} alt={alt} rounded="lg" />
        <Stack spacing={4} mt={4}>
          <Heading size="md">{title}</Heading>
          <Text>{content}</Text>
          <HStack spacing={4}>
            {tags.map((tag, index) => {
              if (index >= tagLimitCount) return null;

              return (
                <Badge key={index} variant="solid" py={0.5} px={3} rounded="md">
                  {tag}
                </Badge>
              );
            })}
          </HStack>
        </Stack>
      </CardBody>
      <CardFooter pt={0}>
        <Box w="full" textAlign="right">
          <Link as={RouterLink} to="/blog" textAlign="right">
            More&nbsp;&gt;&gt;
          </Link>
        </Box>
      </CardFooter>
    </Card>
  );
};
