import { NavigationLinks } from "@/components/molecules/NavigationLinks";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import { Flex, Text } from "@chakra-ui/react";
import type { JSX } from "react";

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
