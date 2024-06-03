import { type JSX } from "react";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import { type NestedListItem } from "@/types/NestedList";

interface Props {
  spacing: number;
  color: string;
  listItems: NestedListItem[];
}
export const NestedList = ({
  spacing,
  color,
  listItems,
}: Props): JSX.Element => {
  return (
    <List spacing={spacing} mb={spacing} ml={spacing}>
      {listItems.map((item, index) => (
        <ListItem key={index} color="gray.700">
          <ListIcon as={FiCheckCircle} color={color} />
          {item.item}
          {item.subItem && (
            <NestedList
              spacing={spacing}
              color={color}
              listItems={item.subItem}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
};
