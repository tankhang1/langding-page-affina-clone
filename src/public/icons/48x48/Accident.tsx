import React from "react";

const Accident = ({ color = "black", size = 48 }: TIconProps) => {
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
        d="M29 15C29 17.7614 26.7614 20 24 20C21.2386 20 19 17.7614 19 15C19 12.2386 21.2386 10 24 10C26.7614 10 29 12.2386 29 15ZM31 15C31 18.866 27.866 22 24 22C20.134 22 17 18.866 17 15C17 11.134 20.134 8 24 8C27.866 8 31 11.134 31 15ZM24 22H21C13.8203 22 8 27.8203 8 35C8 37.7614 10.2386 40 13 40H22H24H26C28.2091 40 30 38.2091 30 36C30 33.7909 28.2091 32 26 32H24C24 31.9757 23.9996 31.9515 23.9987 31.9274L26.1229 24H27C33.0751 24 38 28.9249 38 35V39C38 39.5523 38.4477 40 39 40C39.5523 40 40 39.5523 40 39V35C40 27.8203 34.1797 22 27 22H24ZM21 24H24.0523L22.4321 30.0468C22.2929 30.0162 22.1483 30 22 30H13.8833L20.4144 24.0153C20.6083 24.0051 20.8036 24 21 24ZM16.3471 25.0296C14.3024 25.9855 12.6002 27.5518 11.475 29.4941L16.3471 25.0296ZM24 34V38H26C27.1046 38 28 37.1046 28 36C28 34.8954 27.1046 34 26 34H24ZM22 32H13C11.3431 32 10 33.3431 10 35C10 36.6569 11.3431 38 13 38H22V34V32Z"
        fill={color}
      />
    </svg>
  );
};

export default Accident;
