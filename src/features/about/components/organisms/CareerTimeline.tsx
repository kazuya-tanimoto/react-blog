import { type JSX, memo } from "react";
import { Circle, Flex, List, ListItem, Box } from "@chakra-ui/react";
import { BiSolidUpArrow } from "react-icons/bi";
import { type CareerItems } from "../../types/Career.ts";
import { CareerItem } from "../molecules/CareerItem.tsx";

export const CareerTimeline = memo(({ items }: CareerItems): JSX.Element => {
  return (
    <>
      {/* Convert Timeline based on Flex to based on List components */}
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
                  content: index === 0 ? '""' : "none",
                  position: "absolute",
                  // top: "100%",
                  bottom: "100%",
                  w: "0.5",
                  h: "120",
                  bg: "#4A5668",
                  zIndex: -1,
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  top: "100%",
                  w: "0.5",
                  h: "120",
                  bg: "#4A5668",
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
    </>
  );
});
