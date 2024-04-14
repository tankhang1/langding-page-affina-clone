import { Group, rem, Text } from "@mantine/core";
import React from "react";
import { IconArrowDown, IconChevronDown } from "@tabler/icons-react";
import COLORS from "@/utils/config/color";

type TNavItem = {
  label: string;
  isDropDownIcon?: boolean;
  onClick: () => void;
};
const NavItem = ({ label, isDropDownIcon, onClick }: TNavItem) => {
  return (
    <Group
      gap={"sm"}
      className="hover:scale-105 duration-75 cursor-pointer"
      onClick={onClick}
    >
      <Text fs={rem(16)} fw={700} c={COLORS.Nav_Item} tt="uppercase">
        {label}
      </Text>
      {isDropDownIcon && (
        <IconChevronDown size={"1.125rem"} color={COLORS.Nav_Item} />
      )}
    </Group>
  );
};

export default NavItem;
