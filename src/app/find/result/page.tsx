import { FindResult } from "@/components/result";
import { getLaptop } from "@/db/db";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Metadata } from "next";
import { getDetail } from "@/db/db";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finde - Hasil",
  description: "Cari laptop yang cocok untukmu",
};

export default async function Result({
  searchParams,
}: {
  searchParams?: {
    pekerjaan: string;
    penggunaan: string;
    jenis_laptop: string;
    processor: string;
  };
}) {
  if (!searchParams || JSON.stringify(searchParams) === "{}") {
    return <div>Kosong</div>;
  }
  const laptop = await getLaptop(searchParams);

  if (!laptop) {
    return (
      <div className="mx-auto w-full max-w-screen-2xl mb-[15rem] md:mt-20 flex flex-col items-center justify-center text-center md:px-0 px-5">
        <div className="space-y-4">
          <Link href="/find">
            <Image
              src="/assets/not-found.svg"
              alt="laptop"
              width={500}
              height={500}
            />
          </Link>
          <h1 className="md:text-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
            Laptop tidak ditemukan
          </h1>
        </div>
      </div>
    );
  }

  const detail = await getDetail(laptop.id);

  return (
    <MaxWidthWrapper className="mb-[15rem] md:mt-20 flex flex-col items-center justify-center text-center md:px-0 px-5">
      {/* <h1 className="md:text-left scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
        Laptop yang cocok untuk anda
      </h1> */}
      {laptop && <FindResult laptop={laptop} detail={detail} />}
      {/* {laptop.length ? (
      ) : ( */}

      {/* )} */}
    </MaxWidthWrapper>
  );
}
