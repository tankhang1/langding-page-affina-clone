import React from "react";

const Up = ({ size = 24, color = "black" }: TIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.7071 14.7071C17.3166 15.0976 16.6834 15.0976 16.2929 14.7071L12 10.4142L7.70711 14.7071C7.31658 15.0976 6.68342 15.0976 6.29289 14.7071C5.90237 14.3166 5.90237 13.6834 6.29289 13.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L17.7071 13.2929C18.0976 13.6834 18.0976 14.3166 17.7071 14.7071Z"
        fill={color}
      />
    </svg>
  );
};

export default Up;
