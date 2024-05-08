import { type JSX } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useScreenResolution } from "../../features/about/hooks/useScreenResolution.ts";
import { NavigationLinks } from "../molecules/NavigationLinks.tsx";

export const Footer = (): JSX.Element => {
  const { isBase } = useScreenResolution();

  return (
    <footer>
      <Flex
        justify="space-between"
        direction={{ base: "column", sm: "row" }}
        p={{ base: 1, sm: 8 }}
        gap={{ sm: 32 }}
      >
        <Flex
          justify={{ base: "center", sm: "space-between" }}
          alignItems="center"
          gap={8}
        >
          {!isBase && <NavigationLinks />}
        </Flex>
        <Text align={"center"} fontSize="sm">
          © byte-lark All rights reserved.
        </Text>
      </Flex>
    </footer>
  );
};
