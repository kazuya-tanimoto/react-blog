import type { JSX } from "react";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  summary: string;
  keywords: string;
}

export const ProjectSummary = ({
  title,
  summary,
  keywords,
}: Props): JSX.Element => (
  <Flex direction="column" justify="space-between" h="100%" gap={1}>
    <Text
      fontSize="lg"
      noOfLines={1}
      textAlign={{ base: "center", sm: "left" }}
    >
      {title}
    </Text>
    <Text fontSize="sm" noOfLines={2}>
      {summary}
    </Text>
    <Text fontSize="xs" noOfLines={{ base: 1, sm: 2 }} mx={{ base: 6, sm: 0 }}>
      {keywords}
    </Text>
  </Flex>
);
