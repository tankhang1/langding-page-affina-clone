import COLORS from "@/utils/config/color";
import {
  ActionIcon,
  CloseButton,
  Group,
  rem,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
type TNavSubItemMenu = {
  left: React.ReactNode;
  title: string;
  subTitle: string;
};
const NavSubItemMenu = ({ left, title, subTitle }: TNavSubItemMenu) => {
  return (
    <Group
      component={"button"}
      gap={"xs"}
      align="center"
      className="hover:bg-slate-100 hover:rounded-md"
      px={"xs"}
      py={"sm"}
    >
      {left}
      <Stack align="flex-start" gap={0}>
        <Text fw={700} fs={rem(14)} c={"black"}>
          {title}
        </Text>
        <Text fw={600} fs={rem(12)} c={COLORS.Nav_Item}>
          {subTitle}
        </Text>
      </Stack>
    </Group>
  );
};

export default NavSubItemMenu;
