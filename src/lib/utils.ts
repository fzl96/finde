import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function canNextStep({
  currentStepIndex,
  data,
}: {
  currentStepIndex: number;
  data: {
    pekerjaan: string;
    penggunaan: string;
    jenis_laptop: string;
    processor: string;
  };
}) {
  if (currentStepIndex === 0) {
    return data.pekerjaan !== "";
  }
  if (currentStepIndex === 1) {
    return data.penggunaan !== "";
  }
  if (currentStepIndex === 2) {
    return data.jenis_laptop !== "";
  }
  if (currentStepIndex === 3) {
    return data.processor !== "";
  }
}
