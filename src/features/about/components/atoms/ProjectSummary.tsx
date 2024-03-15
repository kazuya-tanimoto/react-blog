import type { JSX } from "react";
import { Box, Text } from "@chakra-ui/react";

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
);
