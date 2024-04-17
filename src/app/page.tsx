"use client";
import AppBanner from "@/components/AppBanner";
import AppCarousel from "@/components/AppCarousel";
import AppHeader from "@/components/AppHeader";
import {
  AppShell,
  AspectRatio,
  BackgroundImage,
  Box,
  Button,
  Center,
  em,
  Flex,
  Group,
  Image,
  Input,
  NativeSelect,
  RangeSlider,
  rem,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import NextImage from "next/image";
import HomePage_Icon from "@/public/images/Homepage_Icon.png";
import COLORS from "@/utils/config/color";
import AppButton from "@/components/AppButton";
import { LIST_AFFINA_FEATURES, LIST_AFFINA_PRODUCTS } from "./mocks";
import AppCarouselAnimation from "@/components/AppCarouselAnimation";
import { IconCalendarMonth } from "@tabler/icons-react";
import Down from "@/public/icons/24x24/Arrow/Down";
import { DateInput } from "@mantine/dates";
import Stars from "@/public/images/stars.png";
import New from "@/public/images/IMG.png";
import AppFooter from "@/components/AppFooter";
import { useMediaQuery } from "@mantine/hooks";
import { InView } from "react-intersection-observer";
import { useTailwindMerge } from "@/hooks/useTailwindMerge";
export default function Home() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Stack gap={0} bg={"#F3F9FF"}>
      <AppHeader />

      <AppBanner />
      <AppCarousel />
      <Group
        mx={"auto"}
        w={"80%"}
        justify="space-around"
        align="center"
        my={"lg"}
      >
        <Image
          component={NextImage}
          src={HomePage_Icon}
          alt=""
          h={isMobile ? rem(308) : rem(428)}
          className=" shadow-2xl shadow-[#FFEDFA]"
        />
        <Stack maw={isMobile ? "100%" : "45%"}>
          <Text fw={700} size="40px" lh={"48px"} c={COLORS.text}>
            Affina Là Gì?
          </Text>
          <Text fw={500} size="16px" lh={"24px"} c={COLORS.text}>
            Là một công ty công nghệ bảo hiểm đa năng, cung cấp các sản phẩm đa
            dạng và linh hoạt cho cá nhân, doanh nghiệp vừa và nhỏ, tiểu thương
            và hộ kinh doanh.
          </Text>
          <Text fw={500} size="16px" lh={"24px"} c={COLORS.text}>
            Với sự tận tâm và chuyên nghiệp, Affina đảm bảo tối ưu và đơn giản
            hóa quá trình cấp đơn, quản lý dịch vụ và bồi thường nhanh chóng,
            giúp khách hàng tiết kiệm thời gian và công sức trong việc mua bảo
            hiểm.
          </Text>
          <Text fw={500} size="16px" lh={"24px"} c={COLORS.text}>
            Affina luôn nỗ lực để tìm ra các giải pháp bảo hiểm phù hợp với nhu
            cầu của từng khách hàng, đảm bảo sự an tâm và tin tưởng tuyệt đối
            trong quá trình sử dụng dịch vụ của công ty.
          </Text>
          <Group my={"lg"}>
            <AppButton
              label="Mua bảo hiểm ngay"
              w={isMobile ? "100%" : "auto"}
            />
            <AppButton
              label="Xem thêm"
              type="outline"
              w={isMobile ? "100%" : "auto"}
            />
          </Group>
        </Stack>
      </Group>
      <Stack h={"auto"}>
        <Text
          tt={"capitalize"}
          fw={700}
          size={rem(40)}
          lh={rem(48)}
          ta={"center"}
          my={"lg"}
        >
          Affina sẽ làm gì được cho bạn?
        </Text>
        <InView>
          {({ inView, ref, entry }) => (
            <Group
              ref={ref}
              h={isMobile ? "auto" : rem(300)}
              justify="space-evenly"
              w={"100%"}
              wrap="wrap"
              my={"lg"}
            >
              {LIST_AFFINA_FEATURES.map((feature, index) => (
                <Stack
                  w={
                    isMobile
                      ? "45%"
                      : `${100 / LIST_AFFINA_FEATURES.length - 10}%`
                  }
                  bg={COLORS.white}
                  mt={"2rem"}
                  h={rem(260)}
                  p={"lg"}
                  align="center"
                  className={useTailwindMerge(
                    "rounded-xl",
                    "opacity-0 translate-y-16 duration-500 ease-linear",
                    inView && "opacity-100 translate-y-0"
                  )}
                >
                  <Image
                    component={NextImage}
                    src={feature.image}
                    alt={feature.title}
                    w={rem(96)}
                    h={rem(96)}
                    mt={rem(-70)}
                  />
                  <Text fw={700} size={rem(24)} lh={rem(32)} ta={"center"}>
                    {feature.title}
                  </Text>
                  <Text
                    fw={500}
                    size={rem(16)}
                    lh={rem(24)}
                    ta={"center"}
                    lineClamp={3}
                  >
                    {feature.description}
                  </Text>
                </Stack>
              ))}
            </Group>
          )}
        </InView>

        <AppButton
          label="Mua bảo hiểm ngay"
          w={rem(245)}
          className="self-center my-4"
        />
      </Stack>
      <Stack
        w={isMobile ? "100%" : "auto"}
        mx={"auto"}
        mt={"5rem"}
        mb={"2rem"}
        align="center"
      >
        <Text
          tt={"capitalize"}
          fw={700}
          size={rem(40)}
          lh={rem(48)}
          mb={"2rem"}
          ta={"center"}
        >
          Với hơn 1.000.000 loại bảo hiểm khác nhau
        </Text>
        <ScrollArea w={"100%"} type="never">
          <Group
            className="border-y-2 py-2 "
            wrap={isMobile ? "nowrap" : "wrap"}
            justify="space-around"
          >
            <Button variant="transparent" c={COLORS.blue}>
              <Text tt={"uppercase"} fw={700} size={rem(16)} lh={rem(24)}>
                Bảo hiểm cá nhân
              </Text>
            </Button>
            <Button variant="transparent" c={COLORS.Nav_Item}>
              <Text tt={"uppercase"} fw={700} size={rem(16)} lh={rem(24)}>
                Bảo hiểm cho hộ kinh doanh cá thể
              </Text>
            </Button>
            <Button variant="transparent" c={COLORS.Nav_Item}>
              <Text tt={"uppercase"} fw={700} size={rem(16)} lh={rem(24)}>
                Bảo hiểm cho SME
              </Text>
            </Button>
          </Group>
        </ScrollArea>
      </Stack>
      <Group mx={"auto"} w={"80%"} justify="space-around" gap={"5rem"}>
        <AppCarouselAnimation />
        <Stack gap={"lg"} w={isMobile ? "100%" : "40%"} mb={"2rem"}>
          <NativeSelect
            label={
              <Text fw={700} size={rem(16)} lh={rem(24)} c={"black"}>
                Sản phẩm dành cho
              </Text>
            }
            radius={"lg"}
            data={["Nam", "Nữ"]}
            styles={{
              input: {
                borderColor: "#00000008",
                backgroundColor: "#00000008",
                fontWeight: 400,
                fontSize: rem(16),
                height: rem(50),
                marginTop: 4,
              },
            }}
            rightSection={<Down color={COLORS.blue} />}
          />

          <DateInput
            label={
              <Text fw={700} size={rem(16)} lh={rem(24)} c={"black"}>
                Ngày tháng năm sinh
              </Text>
            }
            placeholder="DD/MM/YYYY"
            radius={"lg"}
            styles={{
              input: {
                borderColor: "#00000008",
                backgroundColor: "#00000008",
                fontWeight: 400,
                fontSize: rem(16),
                height: rem(50),
                marginTop: 4,
              },
            }}
            rightSection={<IconCalendarMonth color={COLORS.blue} />}
          />
          <Input.Wrapper
            label={
              <Text fw={700} size={rem(16)} lh={rem(24)} c={"black"}>
                Ngày tháng năm sinh
              </Text>
            }
          >
            <Input
              placeholder="0 - 65.000.000 đ "
              radius={"lg"}
              styles={{
                input: {
                  borderColor: "#00000008",
                  backgroundColor: "#00000008",
                  fontWeight: 400,
                  fontSize: rem(16),
                  height: rem(50),
                  marginTop: 4,
                },
              }}
            />
          </Input.Wrapper>
          <RangeSlider
            thumbSize={rem(32)}
            color={COLORS.blue}
            styles={{ thumb: { borderWidth: 1, borderColor: "#CEDFFE" } }}
            my={"lg"}
          />
          <AppButton
            label="Mua ngay"
            w={isMobile ? "60%" : "40%"}
            className="self-center"
          />
        </Stack>
      </Group>

      <Group justify="space-around" h={rem(512)} p={"lg"} bg={COLORS.blue}>
        {isMobile ? (
          <Text fw={700} c={"white"} size={rem(52)}>
            Người dùng nói gì về Affina
          </Text>
        ) : (
          <Stack w={"30%"} gap={"3rem"}>
            <Image
              component={NextImage}
              src={Stars}
              alt=""
              w={"100%"}
              h={rem(153)}
            />
            <Text fw={700} c={"white"} size={rem(52)}>
              Người dùng nói gì về Affina
            </Text>
          </Stack>
        )}
        <AspectRatio
          ratio={16 / 9}
          w={rem(532)}
          h={isMobile ? rem(188) : rem(300)}
          className="rounded-3xl overflow-clip"
        >
          <iframe
            src="https://sanbox1.affina.com.vn:4006/public/img/video.mp4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Group>
      <Stack my={"5rem"}>
        <Text fw={700} size={rem(40)} lh={rem(48)} ta={"center"}>
          Tin Tức nổi bật
        </Text>
        <Group justify="center">
          <Stack w={rem(368)}>
            <Image
              component={NextImage}
              alt=""
              src={New}
              w={rem(368)}
              h={rem(208)}
            />
            <Text fw={700} size={rem(16)}>
              Topic
            </Text>
            <Text fw={700} size={rem(24)}>
              Pellentesque facilisis volutpat feugiat.
            </Text>
          </Stack>
          <Stack w={rem(368)}>
            <Image
              component={NextImage}
              alt=""
              src={New}
              w={rem(368)}
              h={rem(208)}
            />
            <Text fw={700} size={rem(16)}>
              Topic
            </Text>
            <Text fw={700} size={rem(24)}>
              Pellentesque facilisis volutpat feugiat.
            </Text>
          </Stack>
          <Stack w={rem(368)}>
            <Image
              component={NextImage}
              alt=""
              src={New}
              w={rem(368)}
              h={rem(208)}
            />
            <Text fw={700} size={rem(16)}>
              Topic
            </Text>
            <Text fw={700} size={rem(24)}>
              Pellentesque facilisis volutpat feugiat.
            </Text>
          </Stack>
          <Stack w={rem(368)}>
            <Image
              component={NextImage}
              alt=""
              src={New}
              w={rem(368)}
              h={rem(208)}
            />
            <Text fw={700} size={rem(16)}>
              Topic
            </Text>
            <Text fw={700} size={rem(24)}>
              Pellentesque facilisis volutpat feugiat.
            </Text>
          </Stack>
          <Stack w={rem(368)}>
            <Image
              component={NextImage}
              alt=""
              src={New}
              w={rem(368)}
              h={rem(208)}
            />
            <Text fw={700} size={rem(16)}>
              Topic
            </Text>
            <Text fw={700} size={rem(24)}>
              Pellentesque facilisis volutpat feugiat.
            </Text>
          </Stack>
        </Group>
        <AppButton
          label="Xem tất cả"
          w={rem(268)}
          className="self-center my-10"
        />
      </Stack>
      <AppFooter />
    </Stack>
  );
}
