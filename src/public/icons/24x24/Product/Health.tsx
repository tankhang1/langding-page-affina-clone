import React from "react";

const Health = ({ size = 24, color = "black" }: TIconProps) => {
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
        d="M8 13.9291C4.60771 13.4439 2 10.5265 2 7V4C2 2.89543 2.89543 2 4 2H5C5.55228 2 6 2.44772 6 3C6 3.55228 5.55228 4 5 4H4V7C4 9.76142 6.23858 12 9 12C11.7614 12 14 9.76142 14 7V4H13C12.4477 4 12 3.55228 12 3C12 2.44772 12.4477 2 13 2H14C15.1046 2 16 2.89543 16 4V7C16 10.5265 13.3923 13.4439 10 13.9291V16C10 18.2091 11.7909 20 14 20C16.2091 20 18 18.2091 18 16V15.8293C16.8348 15.4175 16 14.3062 16 13C16 11.3431 17.3431 10 19 10C20.6569 10 22 11.3431 22 13C22 14.3062 21.1652 15.4175 20 15.8293V16C20 19.3137 17.3137 22 14 22C10.6863 22 8 19.3137 8 16V13.9291ZM19 14C19.5523 14 20 13.5523 20 13C20 12.4477 19.5523 12 19 12C18.4477 12 18 12.4477 18 13C18 13.5523 18.4477 14 19 14Z"
        fill={color}
      />
    </svg>
  );
};

export default Health;