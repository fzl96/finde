"use client";

import { useFormStore } from "@/store/form";
import { RadioCard } from "@/components/radio-card";
import { motion } from "framer-motion";

const options = [
  {
    id: "intel",
    label: "Intel",
    imgSrc: "intel.png",
  },
  {
    id: "amd",
    label: "AMD",
    imgSrc: "amd.png",
  },
];

export function Processor() {
  const data = useFormStore((state: any) => state.user);
  const updateUser = useFormStore((state: any) => state.updateUser);

  function handleProcessorChange(id: string) {
    updateUser({ processor: id });
  }

  return (
    <div className="w-full max-w-4xl space-y-5">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
      >
        <h1 className="text-left scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Pilih Processor
        </h1>
        <h2 className="text-foreground-soft text-left scroll-m-20 text-lg tracking-tight">
          Pilih brand processor yang anda inginkan
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        // transition={{ delay: 0.3 }}
        exit={{ opacity: 0, x: 20 }}
        className="flex md:flex-row flex-col gap-5"
      >
        {options.map((option) => (
          <RadioCard
            key={option.id}
            {...option}
            selected={option.id === data.processor}
            onChange={handleProcessorChange}
          />
        ))}
      </motion.div>
    </div>
  );
}
