"use client";

import { useFormStore } from "@/store/form";
import { RadioCard } from "@/components/radio-card";
import { motion } from "framer-motion";

const options = [
  {
    id: "daily-use",
    label: "Penggunaan Harian",
    imgSrc: "daily.svg",
    occupations: ["mahasiswa", "pekerja-kantoran"],
  },
  {
    id: "multimedia",
    label: "Multimedia",
    imgSrc: "multimedia.svg",
    occupations: ["mahasiswa", "professional"],
  },
  {
    id: "gaming",
    label: "Gaming",
    imgSrc: "gaming.svg",
    occupations: ["mahasiswa", "professional"],
  },
  {
    id: "office",
    label: "Office",
    imgSrc: "office.svg",
    occupations: ["pekerja-kantoran"],
  },
];

export function Penggunaan() {
  const data = useFormStore((state: any) => state.user);
  const updateUser = useFormStore((state: any) => state.updateUser);

  function handlePenggunaanChange(id: string) {
    updateUser({ penggunaan: id });
  }

  console.log;

  return (
    <div className="w-full max-w-4xl space-y-5">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
      >
        <h1 className="text-left scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Pilih Penggunaan
        </h1>
        <h2 className="text-[#b8c0e0] text-left scroll-m-20 text-lg tracking-tight">
          Pilih penggunaan yang paling sesuai dengan kebutuhan anda
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
          .filter((option) => option.occupations.includes(data.pekerjaan))
          .map((option) => (
            <RadioCard
              key={option.id}
              {...option}
              selected={option.id === data.penggunaan}
              onChange={handlePenggunaanChange}
            />
          ))}
      </motion.div>
    </div>
  );
}
