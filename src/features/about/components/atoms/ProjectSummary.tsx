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
    <Text fontSize="lg">{title}</Text>
    <Text fontSize="sm">{summary}</Text>
    <Text fontSize="xs">{keywords}</Text>
  </Flex>
);
