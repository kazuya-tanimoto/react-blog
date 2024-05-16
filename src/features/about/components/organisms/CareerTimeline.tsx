import { type JSX } from "react";
import { Flex, List, ListItem, Box, Text } from "@chakra-ui/react";
import { useScreenResolution } from "../../hooks/useScreenResolution.ts";
import { type CareerItems } from "../../types/Career.ts";
import { CareerItem } from "../molecules/CareerItem.tsx";
import { CareerItemNumber } from "../molecules/CareerItemNumber.tsx";

const colors = ["blue.600", "purple.800", "yellow.700"];
export const CareerTimeline = ({ items }: CareerItems): JSX.Element => {
  const { isBase } = useScreenResolution();

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
                    bg: colors[index % colors.length],
                    content: '""',
                    top: "100%",
                    left: "50%",
                  }
                : {}
            }
            data-testid={`career-item-${index}`}
          >
            {isBase ? (
              <CareerItem
                title={item.title}
                summary={item.summary}
                keywords={item.keywords}
                color={colors[index % colors.length]}
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
                  color={colors[index % colors.length]}
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
