import COLORS from "@/utils/config/color";
import {
  ActionIcon,
  Button,
  Divider,
  em,
  Group,
  Image,
  Input,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import AppButton from "../AppButton";
import Logo from "@/public/images/Logo_Affina.png";
import AppStore from "@/public/images/AppStore.png";
import GooglePlay from "@/public/images/GooglePlay.png";
import NextImage from "next/image";
import Email from "@/public/icons/24x24/Social/Email";
import Zalo from "@/public/icons/24x24/Social/Zalo";
import Facebook from "@/public/icons/24x24/Social/Facebook";
import LinkedIn from "@/public/icons/24x24/Social/LinkedIn";
import { useMediaQuery } from "@mantine/hooks";
const AppFooter = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const Tag = isMobile ? Stack : Group;
  return (
    <Stack bg={COLORS.blue} h={isMobile ? "auto" : rem(540)} p={"2rem"}>
      <Group gap={"lg"} my={"1rem"} justify="space-between">
        <Stack gap={"xs"}>
          <Text fw={"bold"} size={rem(24)} lh={rem(32)} c={COLORS.white}>
            Đăng Ký Nhận Thông Tin
          </Text>
          <Text fw={"normal"} size={rem(16)} lh={rem(24)} c={COLORS.white}>
            Để không bỏ lỡ các chương trình khuyến mãi từ Affina
          </Text>
        </Stack>
        <Group w={isMobile ? "auto" : "50%"}>
          <Input
            placeholder="Email của bạn"
            w={"100%"}
            flex={1}
            radius={"lg"}
            styles={{
              input: {
                backgroundColor: "rgba(0,0,0,0.1)",
                borderColor: "rgba(0,0,0,0.1)",
                height: rem(48),
              },
            }}
            className=" placeholder:text-[rgba(255, 255, 255,0.5)]"
          />
          <AppButton
            label="Đăng ký"
            type="outline"
            h={rem(48)}
            isShadow={false}
          />
        </Group>
      </Group>
      <Divider color={"rgba(255,255,255,0.25)"} />
      <Tag justify="space-between" align="flex-start" my={"2rem"}>
        <Stack gap={"2rem"}>
          <Image
            component={NextImage}
            alt=""
            w={rem(120)}
            h={rem(24)}
            src={Logo}
          />
          <Group>
            <Image
              component={NextImage}
              alt=""
              w={rem(136)}
              h={rem(40)}
              src={AppStore}
            />
            <Image
              component={NextImage}
              alt=""
              w={rem(136)}
              h={rem(40)}
              src={GooglePlay}
            />
          </Group>
          <Group gap={"sm"}>
            <Text fw={"normal"} c={COLORS.white} size={rem(16)} lh={rem(24)}>
              Giấy phép kinh doanh số:
            </Text>

            <Text fw={"bold"} c={COLORS.white} size={rem(16)} lh={rem(24)}>
              0317130512.
            </Text>
          </Group>
        </Stack>
        <Stack>
          <Text fw={"bolder"} size={rem(20)} lh={rem(28)} c={COLORS.white}>
            Hỗ trợ khách hàng
          </Text>
          <Button variant="transparent" justify="flex-start" px={0}>
            <Text fw={"normal"} size={rem(14)} lh={rem(28)} c={COLORS.white}>
              Câu hỏi thường gặp
            </Text>
          </Button>
          <Button variant="transparent" justify="flex-start" px={0}>
            <Text fw={"normal"} size={rem(14)} lh={rem(28)} c={COLORS.white}>
              Hướng dẫn mua bảo hiểm
            </Text>
          </Button>
          <Button variant="transparent" justify="flex-start" px={0}>
            <Text fw={"normal"} size={rem(14)} lh={rem(28)} c={COLORS.white}>
              Yêu cầu hỗ trợ
            </Text>
          </Button>
        </Stack>
        <Stack w={"auto"}>
          <Text fw={"bolder"} size={rem(20)} lh={rem(28)} c={COLORS.white}>
            Chính sách
          </Text>
          <Button variant="transparent" justify="flex-start" px={0}>
            <Text fw={"normal"} size={rem(14)} lh={rem(28)} c={COLORS.white}>
              Chính sách bảo mật thông tin
            </Text>
          </Button>
          <Button variant="transparent" justify="flex-start" px={0}>
            <Text fw={"normal"} size={rem(14)} lh={rem(28)} c={COLORS.white}>
              Điều khoản và điều kiện
            </Text>
          </Button>
          <Button variant="transparent" justify="flex-start" px={0}>
            <Text fw={"normal"} size={rem(14)} lh={rem(28)} c={COLORS.white}>
              Chính sách thanh toán
            </Text>
          </Button>
        </Stack>
        <Stack w={isMobile ? "100%" : "25%"}>
          <Text fw={"bolder"} size={rem(20)} lh={rem(28)} c={COLORS.white}>
            Liên hệ
          </Text>
          <Group>
            <Text fw={"bold"} size={rem(16)} lh={rem(28)} c={COLORS.white}>
              1900-2525-99
            </Text>
            <Text fw={"bold"} size={rem(16)} lh={rem(28)} c={COLORS.white}>
              028-777-22999
            </Text>
          </Group>
          <Text fw={"normal"} size={rem(14)} lh={rem(28)} c={COLORS.white}>
            B7 An Phú New City, đường Nguyễn Hoàng, P. An Phú, Tp. Thủ Đức, Tp.
            Hồ Chí Minh, Việt Nam.
          </Text>
          <Group>
            <ActionIcon
              bg={"rgba(0,0,0,0.3)"}
              radius={"lg"}
              w={rem(40)}
              h={rem(40)}
            >
              <Email color={COLORS.white} />
            </ActionIcon>
            <ActionIcon
              bg={"rgba(0,0,0,0.3)"}
              radius={"lg"}
              w={rem(40)}
              h={rem(40)}
            >
              <Zalo color={COLORS.white} />
            </ActionIcon>
            <ActionIcon
              bg={"rgba(0,0,0,0.3)"}
              radius={"lg"}
              w={rem(40)}
              h={rem(40)}
            >
              <Facebook color={COLORS.white} />
            </ActionIcon>
            <ActionIcon
              bg={"rgba(0,0,0,0.3)"}
              radius={"lg"}
              w={rem(40)}
              h={rem(40)}
            >
              <LinkedIn color={COLORS.white} />
            </ActionIcon>
          </Group>
        </Stack>
      </Tag>
      <Divider color={"rgba(255,255,255,0.25)"} />
      <Text
        fw={"bold"}
        size={rem(16)}
        lh={rem(24)}
        c={COLORS.white}
        ta={"center"}
      >
        © 2022 Affina Việt Nam, All rights reserved.
      </Text>
    </Stack>
  );
};

export default AppFooter;
