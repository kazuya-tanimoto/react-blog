import { type JSX } from "react";
import { Circle } from "@chakra-ui/react";
import { BiSolidUpArrow } from "react-icons/bi";

const lineStyle = {
  position: "absolute",
  h: "120",
  w: "0.5",
  bg: "#4A5668",
};

export const CareerItemNumber = ({ index }: { index: number }): JSX.Element => (
  <Circle
    size={8}
    bg="gray.600"
    color="white"
    position="relative"
    _before={{
      ...lineStyle,
      content: index === 0 ? '""' : "none",
      bottom: "100%",
    }}
    _after={{
      ...lineStyle,
      content: '""',
      top: "100%",
    }}
  >
    {index === 0 && (
      <BiSolidUpArrow
        size={20}
        style={{
          position: "absolute",
          bottom: "140px",
          color: "#4A5668",
        }}
        data-testid="arrow"
      />
    )}
    {index + 1}
  </Circle>
);
