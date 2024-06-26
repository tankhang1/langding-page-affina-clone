import React from "react";

const Facebook = ({ size = 24, color = "black" }: TIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.51 5.32003H17.39V2.14003C16.4798 2.04538 15.5652 1.99865 14.65 2.00003C11.93 2.00003 10.07 3.66003 10.07 6.70003V9.32003H7V12.88H10.07V22H13.75V12.88H16.81L17.27 9.32003H13.75V7.05003C13.75 6.00003 14.03 5.32003 15.51 5.32003Z"
        fill={color}
      />
    </svg>
  );
};

export default Facebook;
