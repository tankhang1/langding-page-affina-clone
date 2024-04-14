import React from "react";

const Cart = ({ size = 24, color = "black" }: TIconProps) => {
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
        d="M9.88463 2.07718C10.3944 2.2896 10.6355 2.87507 10.4231 3.38488L8.50002 8.00026H15.5L13.5769 3.38488C13.3645 2.87507 13.6056 2.2896 14.1154 2.07718C14.6252 1.86477 15.2107 2.10584 15.4231 2.61565L17.6667 8.00026H19C20.6569 8.00026 22 9.34341 22 11.0003C22 12.0231 21.4881 12.9265 20.7065 13.468L19.6431 18.7847C19.2692 20.6544 17.6275 22.0003 15.7208 22.0003H8.27922C6.37249 22.0003 4.73083 20.6544 4.35689 18.7847L3.29354 13.468C2.51192 12.9265 2 12.0231 2 11.0003C2 9.34341 3.34315 8.00026 5 8.00026H6.33335L8.57694 2.61565C8.78936 2.10584 9.37483 1.86477 9.88463 2.07718ZM16.9776 10.0003C16.9928 10.0006 17.008 10.0006 17.0232 10.0003H19C19.5523 10.0003 20 10.448 20 11.0003C20 11.5525 19.5523 12.0003 19 12.0003H5C4.44772 12.0003 4 11.5525 4 11.0003C4 10.448 4.44772 10.0003 5 10.0003H6.97678C6.99203 10.0006 7.00725 10.0006 7.02244 10.0003H16.9776ZM5.43961 14.0003L6.31805 18.3925C6.50502 19.3273 7.32586 20.0003 8.27922 20.0003H15.7208C16.6741 20.0003 17.495 19.3273 17.6819 18.3925L18.5604 14.0003H5.43961Z"
        fill={color}
      />
    </svg>
  );
};

export default Cart;