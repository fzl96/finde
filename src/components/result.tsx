"use client";

import { cn, getLinks } from "@/lib/utils";
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
  detail: any;
}

const specifications = [
  {
    title: "Processor",
    value: "processor",
  },
  {
    title: "GPU",
    value: "gpu",
  },
  {
    title: "RAM",
    value: "ram",
  },
  {
    title: "Penyimpanan",
    value: "penyimpanan",
  },
  {
    title: "Display",
    value: "display",
  },
  {
    title: "Berat",
    value: "berat",
  },
];

export function FindResult({ laptop, detail }: FindResultProps) {
  const links = getLinks(laptop[0].merek || "");
  return (
    <div className="p-5 rounded-xl mt-5 space-y-10">
      <div className="flex md:flex-row flex-col gap-5">
        {laptop[0]?.gambar && (
          <Image
            src={`/${laptop[0].gambar}` || ""}
            alt={laptop[0].merek || ""}
            className="h-[18rem] rounded-lg"
            width={300}
            height={288}
          />
        )}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="text-left space-y-4">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
              {laptop[0].merek || ""}
            </h1>
            <p className="scroll-m-20 text-lg font-semibold tracking-tight text-[#cad3f5]">
              {detail.length && detail[0].processor}
            </p>
            <p className="scroll-m-20 text-lg font-semibold tracking-tight text-[#cad3f5]">
              {detail.length && detail[0].gpu}
            </p>

            <div className="flex md:items-center md:flex-row flex-col gap-5">
              <p className="scroll-m-20 text-xl font-semibold tracking-tight">
                Rp.{detail.length && detail[0].harga}
              </p>
              <div className="flex items-center gap-3">
                {links?.map((link) => (
                  <a
                    key={link.marketplace}
                    href={link.link}
                    style={{
                      backgroundColor: link.color,
                    }}
                    className={cn(
                      "px-4 py-2 rounded-lg text-[#181825] text-sm font-semibold"
                    )}
                    target="_blank"
                  >
                    {link.marketplace}
                  </a>
                ))}
              </div>
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-left text-[#cad3f5]">
              {(detail.length && detail[0].infosingkat1) || ""}
            </p>
          </div>
          <div className="mt-5 space-y-5">
            <div className="text-left">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {(detail.length && detail[0].slogan1) || ""}
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-left text-[#cad3f5]">
                {(detail.length && detail[0].infoslogan1) || ""}
              </p>
            </div>
            <div className="text-left">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {(detail.length && detail[0].slogan2) || ""}
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-left text-[#cad3f5]">
                {(detail.length && detail[0].infoslogan2) || ""}
              </p>
            </div>
            <div className="text-left">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {(detail.length && detail[0].slogan3) || ""}
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-left text-[#cad3f5]">
                {(detail.length && detail[0].infoslogan3) || ""}
              </p>
            </div>
            <div className="text-left">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {(detail.length && detail[0].slogan4) || ""}
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-left text-[#cad3f5]">
                {(detail.length && detail[0].infoslogan4) || ""}
              </p>
            </div>
          </div>
          <ul className="list-disc md:pl-[1.1rem] pl-5">
            {specifications.map((spec) => (
              <li key={spec.value} className="text-[#cad3f5] text-left text-lg">
                <span className="font-semibold">{spec.title}:</span>{" "}
                {detail.length && detail[0][spec.value]}
              </li>
            ))}
          </ul>
        </div>
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
