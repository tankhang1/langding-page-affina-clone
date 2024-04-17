import {
  rem,
  Stack,
  Text,
  Image,
  Group,
  em,
  Box,
  getGradient,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import AppStore from "@/public/images/AppStore.png";
import GooglePlay from "@/public/images/GooglePlay.png";
import QR from "@/public/images/QR.png";
import Object from "@/public/images/Object.png";
import NextImage from "next/image";
import { useMediaQuery } from "@mantine/hooks";
import { useInView } from "react-intersection-observer";
import { useTailwindMerge } from "@/hooks/useTailwindMerge";
const AppBanner = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const theme = useMantineTheme();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log(inView);
  const Tag = isMobile ? Stack : Group;
  return (
    <Tag
      ref={ref}
      bg={getGradient(
        { deg: 0, from: "rgba(1,88,214,0.8)", to: "rgba(1,88,214,1)" },
        theme
      )}
      w={"100%"}
      h={isMobile ? "auto" : rem(528)}
      pt={isMobile ? "lg" : 0}
      px={"lg"}
      justify={isMobile ? "space-between" : "space-around"}
      align="center"
      wrap="nowrap"
      className={useTailwindMerge(
        "opacity-0 translate-y-10 duration-500 ease-linear",
        inView && "opacity-100 translate-y-0"
      )}
    >
      <Stack gap={"lg"}>
        <Text
          fw={700}
          size={isMobile ? rem(36) : rem(52)}
          lh={"h1"}
          c={"white"}
          w={isMobile ? "100%" : "50%"}
        >
          Make Your Protection Simple
        </Text>
        <Group>
          <Image
            component={NextImage}
            src={AppStore}
            alt="App Store"
            h={rem(40)}
            fit="contain"
          />
          <Image
            component={NextImage}
            src={GooglePlay}
            alt="App Store"
            h={rem(40)}
            fit="contain"
          />
        </Group>
        {!isMobile && (
          <Box
            bg={"white"}
            w={rem(88)}
            h={rem(88)}
            className=" justify-center flex items-center rounded-2xl"
          >
            <Image
              component={NextImage}
              src={QR}
              alt="Affina 2.0 QR Code"
              h={rem(56)}
              w={rem(56)}
              fit="cover"
            />
          </Box>
        )}
      </Stack>
      <Image
        component={NextImage}
        src={Object}
        alt="Object banner"
        h={"100%"}
        w={"auto"}
        maw={isMobile ? "100%" : "60%"}
        fit="fill"
      />
    </Tag>
  );
};

export default AppBanner;
