import { rem } from "@mantine/core";
import React from "react";

const Down = ({ size = 12, color = "black" }: TIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.49044 4H2.50952C2.04757 4 1.8327 4.57283 2.18069 4.87665L5.67115 7.92403C5.85952 8.0885 6.14044 8.0885 6.32882 7.92403L9.81928 4.87665C10.1673 4.57283 9.9524 4 9.49044 4Z"
        fill={color}
      />
    </svg>
  );
};

export default Down;
