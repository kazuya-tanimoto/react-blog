import type { Card as BlogCardProps } from "@/features/blog/types/BlogCard";
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { JSX } from "react";
import { Link as RouterLink } from "react-router-dom";

export const BlogCard = ({
  id,
  title,
  content,
  tags,
  image,
  alt,
}: BlogCardProps): JSX.Element => {
  return (
    <Card _hover={{ opacity: 0.7, cursor: "pointer" }}>
      <CardBody>
        <Image src={image} alt={alt} rounded="lg" />
        <Stack spacing={4} mt={4}>
          <Heading size="md">{title}</Heading>
          <Text>{content}</Text>
          <Flex wrap="wrap" gap={3}>
            {tags.map((tag) => (
              <Badge
                key={tag.id}
                backgroundColor="gray.600"
                variant="solid"
                py={0.5}
                px={3}
                rounded="md"
                style={{ textTransform: "none" }}
              >
                {tag.name}
              </Badge>
            ))}
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter pt={0}>
        <Box w="full" textAlign="right">
          <Link as={RouterLink} to={`/blog${id}`} textAlign="right">
            More&nbsp;&gt;&gt;
          </Link>
        </Box>
      </CardFooter>
    </Card>
  );
};
