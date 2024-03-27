import { type JSX } from "react";
import { Flex, List, ListItem, Box, Text } from "@chakra-ui/react";
import { type CareerItems } from "../../types/Career.ts";
import { CareerItem } from "../molecules/CareerItem.tsx";
import { CareerItemNumber } from "../molecules/CareerItemNumber.tsx";

export const CareerTimeline = ({ items }: CareerItems): JSX.Element => {
  return items.length === 0 ? (
    <Text fontSize="xl" textAlign="center">
      No career items to display.
    </Text>
  ) : (
    <List spacing={6} py={20}>
      {items.map((item, index) => (
        <ListItem key={index}>
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
        </ListItem>
      ))}
    </List>
  );
};
