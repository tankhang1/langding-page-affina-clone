import React from "react";

const Increase = ({ size = 16, color = "black" }: TIconProps) => {
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
        d="M3.82843 13.8995C3.43791 14.29 3.43791 14.9232 3.82843 15.3137C4.21896 15.7042 4.85212 15.7042 5.24265 15.3137L10.6066 9.94975L10.6066 11.7782C10.6066 12.3305 11.0543 12.7782 11.6066 12.7782C12.1589 12.7782 12.6066 12.3305 12.6066 11.7782L12.6066 7.53553C12.6066 6.98325 12.1589 6.53553 11.6066 6.53553H7.36397C6.81168 6.53553 6.36397 6.98325 6.36397 7.53553C6.36397 8.08782 6.81168 8.53553 7.36397 8.53553H9.19239L3.82843 13.8995Z"
        fill={color}
      />
    </svg>
  );
};

export default Increase;
