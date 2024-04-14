import { Button, Group, Menu, MenuTarget, rem, Text } from "@mantine/core";
import React from "react";
import { IconArrowDown, IconChevronDown } from "@tabler/icons-react";
import COLORS from "@/utils/config/color";
import NavMenu from "./NavMenu";
import Up from "@/public/icons/24x24/Arrow/Up";
import Down from "@/public/icons/24x24/Arrow/Down";

type TNavItem = {
  label: string;
  isDropDownIcon?: boolean;
  onClick: () => void;
};
const NavItemMenu = ({ label, isDropDownIcon, onClick }: TNavItem) => {
  return (
    <Menu shadow="md" withArrow arrowSize={12}>
      <Menu.Target>
        <Group
          gap={"sm"}
          className="hover:scale-105 duration-75 cursor-pointer"
          onClick={onClick}
        >
          <Text fs={rem(16)} fw={700} c={COLORS.Nav_Item} tt="uppercase">
            {label}
          </Text>
          {isDropDownIcon && <Down color={COLORS.Nav_Item} />}
        </Group>
      </Menu.Target>
      <Menu.Dropdown>
        <NavMenu />
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavItemMenu;
