import { type JSX } from "react";
import { Icon } from "@chakra-ui/icons";
import { Divider, Flex, Image, Link } from "@chakra-ui/react";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useScreenResolution } from "../../features/about/hooks/useScreenResolution";
import { NavigationLinks } from "../molecules/NavigationLinks";

interface HeaderProps {
  loggedIn?: boolean;
}

export const Header = ({ loggedIn = false }: HeaderProps): JSX.Element => {
  const { isBase } = useScreenResolution();

  return (
    <header>
      <Flex
        justify="space-between"
        alignItems="center"
        direction={{ base: "column", sm: "row" }}
        p={{ base: 1, sm: 8 }}
        gap={{ sm: 32 }}
      >
        <Image src={logo} alt="Logo" w={{ base: 48, sm: 64 }} />
        <Flex justify="space-between">
          <NavigationLinks />
          {loggedIn && (
            <Flex gap={{ base: 4, sm: 8 }}>
              <Link as={RouterLink} to="#" ml={{ base: 4, sm: 8 }}>
                {isBase ? (
                  <Icon
                    as={IoSettingsOutline}
                    boxSize={5}
                    m={1}
                    mt={2}
                    data-testid="admin-menu-icon"
                  />
                ) : (
                  "Admin menu"
                )}
              </Link>
              <Link as={RouterLink} to="#">
                {isBase ? (
                  <Icon
                    as={IoIosLogOut}
                    boxSize={5}
                    m={1}
                    mt={2}
                    data-testid="logout-icon"
                  />
                ) : (
                  "Logout"
                )}
              </Link>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Divider />
    </header>
  );
};
