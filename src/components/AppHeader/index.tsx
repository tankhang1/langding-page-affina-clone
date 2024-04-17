import {
  ActionIcon,
  Burger,
  em,
  Flex,
  Group,
  Indicator,
  rem,
  Space,
  Text,
} from "@mantine/core";
import Image from "next/image";
import LogoAffina from "@/public/images/Logo.png";
import EnglishIcon from "@/public/images/Language.png";
import NavItem from "./components/NavItem";

import {
  IconBurger,
  IconMenu,
  IconSearch,
  IconShoppingBag,
  IconShoppingCart,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import NavItemMenu from "./components/NavItemMenu";
const AppHeader = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return (
    <Flex
      justify={"space-between"}
      className="sticky top-0 z-50 backdrop-blur-sm bg-white/40"
      px={"md"}
      py={"lg"}
    >
      <Group gap={rem(44)}>
        <Image
          src={LogoAffina}
          alt="Logo Affina"
          width={120}
          height={24}
          className="hover:scale-105 duration-75 cursor-pointer"
        />
        {!isMobile && (
          <Group gap={"lg"}>
            <NavItemMenu
              label="Sản phẩm Bảo hiểm"
              isDropDownIcon={true}
              onClick={() => {}}
            />
            <NavItem label="Về chúng tôi" onClick={() => {}} />
            <NavItem label="Tin tức" onClick={() => {}} />
            <NavItem label="Liên hệ" onClick={() => {}} />
          </Group>
        )}
      </Group>
      <Group>
        <IconSearch className="hover:scale-105 duration-75 cursor-pointer" />
        <Indicator
          label={1}
          color="red"
          className="hover:scale-105 duration-75 cursor-pointer"
        >
          <IconShoppingBag />
        </Indicator>
        {!isMobile && (
          <Group
            gap={"xs"}
            className="hover:scale-105 duration-75 cursor-pointer"
          >
            <Image src={EnglishIcon} alt="Logo Affina" width={24} height={24} />
            <Text fw={500} fs={rem(16)}>
              English
            </Text>
          </Group>
        )}
        {isMobile && <Burger size={rem(24)} />}
      </Group>
    </Flex>
  );
};

export default AppHeader;
