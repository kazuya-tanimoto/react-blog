import type { JSX } from "react";
import { Circle, Text } from "@chakra-ui/react";
import { useScreenResolution } from "../../hooks/useScreenResolution.ts";

interface Props {
  color: string;
  from: string;
  to?: string;
}

export const DateRange = ({ color, from, to = "現在" }: Props): JSX.Element => {
  const { isBase } = useScreenResolution();

  return isBase ? (
    <Text
      textAlign="center"
      fontSize="2xl"
      color={color}
    >{`${from} → ${to}`}</Text>
  ) : (
    <Circle
      data-testid="date-range"
      size={100}
      bg={color}
      color="white"
      shadow="lg"
    >
      <Text textAlign="center">
        {to}
        <br />↑<br />
        {from}
      </Text>
    </Circle>
  );
};
