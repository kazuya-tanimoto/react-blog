import { type JSX } from "react";
import { Divider, Flex, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/logo.png";

interface HeaderProps {
  loggedIn?: boolean;
}

export const Header = ({ loggedIn = false }: HeaderProps): JSX.Element => {
  return (
    <header>
      <Flex justify="space-between" p={8} gap={32}>
        <Image src={logo} alt="Logo" w={64} />
        <Flex alignItems="center" gap={8}>
          <Link as={RouterLink} href="#">
            Home
          </Link>
          <Link as={RouterLink} href="#">
            About
          </Link>
          <Link as={RouterLink} href="#">
            Contact
          </Link>
          {loggedIn && (
            <>
              <Link as={RouterLink} href="#" ml={8}>
                Admin menu
              </Link>
              <Link as={RouterLink} href="#">
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
