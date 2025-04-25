import type { NestedListItem } from "@/types/NestedList";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import type { JSX } from "react";
import { FiCheckCircle } from "react-icons/fi";

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
        // biome-ignore lint/suspicious/noArrayIndexKey:The list is static and does not change, so using index as key is safe.
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
