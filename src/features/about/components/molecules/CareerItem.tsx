import type { JSX } from "react";
import { memo } from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  summary: string;
  keywords: string;
  color: string;
  from: string;
  to?: string;
}

export const CareerItem = memo(
  ({
    title,
    summary,
    keywords,
    color,
    from,
    to = "現在",
  }: Props): JSX.Element => {
    return (
      <Box
        px={4}
        py={2}
        w={500}
        borderWidth={1}
        borderStyle="solid"
        borderColor={color}
        rounded="full"
        display="flex"
        gap={2}
        h={125}
        alignItems="center"
      >
        <Box
          boxSize={100}
          bg={color}
          color="white"
          p={4}
          shadow="lg"
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text textAlign="center">
            {to}
            <br />↑<br />
            {from}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          h="100%"
        >
          <Text fontSize="lg">{title}</Text>
          <Text fontSize="sm">{summary}</Text>
          <Text fontSize="xs">{keywords}</Text>
        </Box>
      </Box>
    );
  },
);
