import React from "react";

const LinkedIn = ({ size = 24, color = "black" }: TIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.3261 5.0462C7.3261 3.91761 6.35932 3 5.16568 3C3.96678 3 3 3.91761 3 5.0462C3 6.17479 3.96678 7.09364 5.16568 7.09364C6.35932 7.09364 7.3261 6.17479 7.3261 5.0462Z"
        fill={color}
      />
      <path d="M7.03197 8.64421H3.29675V20H7.03197V8.64421Z" fill={color} />
      <path
        d="M12.9479 8.64041H9.37098V19.9962H13.0983V14.3782C13.0983 12.8988 13.395 11.4631 15.3352 11.4631C17.2476 11.4631 17.274 13.1573 17.274 14.4744V19.9962H21V13.7677C21 10.7091 20.3049 8.35827 16.5288 8.35827C14.7127 8.35827 13.4966 9.29957 12.9967 10.1935H12.9479V8.64041Z"
        fill={color}
      />
    </svg>
  );
};

export default LinkedIn;
