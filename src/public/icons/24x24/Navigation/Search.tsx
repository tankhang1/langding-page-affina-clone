import React from "react";

const Search = ({ size = 24, color = "black" }: TIconProps) => {
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
        d="M2 11C2 15.9706 6.02944 20 11 20C13.1251 20 15.0782 19.2635 16.6179 18.0318L20.2929 21.7068C20.6834 22.0973 21.3166 22.0973 21.7071 21.7068C22.0976 21.3163 22.0976 20.6831 21.7071 20.2926L18.032 16.6175C19.2636 15.0779 20 13.1249 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11ZM4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11Z"
        fill={color}
      />
    </svg>
  );
};

export default Search;
