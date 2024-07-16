"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useMultistepForm } from "@/hooks/use-multiform";
import { useFormStore } from "@/store/form";
import { Pekerjaan } from "@/components/form-steps/pekerjaan";
import { Penggunaan } from "@/components/form-steps/penggunaan";
import { Jenis } from "@/components/form-steps/jenis";
import { Processor } from "@/components/form-steps/processor";
import { canNextStep, cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

export function FindForm() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const data = useFormStore((state: any) => state.user);
  params.set("pekerjaan", data.pekerjaan);
  params.set("penggunaan", data.penggunaan);
  params.set("jenis_laptop", data.jenis_laptop);
  params.set("processor", data.processor);
  const { first, last, nextStep, prevStep, currentStepIndex, step } =
    useMultistepForm([
      <Pekerjaan key={1} />,
      <Penggunaan key={2} />,
      <Jenis key={3} />,
      <Processor key={4} />,
    ]);
  const disabled = !canNextStep({ currentStepIndex, data });

  return (
    <div className="w-full max-w-4xl space-y-5">
      <div className="px-5 md:px-0">{step}</div>
      <div className="flex gap-2 items-center float-end px-5 md:px-0">
        {!first && (
          <Button onClick={prevStep}>Back</Button>
          //   <motion.button
          //     whileHover={{ scale: 1.1 }}
          //     whileTap={{ scale: 0.9 }}
          //     onClick={prevStep}
          //     className="px-4 py-2 rounded-lg ] border-2 border-[#181825] hover:border-[#f0c6c6]
          // "
          //   >
          //     Back
          //   </motion.button>
        )}
        {!last && (
          <Button onClick={nextStep} disabled={disabled}>
            Next
          </Button>
          // <motion.button
          //   whileHover={{ scale: 1.1 }}
          //   whileTap={{ scale: 0.9 }}
          //   onClick={nextStep}
          //   disabled={disabled}
          //   className={cn(
          //     "px-4 py-2 rounded-lg bg-[#181825] border-2 border-[#181825] hover:border-[#f0c6c6]",
          //     disabled && "opacity-50 hover:border-none"
          //   )}
          // >
          //   Next
          // </motion.button>
        )}
        {last && (
          <Link
            href={disabled ? "#" : `/find/result?${params.toString()}`}
            className={cn(
              disabled && "opacity-50",
              buttonVariants({ variant: "default" })
            )}
          >
            Submit
          </Link>
        )}
      </div>
    </div>
  );
}
