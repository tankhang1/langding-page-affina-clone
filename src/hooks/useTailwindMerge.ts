import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const useTailwindMerge = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};
