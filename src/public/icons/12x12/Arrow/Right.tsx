import { rem } from "@mantine/core";
import React from "react";

const Right = ({ size = 12, color = "black" }: TIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.97629 2.51808L4.97629 9.499C4.97629 9.96095 5.54912 10.1758 5.85294 9.82783L8.90032 6.33738C9.06479 6.149 9.06479 5.86808 8.90032 5.6797L5.85294 2.18924C5.54912 1.84125 4.97629 2.05613 4.97629 2.51808Z"
        fill={color}
      />
    </svg>
  );
};

export default Right;
