import React from "react";

const House = ({ size = 24, color = "black" }: TIconProps) => {
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
        d="M13.4866 5.14678C12.6921 4.26402 11.3079 4.26402 10.5134 5.14678L6.00001 10.1617V19.0002C6.00001 19.5525 6.44772 20.0002 7.00001 20.0002H9.00001V17.0002C9.00001 15.3433 10.3432 14.0002 12 14.0002C13.6569 14.0002 15 15.3433 15 17.0002V20.0002H17C17.5523 20.0002 18 19.5525 18 19.0002V10.1617L13.4866 5.14678ZM3.7433 12.6691L4.00001 12.3839V19.0002C4.00001 20.657 5.34315 22.0002 7.00001 22.0002H9.00001H11H13H15H17C18.6569 22.0002 20 20.657 20 19.0002V12.3839L20.2567 12.6691C20.6262 13.0796 21.2585 13.1129 21.669 12.7435C22.0795 12.374 22.1128 11.7417 21.7433 11.3312L14.9732 3.80885C13.3842 2.04333 10.6158 2.04333 9.02683 3.80885L2.25671 11.3312C1.88726 11.7417 1.92053 12.374 2.33104 12.7435C2.74155 13.1129 3.37384 13.0796 3.7433 12.6691ZM13 20.0002V17.0002C13 16.4479 12.5523 16.0002 12 16.0002C11.4477 16.0002 11 16.4479 11 17.0002V20.0002H13ZM10 10.0002C9.44772 10.0002 9.00001 10.4479 9.00001 11.0002C9.00001 11.5525 9.44772 12.0002 10 12.0002H14C14.5523 12.0002 15 11.5525 15 11.0002C15 10.4479 14.5523 10.0002 14 10.0002H10Z"
        fill={color}
      />
    </svg>
  );
};

export default House;