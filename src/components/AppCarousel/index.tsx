import React, { use, useEffect, useRef } from "react";
import { COMPANY_LOGOS } from "./mocks";
import NextImage from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel } from "@mantine/carousel";
import { Box, Group, Image } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useTailwindMerge } from "@/hooks/useTailwindMerge";

const AppCarousel = () => {
  const autoplay = useRef(AutoScroll());

  return (
    <Box w={"90%"} mx={"auto"}>
      <Carousel
        orientation="horizontal"
        slideGap={"lg"}
        height={40}
        slideSize={200}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        my={"3rem"}
        align={"center"}
      >
        {COMPANY_LOGOS.map((logo, index) => (
          <Carousel.Slide key={index}>
            <Image
              component={NextImage}
              src={logo}
              alt=""
              h={40}
              fit="contain"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default AppCarousel;
