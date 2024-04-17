import { useTailwindMerge } from "@/hooks/useTailwindMerge";
import COLORS from "@/utils/config/color";
import { Button, rem, Text, MantineStyleProps, BoxProps } from "@mantine/core";
import React from "react";
type TAppButton = {
  label: string;
  type?: "fill" | "outline";
  w?: MantineStyleProps["w"];
  h?: MantineStyleProps["h"];
  className?: BoxProps["className"];
  isShadow?: boolean;
};
const AppButton = ({
  label = "",
  type = "fill",
  w,
  h = rem(64),
  className = "",
  isShadow = true,
}: TAppButton) => {
  return (
    <Button
      px={rem(20)}
      h={h}
      radius={rem(32)}
      w={w}
      bg={type === "fill" ? COLORS.blue : COLORS.white}
      className={useTailwindMerge(
        "uppercase",
        isShadow && `shadow-2xl shadow-blue-500`,
        className
      )}
    >
      <Text
        fw={700}
        size={rem(16)}
        lh={rem(24)}
        c={type === "fill" ? COLORS.white : COLORS.blue}
      >
        {label}
      </Text>
    </Button>
  );
};

export default AppButton;
