import { type JSX } from "react";
import { Icon } from "@chakra-ui/icons";
import { Divider, Flex, Image, Link } from "@chakra-ui/react";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavigationLinks } from "../molecules/NavigationLinks.tsx";

interface HeaderProps {
  loggedIn?: boolean;
}

export const Header = ({ loggedIn = false }: HeaderProps): JSX.Element => {
  return (
    <header>
      <Flex
        justify="space-between"
        direction={{ base: "column", sm: "row" }}
        p={{ base: 1, sm: 8 }}
        gap={{ sm: 32 }}
      >
        <Image src={logo} alt="Logo" w={{ base: 48, sm: 64 }} />
        <Flex alignItems="center">
          <NavigationLinks />
          {loggedIn && (
            <Flex alignItems="center" ml={4} gap={{ base: 4, sm: 8 }}>
              <Link as={RouterLink} to="#" ml={{ sm: 8 }}>
                <Icon as={IoSettingsOutline} boxSize={5} m={1} mt={2} />
                {/* Admin menu */}
              </Link>
              <Link as={RouterLink} to="#">
                <Icon as={IoIosLogOut} boxSize={5} m={1} mt={2} />
                {/* Logout */}
              </Link>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Divider />
    </header>
  );
};
