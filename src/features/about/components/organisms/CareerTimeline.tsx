import { type JSX } from "react";
import {
  Flex,
  List,
  ListItem,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { type CareerItems } from "../../types/Career.ts";
import { CareerItem } from "../molecules/CareerItem.tsx";
import { CareerItemNumber } from "../molecules/CareerItemNumber.tsx";

export const CareerTimeline = ({ items }: CareerItems): JSX.Element => {
  const isBase = useBreakpointValue({
    base: true,
    sm: false,
  });

  if (items.length === 0) {
    return (
      <Text fontSize="xl" textAlign="center">
        No career items to display.
      </Text>
    );
  }

  return (
    <List spacing={6} py={20}>
      {items.map((item, index) => {
        const isNotLastItem = index !== items.length - 1;

        return (
          <ListItem
            key={index}
            position="relative"
            _after={
              isBase && isNotLastItem
                ? {
                    position: "absolute",
                    h: "6",
                    w: "0.5",
                    bg: "#4A5668",
                    // bg: `"{$color}"`,
                    content: '""',
                    top: "100%",
                    left: "50%",
                  }
                : {}
            }
          >
            {isBase ? (
              <CareerItem
                title={item.title}
                summary={item.summary}
                keywords={item.keywords}
                color={item.color}
                from={item.from}
                to={item.to}
              />
            ) : (
              <Flex alignItems="center">
                <CareerItemNumber index={index} />
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
            )}
          </ListItem>
        );
      })}
    </List>
  );
};
