import React from "react";

const Hamburger = ({ size = 24, color = "black" }: TIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M2 6.5C2 5.67157 2.67157 5 3.5 5H20.5C21.3284 5 22 5.67157 22 6.5C22 7.32843 21.3284 8 20.5 8H3.5C2.67157 8 2 7.32843 2 6.5ZM2 12.5C2 11.6716 2.67157 11 3.5 11H12.5C13.3284 11 14 11.6716 14 12.5C14 13.3284 13.3284 14 12.5 14H3.5C2.67157 14 2 13.3284 2 12.5ZM3.5 17C2.67157 17 2 17.6716 2 18.5C2 19.3284 2.67157 20 3.5 20H16.5C17.3284 20 18 19.3284 18 18.5C18 17.6716 17.3284 17 16.5 17H3.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Hamburger;
