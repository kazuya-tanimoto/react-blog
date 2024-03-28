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
  <Flex direction="column" justify="space-between" h="100%">
    <Text fontSize="lg" noOfLines={1}>
      {title}
    </Text>
    <Text fontSize="sm" noOfLines={2}>
      {summary}
    </Text>
    <Text fontSize="xs" noOfLines={2}>
      {keywords}
    </Text>
  </Flex>
);
