import React from "react";

const ENG = ({ size = 24 }: TIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_5239_15059"
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <rect x="2" y="2" width="20" height="20" rx="10" fill="#444DA0" />
      </mask>
      <g mask="url(#mask0_5239_15059)">
        <rect x="2" y="2" width="20" height="20" rx="10" fill="#444DA0" />
        <rect
          x="4.1497"
          y="5.56389"
          width="2"
          height="20.204"
          transform="rotate(-45 4.1497 5.56389)"
          fill="white"
        />
        <rect
          x="18.3845"
          y="4.20133"
          width="2"
          height="20.0579"
          transform="rotate(45 18.3845 4.20133)"
          fill="white"
        />
        <rect
          x="11.6912"
          y="11.823"
          width="1"
          height="9.55101"
          transform="rotate(45 11.6912 11.823)"
          fill="#FFADAD"
        />
        <rect
          x="18.4909"
          y="4.58056"
          width="1"
          height="9.87712"
          transform="rotate(45 18.4909 4.58056)"
          fill="#FFADAD"
        />
        <rect
          width="1"
          height="9.05002"
          transform="matrix(-0.707107 0.707107 0.707107 0.707107 12.7071 11.8117)"
          fill="#FFADAD"
        />
        <rect
          width="1"
          height="10.0911"
          transform="matrix(-0.707107 0.707107 0.707107 0.707107 5.28547 4.86454)"
          fill="#FFADAD"
        />
        <rect x="10" y="2" width="4" height="20" fill="white" />
        <rect
          x="22"
          y="10"
          width="4"
          height="20"
          transform="rotate(90 22 10)"
          fill="white"
        />
        <rect x="11" y="2" width="2" height="20" fill="#FFADAD" />
        <rect
          x="22"
          y="11"
          width="2"
          height="20"
          transform="rotate(90 22 11)"
          fill="#FFADAD"
        />
        <rect x="2.5" y="2.5" width="19" height="19" rx="9.5" stroke="white" />
      </g>
    </svg>
  );
};

export default ENG;
