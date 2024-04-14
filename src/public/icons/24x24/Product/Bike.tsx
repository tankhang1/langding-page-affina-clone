import React from "react";

const Bike = ({ size = 24, color = "black" }: TIconProps) => {
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
        d="M17.5627 6.05609L17.2197 4.11238C17.6375 4.20665 18.0788 4.34788 18.4649 4.54886C18.9009 4.77586 19.1938 5.03643 19.3534 5.33704L17.6287 6.02694C17.6062 6.03594 17.5842 6.04567 17.5627 6.05609ZM18.4849 11.2816L18.053 8.83432C19.7083 9.90777 21.0001 10.9282 21.6864 12.6323C18.4506 12.295 15.6461 14.8493 15.4618 18H8.50011C8.50011 16.4633 7.9224 15.0615 6.97232 14H9.27935L10.0514 16.3162C10.2261 16.8402 10.7924 17.1233 11.3163 16.9487C11.8403 16.774 12.1234 16.2077 11.9488 15.6838L11.1767 13.3675L11.6339 13.0247C12.6005 12.2997 12.8325 10.9458 12.1622 9.94034C11.7891 9.38072 11.1877 9.01469 10.5192 8.94042L3.20334 8.12755C2.13034 8.00832 1.09677 8.57061 0.613955 9.53624C0.117924 10.5283 0.312358 11.7265 1.09665 12.5108L1.23047 12.6446L0.445406 13.168C-0.0141227 13.4743 -0.138296 14.0952 0.168056 14.5547C0.474408 15.0142 1.09528 15.1384 1.55481 14.8321L2.78762 14.0102C4.86256 14.1576 6.50011 15.8875 6.50011 18V18.5C6.50011 19.3284 7.17168 20 8.00011 20H15.9236C16.8668 20 17.469 19.1872 17.453 18.4048C17.4041 16.0166 19.6632 14.1077 22.0318 14.722C22.4961 14.8424 22.9864 14.7447 23.3581 14.4691C23.7503 14.1782 24.0262 13.6647 23.9169 13.0657C23.4413 10.4594 21.6323 8.79685 19.54 7.41647L20.5572 7.00961C21.0963 6.79397 21.5684 6.21604 21.4685 5.48187C21.2808 4.10241 20.3178 3.2587 19.3884 2.77486C18.4618 2.29244 17.5001 1.99999 16.706 2C15.912 2.00001 14.8707 2.77487 15.0969 3.99999H14.0001C13.4478 3.99999 13.0001 4.4477 13.0001 4.99999C13.0001 5.55227 13.4478 5.99999 14.0001 5.99999H15.4258L16.5153 11.6292C16.6113 12.1731 17.13 12.5362 17.6739 12.4402C18.2178 12.3442 18.5809 11.8255 18.4849 11.2816ZM2.40281 10.4307C2.51089 10.2145 2.74227 10.0886 2.98248 10.1153L10.2984 10.9282C10.3796 10.9372 10.4527 10.9817 10.4981 11.0497C10.5796 11.172 10.5514 11.3366 10.4339 11.4247L9.66677 12H3.41432L2.51087 11.0966C2.33529 10.921 2.29177 10.6528 2.40281 10.4307ZM3.00011 19C3.55239 19 4.00011 18.5523 4.00011 18C4.00011 17.4477 3.55239 17 3.00011 17C2.44782 17 2.00011 17.4477 2.00011 18C2.00011 18.5523 2.44782 19 3.00011 19ZM3.00011 21C4.65696 21 6.00011 19.6569 6.00011 18C6.00011 16.3432 4.65696 15 3.00011 15C1.34325 15 0.000106302 16.3432 0.000106302 18C0.000106302 19.6569 1.34325 21 3.00011 21ZM21.0001 19C21.5524 19 22.0001 18.5523 22.0001 18C22.0001 17.4477 21.5524 17 21.0001 17C20.4478 17 20.0001 17.4477 20.0001 18C20.0001 18.5523 20.4478 19 21.0001 19ZM21.0001 21C22.657 21 24.0001 19.6569 24.0001 18C24.0001 16.3432 22.657 15 21.0001 15C19.3433 15 18.0001 16.3432 18.0001 18C18.0001 19.6569 19.3433 21 21.0001 21Z"
        fill={color}
      />
    </svg>
  );
};

export default Bike;