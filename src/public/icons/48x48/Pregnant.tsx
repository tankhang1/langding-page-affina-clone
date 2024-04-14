import React from "react";

const Pregnant = ({ size = 48, color = "black" }: TIconProps) => {
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
        d="M19.1033 6.5574C19.3477 6.06215 19.9474 5.85883 20.4426 6.10327C20.4793 6.12138 20.5163 6.13957 20.5535 6.15787C21.2231 6.48721 21.9699 6.85452 22.5299 7.5002C22.6707 7.50433 22.8129 7.53842 22.9472 7.60557C24.8403 8.55211 26.5613 10.2182 28.0494 11.6588C28.2682 11.8706 28.4819 12.0776 28.6905 12.2767C28.8882 12.4653 29 12.7267 29 13C29 14.2192 28.6576 15.1536 27.9153 15.8694C33.1642 17.4903 37 22.2036 37 27.8222C37 28.6719 36.9118 29.5024 36.7435 30.3058C37.2189 30.6858 37.5259 31.206 37.5188 31.8307C37.5116 32.4614 37.1824 32.9718 36.8703 33.3094C36.5453 33.6608 36.1332 33.9435 35.7268 34.1259C35.5541 34.2034 35.3402 34.2817 35.1058 34.3276C33.3024 37.1692 30.4301 39.0796 27 39.8287V40C27 40.5523 26.5523 41 26 41C25.4477 41 25 40.5523 25 40V39C25 38.5084 25.3573 38.0897 25.8428 38.0124C28.7737 37.5459 31.2127 36.1539 32.8517 34.0572C30.0239 33.3544 27.0122 31.6641 24.5478 29.9406C23.0651 28.9036 21.7394 27.8255 20.7184 26.8809C20.2082 26.4089 19.7663 25.9631 19.4159 25.5662C19.0789 25.1844 18.7805 24.7971 18.6056 24.4472C17.3558 21.9476 15.6507 16.7569 14.6256 12.5307C14.4745 13.2122 14.4092 13.9591 14.4196 14.7507C14.444 16.6073 14.8849 18.5685 15.4441 20.1704C15.94 21.5907 16.3612 22.9602 16.4335 24.1967C16.5089 25.4855 16.2083 26.7059 15.2071 27.7071C14.0247 28.8895 13.5124 29.7438 13.2647 30.5158C13.0082 31.3153 13 32.1165 13 33.3482C13 36.8274 15.5833 39 18 39C18.5523 39 19 39.4477 19 40C19 40.5523 18.5523 41 18 41C14.4167 41 11 37.8689 11 33.3482L11 33.2731C10.9998 32.1285 10.9997 31.0291 11.3603 29.9049C11.7377 28.7286 12.4753 27.6105 13.7929 26.2929C14.2917 25.7941 14.4881 25.188 14.4369 24.3135C14.3827 23.3867 14.0539 22.2562 13.5559 20.8296C12.946 19.0826 12.4477 16.9034 12.4198 14.777C12.392 12.667 12.8274 10.4649 14.2473 8.8416C14.5007 8.55201 14.8977 8.43343 15.2683 8.53666C15.639 8.63989 15.9175 8.94662 15.9847 9.32547C16.7405 13.5898 18.9478 20.6595 20.3944 23.5528C20.45 23.6639 20.6076 23.894 20.9152 24.2425C21.2095 24.5758 21.6011 24.973 22.0766 25.4128C23.0269 26.292 24.2812 27.3135 25.694 28.3016C28.3303 30.1454 31.3819 31.7764 33.9758 32.2561C34.0322 32.1404 34.0865 32.0236 34.1386 31.9057C33.9839 31.8495 33.8317 31.7859 33.6836 31.7183C33.0043 31.4081 32.2325 30.9272 31.3983 30.2987C28.3472 28 25.3107 25.2249 22.2929 22.2071C22.1054 22.0196 22 21.7652 22 21.5C22 19.3527 21.6984 17.8033 21.426 16.5875C21.3954 16.451 21.3643 16.3151 21.3335 16.1805C21.2304 15.7301 21.1308 15.2952 21.0665 14.9062C20.9812 14.391 20.9366 13.8481 21.0455 13.3039C21.5467 10.7979 21.4721 9.70716 21.2299 9.1468C21.0216 8.66496 20.6398 8.43096 19.5574 7.89672C19.0622 7.65228 18.8588 7.05264 19.1033 6.5574ZM34.6941 32.3689C34.6942 32.3688 34.6955 32.3687 34.6979 32.3686L34.6941 32.3689ZM34.7627 30.0038C34.6866 29.9746 34.6039 29.9399 34.5144 29.899C34.0097 29.6686 33.3649 29.2762 32.6017 28.7013C29.7482 26.5515 26.881 23.9495 23.9964 21.0814C23.9599 18.9427 23.6489 17.3608 23.3776 16.1502C23.3407 15.9855 23.3055 15.8319 23.2725 15.6874C23.1734 15.2542 23.0931 14.903 23.0397 14.5799C22.9701 14.1592 22.9671 13.8936 23.0066 13.6961C23.2853 12.3026 23.4316 11.1697 23.4167 10.2337C24.5077 11.0219 25.5618 12.0392 26.6381 13.0778C26.7516 13.1873 26.8654 13.2971 26.9795 13.4069C26.9212 13.938 26.7446 14.2201 26.5264 14.4303C26.1868 14.7574 25.6386 15.02 24.6908 15.3858C24.2573 15.5531 23.9961 15.9971 24.0605 16.4573C24.125 16.9176 24.498 17.2728 24.9608 17.3146C30.6321 17.8276 35 22.3723 35 27.8222C35 28.5708 34.9182 29.3004 34.7627 30.0038Z"
        fill={color}
      />
    </svg>
  );
};

export default Pregnant;
