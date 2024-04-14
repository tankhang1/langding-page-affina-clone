import {
  Auto,
  Health,
  House,
  Carx48,
  Housex48,
  Travelx48,
  Healthx48,
  Bikex48,
} from "@/public/icons";
import { title } from "process";
import React from "react";
interface INavItem {
  title: string;
  subTitle: string;
  icon: ({ size, color }: TIconProps) => React.JSX.Element;
}
const NAV_ITEMS: Record<string, INavItem[]> = {
  personal: [
    {
      title: "Sức Khoẻ",
      subTitle: "An tâm tận hưởng cuộc sống",
      icon: Healthx48,
    },
    {
      title: "Nhà Ở",
      subTitle: "Để tổ ấm luôn là chốn an toàn",
      icon: Housex48,
    },
    {
      title: "Ô tô",
      subTitle: "Giảm thiểu rủi ro trên mọi hành trình",
      icon: Carx48,
    },
    {
      title: "Du Lịch",
      subTitle: "Yên tâm tận hưởng cuộc sống",
      icon: Travelx48,
    },
    {
      title: "Xe máy",
      subTitle: "Giảm thiểu rủi ro trên mọi hành trình",
      icon: Bikex48,
    },
  ],
  business: [
    {
      title: "Trách nhiệm sản phẩm",
      subTitle: "Yên tâm tận hưởng cuộc sống",
      icon: Healthx48,
    },
    {
      title: "Business Pack",
      subTitle: "Yên tâm trước mọi rủi ro tiềm ẩn",
      icon: Healthx48,
    },
    {
      title: "Sức khoẻ",
      subTitle: "Bảo vệ nguồn nhân lực của bạn",
      icon: Healthx48,
    },
  ],
  sme: [
    {
      title: "Sức khoẻ",
      subTitle: "Bảo vệ nguồn nhân lực của bạn",
      icon: Healthx48,
    },
    {
      title: "Flexi Benefit",
      subTitle: "Quy chuẩn chính sách khen thưởng",
      icon: Healthx48,
    },
  ],
};
export default NAV_ITEMS;
