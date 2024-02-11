"use client";

import Image from "next/image";
import Link from "next/link";

interface FindResultProps {
  laptop: {
    id: number | null;
    merek: string | null;
    cpu: number | null;
    gpu: number | null;
    harga: number | null;
    ram: number | null;
    berat: number | null;
    gambar: string | null;
    pekerjaan: string | null;
    penggunaan: string | null;
    jenis_laptop: string | null;
    processor: string | null;
    bobot: number | null;
  }[];
}

export function FindResult({ laptop }: FindResultProps) {
  return (
    <div className="bg-[#181825] p-5 rounded-xl mt-5 space-y-10">
      <div className="flex flex-col gap-5">
        {laptop[0]?.gambar && (
          <Image
            src={`/${laptop[0].gambar}` || ""}
            alt={laptop[0].merek || ""}
            className="h-[18rem] rounded-lg"
            width={300}
            height={288}
          />
        )}
        <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {laptop[0].merek || ""}
        </p>
      </div>
      <div className="flex items-center gap-2 float-end">
        <Link
          href="/find"
          className="px-4 py-2 rounded-lg bg-[#f2cdcd] text-[#181825] text-sm font-semibold"
        >
          Cari Ulang
        </Link>
      </div>
    </div>
  );
}
