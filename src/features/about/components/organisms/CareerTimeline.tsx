import { type JSX, useState } from "react";
import {
  Flex,
  List,
  ListItem,
  Box,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useScreenResolution } from "../../hooks/useScreenResolution.ts";
import type { CareerItems } from "../../types/Career.ts";
import { CareerItem } from "../molecules/CareerItem.tsx";
import { CareerItemNumber } from "../molecules/CareerItemNumber.tsx";
import { CareerDetailModal } from "./CareerDetailModal.tsx";

const colors = ["blue.600", "purple.800", "yellow.700"];
export const CareerTimeline = ({ items }: CareerItems): JSX.Element => {
  const { isBase } = useScreenResolution();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [selectedItemColor, setSelectedItemColor] = useState<string>("");

  const handleOpen = (id: number, color: string) => {
    setSelectedItemId(id);
    setSelectedItemColor(color);
    onOpen();
  };

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
        const color = colors[index % colors.length];

        return (
          <ListItem
            key={item.id}
            position="relative"
            _after={
              isBase && isNotLastItem
                ? {
                    position: "absolute",
                    h: "6",
                    w: "0.5",
                    bg: color,
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
                id={item.id}
                title={item.title}
                summary={item.summary}
                keywords={item.keywords}
                color={color}
                from={item.from}
                to={item.to}
                onOpen={() => {
                  handleOpen(item.id, color);
                }}
              />
            ) : (
              <Flex alignItems="center">
                <CareerItemNumber index={index} />
                <Box w={8} bg="gray.600" h={0.5} />
                <CareerItem
                  id={item.id}
                  title={item.title}
                  summary={item.summary}
                  keywords={item.keywords}
                  color={color}
                  from={item.from}
                  to={item.to}
                  onOpen={() => {
                    handleOpen(item.id, color);
                  }}
                />
              </Flex>
            )}
          </ListItem>
        );
      })}
      {selectedItemId && (
        <CareerDetailModal
          id={selectedItemId}
          color={selectedItemColor}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </List>
  );
};
