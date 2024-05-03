import { type JSX } from "react";
import { Divider, Flex, Text } from "@chakra-ui/react";
import { NavigationLinks } from "../molecules/NavigationLinks.tsx";

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Flex
        justify="space-between"
        direction={{ base: "column", sm: "row" }}
        p={{ base: 2, sm: 8 }}
        gap={{ base: 8, sm: 32 }}
        w={80}
      >
        <Flex
          justify={{ base: "center", sm: "space-between" }}
          alignItems="center"
          gap={8}
        >
          <NavigationLinks />
        </Flex>
        <Text align={"center"} fontSize="sm">
          © byte-lark All rights reserved.
        </Text>
      </Flex>
      <Divider />
    </footer>
  );
};
