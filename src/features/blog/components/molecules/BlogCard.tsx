import { type JSX } from "react";
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
import { Link as RouterLink } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  content: string;
  tags: string[];
  image: string;
  alt: string;
}
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
            {tags.map((tag, index) => (
              <Badge
                key={index}
                backgroundColor="gray.600"
                variant="solid"
                py={0.5}
                px={3}
                rounded="md"
              >
                {tag}
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
