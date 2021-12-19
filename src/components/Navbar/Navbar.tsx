import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  HStack,
  Heading,
  IconButton,
  useColorMode,
  Button,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import menuJson from "../menu.json";
import NavLink from "../Navlink/Navlink";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack as="nav" justifyContent="space-between" alignItems="center" py={3}>
      <NextLink href="/" passHref>
        <Link>
          <Heading size="sm">FraWolf</Heading>
        </Link>
      </NextLink>
      <HStack alignItems="center" spacing={{ base: 0, md: 2 }}>
        {menuJson.links.map((items) => {
          return <NavLink name={items.name} url={items.url} />;
        })}
        <IconButton
          aria-label="toggle theme"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          variant="ghost"
          size="md"
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
