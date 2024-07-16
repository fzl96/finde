import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

export function getLinks(query: string) {
  const q = query.replace(/\s/g, "%20");
  const links = [
    {
      marketplace: "Shopee",
      link: `https://shopee.co.id/search?keyword=${q}`,
      color: "#fab387",
    },
    {
      marketplace: "Tokopedia",
      link: `https://www.tokopedia.com/search?q=${q}`,
      color: "#a6e3a1",
    },
    {
      marketplace: "Blibli",
      link: `https://www.blibli.com/cari/${q}`,
      color: "#89b4fa",
    },
  ];

  return links;
}
