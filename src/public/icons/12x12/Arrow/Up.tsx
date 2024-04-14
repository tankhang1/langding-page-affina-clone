import React from "react";

const Up = ({ size = 12, color = "black" }: TIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.51808 8L9.499 8C9.96095 8 10.1758 7.42717 9.82783 7.12335L6.33738 4.07597C6.149 3.9115 5.86808 3.9115 5.6797 4.07597L2.18924 7.12335C1.84125 7.42717 2.05613 8 2.51808 8Z"
        fill={color}
      />
    </svg>
  );
};

export default Up;
