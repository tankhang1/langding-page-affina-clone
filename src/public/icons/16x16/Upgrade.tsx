import React from "react";

const Upgrade = ({ size = 16, color = "black" }: TIconProps) => {
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
        d="M3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11L10.5858 11L9.29289 12.2929C8.90237 12.6834 8.90237 13.3166 9.29289 13.7071C9.68342 14.0976 10.3166 14.0976 10.7071 13.7071L13.7071 10.7071C14.0976 10.3166 14.0976 9.68342 13.7071 9.29289L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289C8.90237 6.68342 8.90237 7.31658 9.29289 7.70711L10.5858 9L3 9Z"
        fill={color}
      />
    </svg>
  );
};

export default Upgrade;
