import type { JSX } from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  color: string;
  from: string;
  to?: string;
}

export const DateRange = ({ color, from, to = "現在" }: Props): JSX.Element => (
  <Box
    data-testid="date-range"
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
);
