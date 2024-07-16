"use client";

import { useFormStore } from "@/store/form";
import { RadioCard } from "@/components/radio-card";
import { motion } from "framer-motion";

const options = [
  {
    id: "traditional",
    label: "Tradisional",
    imgSrc: "traditional.svg",
    occupations: ["mahasiswa", "pekerja-kantoran", "professional", "others"],
    usage: ["daily-use", "multimedia", "gaming"],
  },
  {
    id: "2in1-laptop",
    label: "2-in-1 Laptop",
    imgSrc: "2in1.svg",
    occupations: ["mahasiswa", "professional", "others"],
    usage: ["multimedia"],
  },
  {
    id: "special-laptop",
    label: "Special Laptop",
    imgSrc: "special.svg",
    occupations: ["pekerja-kantoran", "professional", "others"],
    usage: ["multimedia", "office"],
  },
];

export function Jenis() {
  const data = useFormStore((state: any) => state.user);
  const updateUser = useFormStore((state: any) => state.updateUser);

  function handleJenisChange(id: string) {
    updateUser({ jenis_laptop: id });
  }

  return (
    <div className="w-full max-w-4xl space-y-5">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
      >
        <h1 className="text-left scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Pilih Jenis Laptop
        </h1>
        <h2 className="text-foreground-soft text-left scroll-m-20 text-lg tracking-tight">
          Pilih jenis laptop yang paling sesuai dengan penggunaan anda
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        // transition={{ delay: 0.3 }}
        exit={{ opacity: 0, x: 20 }}
        className="flex md:flex-row flex-col gap-5"
      >
        {options
          .filter(
            (option) =>
              option.occupations.includes(data.pekerjaan) &&
              option.usage.includes(data.penggunaan)
          )
          .map((option) => {
            if (
              data.pekerjaan === "professional" &&
              data.penggunaan === "multimedia" &&
              option.id === "traditional"
            )
              return;
            return (
              <RadioCard
                key={option.id}
                {...option}
                selected={option.id === data.jenis_laptop}
                onChange={handleJenisChange}
              />
            );
          })}
      </motion.div>
    </div>
  );
}
