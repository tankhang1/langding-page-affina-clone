import React from "react";

const Auto = ({ size = 24, color = "black" }: TIconProps) => {
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
        d="M18.002 9.99499C18.002 9.99499 20.47 10.281 22.2395 10.4855C23.243 10.6015 24.005 11.4565 24.005 12.4665C24.005 13.2595 23.9895 14.2145 23.9895 15.0315C23.9895 15.559 23.7955 16.0495 23.4225 16.4225C23.0495 16.7955 22.5385 17 22.011 17C20.7925 17 19.4655 17 19.4655 17C19.2335 18.1405 18.224 19 17.0155 19C15.807 19 14.7975 18.1405 14.5655 17H8.44999C8.21799 18.1405 7.2085 19 6 19C4.7915 19 3.782 18.1405 3.55 17C3.55 17 2.804 17.0025 1.9955 17.005C1.467 17.007 0.959501 16.798 0.585001 16.425C0.210502 16.0515 -3.8147e-05 15.5445 -3.8147e-05 15.016C-3.8147e-05 14.0675 1.90735e-06 12.936 1.90735e-06 11.9885C1.90735e-06 10.89 0.890501 9.99949 1.989 9.99949H2.0035C2.0035 9.99949 3.55 7.42049 4.421 5.968C4.78 5.3685 5.4275 5.002 6.126 5.0015C7.9135 5.001 11.3685 5 13.0425 5C13.646 4.9995 14.2175 5.2735 14.595 5.745C15.711 7.13749 18.002 9.99499 18.002 9.99499ZM21.9845 15.0535L22 12.471L16.9645 11.8885L13.0455 6.9995H6.13L4.3345 9.99949H13.5155C13.7915 9.99949 14.0155 10.2235 14.0155 10.4995C14.0155 10.805 14.0155 11.194 14.0155 11.4995C14.0155 11.7755 13.7915 11.9995 13.5155 11.9995C11.243 11.9995 2 11.9995 2 11.9995L1.98454 15.0535H5.48453L5.5 16.516C5.5085 16.7845 5.7295 17 6 17C6.2705 17 6.491 16.7845 6.4995 16.516L6.48453 15.0535H16.5L16.5155 16.516C16.524 16.7845 16.745 17 17.0155 17C17.286 17 17.5065 16.7845 17.515 16.516L17.5 15.0535H21.9845Z"
        fill={color}
      />
    </svg>
  );
};

export default Auto;