import {
  Divider,
  Grid,
  Group,
  Menu,
  rem,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import NAV_ITEMS from "../mocks";
import NavSubItemMenu from "./NavSubItemMenu";
import COLORS from "@/utils/config/color";

const NavMenu = () => {
  return (
    <Group p={"md"} mt={"md"} w={"100%"}>
      <Stack>
        <Text fw={700} c={COLORS.Nav_Item} fs={rem(16)} tt={"uppercase"}>
          Dành cho Cá Nhân
        </Text>
        <SimpleGrid cols={2} spacing={"lg"}>
          {NAV_ITEMS["personal"].map((nav_item, index) => (
            <NavSubItemMenu
              key={index}
              left={<nav_item.icon size={48} color="rgba(1, 88, 214, 1)" />}
              title={nav_item.title}
              subTitle={nav_item.subTitle}
            />
          ))}
        </SimpleGrid>
      </Stack>
      <Divider orientation="vertical" size={"xs"} />
      <Stack>
        <Text fw={700} c={COLORS.Nav_Item} fs={rem(16)} tt={"uppercase"}>
          Dành cho hộ kinh doanh cá thể
        </Text>
        <SimpleGrid cols={1} spacing={"lg"}>
          {NAV_ITEMS["business"].map((nav_item, index) => (
            <NavSubItemMenu
              key={index}
              left={<nav_item.icon size={48} color="rgba(1, 88, 214, 1)" />}
              title={nav_item.title}
              subTitle={nav_item.subTitle}
            />
          ))}
        </SimpleGrid>
      </Stack>
      <Divider orientation="vertical" size={"xs"} />
      <Stack>
        <Text fw={700} c={COLORS.Nav_Item} fs={rem(16)} tt={"uppercase"}>
          Dành cho SME
        </Text>
        <SimpleGrid cols={1} spacing={"lg"}>
          {NAV_ITEMS["business"].map((nav_item, index) => (
            <NavSubItemMenu
              key={index}
              left={<nav_item.icon size={48} color="rgba(1, 88, 214, 1)" />}
              title={nav_item.title}
              subTitle={nav_item.subTitle}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Group>
  );
};

export default NavMenu;
