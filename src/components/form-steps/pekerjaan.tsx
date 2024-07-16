"use client";

import { useFormStore } from "@/store/form";
import { RadioCard } from "@/components/radio-card";
import { motion } from "framer-motion";

const options = [
  {
    id: "mahasiswa",
    label: "Mahasiswa",
    imgSrc: "student.svg",
  },
  {
    id: "pekerja-kantoran",
    label: "Pekerja Kantoran",
    imgSrc: "office-worker.svg",
  },
  {
    id: "professional",
    label: "Professional",
    imgSrc: "pro.svg",
  },
  {
    id: "others",
    label: "Lainnya",
    imgSrc: "job.svg",
  },
];

export function Pekerjaan() {
  const data = useFormStore((state: any) => state.user);
  const updateUser = useFormStore((state: any) => state.updateUser);

  function handleOccupationChange(id: string) {
    updateUser({ pekerjaan: id });
  }

  return (
    <div className="w-full max-w-4xl space-y-5">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
      >
        <h1 className="text-left scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Pilih Pekerjaan
        </h1>
        <h2 className="text-foreground-soft text-left scroll-m-20 text-lg tracking-tight">
          Pilih pekerjaan yang paling sesuai dengan anda
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        // transition={{ delay: 0.3 }}
        exit={{ opacity: 0, x: 20 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {options.map((option) => (
          <RadioCard
            key={option.id}
            {...option}
            selected={option.id === data.pekerjaan}
            onChange={handleOccupationChange}
          />
        ))}
      </motion.div>
    </div>
  );
}
