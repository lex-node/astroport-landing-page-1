import React, { FC } from "react";
import _Link from "next/link";
import { Link } from "@chakra-ui/react";

type Props = {
  href: string;
  label: string;
};

const NavbarLink: FC<Props> = ({ href, label }) => {
  return (
    <_Link href={href}>
      <Link color="white">{label}</Link>
    </_Link>
  );
};

export default NavbarLink;
