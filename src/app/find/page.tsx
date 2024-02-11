import { FindForm } from "@/components/form";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finde - Cari Laptop",
  description: "Cari laptop yang cocok untukmu",
};

export default function FindPage() {
  return (
    <MaxWidthWrapper className="md:mb-[15rem] mb-[30rem] mt-20 flex flex-col items-center justify-center text-center">
      <Suspense fallback={<div>Loading...</div>}>
        <FindForm />
      </Suspense>
    </MaxWidthWrapper>
  );
}
