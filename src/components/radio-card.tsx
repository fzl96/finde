"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface RadioCardProps {
  id: string;
  label: string;
  selected: boolean;
  imgSrc: string;
  onChange: (id: string) => void;
}

export function RadioCard({
  id,
  label,
  selected,
  imgSrc,
  onChange,
}: RadioCardProps) {
  return (
    <motion.label
      whileHover={{ scale: 1.02 }}
      htmlFor={id}
      className={`bg-[#181825] relative cursor-pointer flex-1 p-4 rounded-lg ${
        selected ? "border-2 border-[#f0c6c6]" : "border-2 border-[#181825]"
      }`}
    >
      <input
        type="radio"
        id={id}
        name="occupation"
        className="sr-only"
        checked={selected}
        onChange={() => onChange(id)}
      />
      <div className="md:h-[20rem] flex md:flex-col w-full items-center md:justify-between  h-full md:p-14 md:gap-10 gap-5">
        <Image
          src={`/assets/${imgSrc}`}
          alt={label}
          className="md:h-[8rem] md:w-[8rem] h-20 w-20 object-contain"
          height={80}
          width={100}
        />
        <span className="text-lg font-semibold">{label}</span>
      </div>
    </motion.label>
  );
}
