import { type JSX } from "react";
import { Divider, Flex, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavigationLinks } from "../molecules/NavigationLinks.tsx";

interface HeaderProps {
  loggedIn?: boolean;
}

export const Header = ({ loggedIn = false }: HeaderProps): JSX.Element => {
  return (
    <header>
      <Flex justify="space-between" p={8} gap={32}>
        <Image src={logo} alt="Logo" w={64} />
        <Flex alignItems="center" gap={8}>
          <NavigationLinks />
          {loggedIn && (
            <>
              <Link as={RouterLink} to="#" ml={8}>
                Admin menu
              </Link>
              <Link as={RouterLink} to="#">
                Logout
              </Link>
            </>
          )}
        </Flex>
      </Flex>
      <Divider />
    </header>
  );
};
