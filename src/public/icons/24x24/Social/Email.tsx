import React from "react";

const Email = ({ size = 24, color = "black" }: TIconProps) => {
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
        d="M6 6H18C18.683 6 19.286 6.34236 19.6468 6.86482L15.7871 10.2957C13.6557 12.1903 10.4298 12.1416 8.35663 10.1836L4.56718 6.60464C4.93048 6.23165 5.43819 6 6 6ZM4 8.81995V16L4.00004 16.0134L7.54257 12.1166C7.35031 11.9675 7.16365 11.8078 6.98339 11.6376L4 8.81995ZM6 18C5.67381 18 5.36586 17.9219 5.09383 17.7834L9.31713 13.1378C11.0417 13.8356 12.974 13.8671 14.7201 13.2261L18.6174 17.9029C18.423 17.9659 18.2155 18 18 18H6ZM19.9616 16.3919C19.9868 16.2651 20 16.1341 20 16V9.22682L17.1158 11.7906C16.9245 11.9606 16.7268 12.1191 16.5235 12.2661L19.9616 16.3919ZM2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8Z"
        fill={color}
      />
    </svg>
  );
};

export default Email;