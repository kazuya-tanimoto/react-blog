import { type JSX } from "react";
import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const NavigationLinks = (): JSX.Element => {
  return (
    <Flex alignItems="center" gap={{ base: 4, sm: 8 }}>
      <Link as={RouterLink} to="/">
        Home
      </Link>
      <Link as={RouterLink} to="/about">
        About
      </Link>
      <Link as={RouterLink} to="/contact">
        Contact
      </Link>
    </Flex>
  );
};
