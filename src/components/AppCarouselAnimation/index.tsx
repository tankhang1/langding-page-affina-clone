import { LIST_AFFINA_PRODUCTS } from "@/app/mocks";
import { Carousel } from "@mantine/carousel";
import {
  BackgroundImage,
  Box,
  em,
  Image,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import NextImage from "next/image";
import Protection from "@/public/images/Protection.png";
import COLORS from "@/utils/config/color";
import { useMediaQuery } from "@mantine/hooks";
import { useTailwindMerge } from "@/hooks/useTailwindMerge";
const AppCarouselAnimation = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  return (
    <Box my={"lg"} w={isMobile ? "100%" : "47%"}>
      <Carousel
        slideSize={isMobile ? rem(150) : rem(360)}
        height={isMobile ? rem(250) : rem(550)}
        loop
        onSlideChange={setCurrentSlide}
        align={"center"}
        controlSize={rem(48)}
      >
        {LIST_AFFINA_PRODUCTS.map((product, index) => (
          <Carousel.Slide>
            <Box
              h={isMobile ? rem(250) : rem(500)}
              className="flex justify-center items-center flex-col"
            >
              {currentSlide === index && (
                <Image
                  component={NextImage}
                  alt="Protection"
                  src={Protection}
                  pos={"absolute"}
                  w={isMobile ? rem(150) : "auto"}
                  h={isMobile ? rem(185) : "auto"}
                  className=" ease-in-out duration-300"
                />
              )}
              <Image
                key={index}
                component={NextImage}
                src={product.image}
                alt=""
                h={
                  currentSlide === index
                    ? isMobile
                      ? rem(94)
                      : rem(188)
                    : isMobile
                    ? rem(34)
                    : rem(100)
                }
                className={
                  currentSlide === index
                    ? "scale-150 ease-linear duration-300 "
                    : "scale-50 ease-linear duration-300"
                }
                fit="contain"
              />

              {isMobile && currentSlide === index && (
                <Text
                  fw={700}
                  size={rem(20)}
                  lh={rem(20)}
                  ta={"center"}
                  c={"black"}
                  className="translate-y-10 ease-linear duration-300 "
                >
                  {product.title}
                </Text>
              )}
              {!isMobile && (
                <Text
                  fw={700}
                  size={currentSlide === index ? rem(32) : rem(14)}
                  lh={rem(20)}
                  ta={"center"}
                  c={currentSlide === index ? "black" : COLORS.Nav_Item}
                  className={
                    currentSlide === index
                      ? useTailwindMerge(
                          isMobile ? "translate-y-0" : "translate-y-40",
                          "ease-linear duration-300 "
                        )
                      : ""
                  }
                >
                  {product.title}
                </Text>
              )}
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default AppCarouselAnimation;
