import { type JSX } from "react";
import { Circle, Flex, List, ListItem, Box } from "@chakra-ui/react";
import { BiSolidUpArrow } from "react-icons/bi";
import { type CareerItems } from "../../types/Career.ts";
import { CareerItem } from "../molecules/CareerItem.tsx";

export const CareerTimeline = ({ items }: CareerItems): JSX.Element => {
  const lineStyle = {
    position: "absolute",
    h: "120",
    w: "0.5",
    bg: "#4A5668",
  };

  return (
    <List spacing={6} py={20}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <Flex alignItems="center">
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
                />
              )}
              {index + 1}
            </Circle>
            <Box w={8} bg="gray.600" h={0.5} />
            <CareerItem
              title={item.title}
              summary={item.summary}
              keywords={item.keywords}
              color={item.color}
              from={item.from}
              to={item.to}
            />
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};
