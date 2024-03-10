import type { JSX } from "react";
import { memo } from "react";
import { Box, Text } from "@chakra-ui/react";

interface ProjectDurationProps {
  bg: string;
  font: string;
  from: string;
  to?: string;
}

export const ProjectDuration = memo(
  ({ bg, font, from, to }: ProjectDurationProps): JSX.Element => {
    return (
      <>
        <Box
          boxSize={100}
          bg={bg}
          color={font}
          p={4}
          shadow="lg"
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text textAlign="center">
            {to ?? "現在"}
            <br />↑<br />
            {from}
          </Text>
        </Box>
      </>
    );
  },
);
