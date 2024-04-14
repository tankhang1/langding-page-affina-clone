import React from "react";

const VIE = ({ size = 24 }: TIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="9.5"
        fill="#FFADAD"
        stroke="white"
      />
      <path
        d="M12 6L13.6928 9.67003L17.7063 10.1459L14.739 12.89L15.5267 16.8541L12 14.88L8.47329 16.8541L9.26096 12.89L6.29366 10.1459L10.3072 9.67003L12 6Z"
        fill="#FFDD65"
      />
    </svg>
  );
};

export default VIE;
