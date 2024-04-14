import { rem } from "@mantine/core";
import React from "react";

const Left = ({ size = 12, color = "black" }: TIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.02368 9.48192L7.02368 2.501C7.02368 2.03905 6.45085 1.82418 6.14703 2.17217L3.09965 5.66262C2.93518 5.851 2.93518 6.13192 3.09965 6.3203L6.14703 9.81076C6.45085 10.1587 7.02368 9.94387 7.02368 9.48192Z"
        fill={color}
      />
    </svg>
  );
};

export default Left;
