import { Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

type NavProps = {
  name: string;
  url: string;
  size?: string;
};

const NavLink = ({ name, url, size }: NavProps) => {
  return (
    <NextLink href={url} passHref>
      <Button as={Link} size={size || "md"} variant="ghost">
        {name}
      </Button>
    </NextLink>
  );
};

export default NavLink;
