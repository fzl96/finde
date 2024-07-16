import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <MaxWidthWrapper className="min-h-screen mb-40 mt-20 flex flex-col items-center justify-center text-center">
      <div className="mb-10 flex flex-col gap-12 items-center">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl">
          Temukan{" "}
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#b4befe] via-[#f5c2e7] to-[#fab387]">
            Laptop
          </span>{" "}
          Ideal Anda
        </h1>
        <h2 className="text-xl flex flex-col gap-2 md:px-0 px-5">
          <span>
            Sumber terpercaya untuk rekomendasi laptop yang sesuai dengan
            kebutuhan,
          </span>
          dari pelajar, pekerja kantoran, hingga gamer.
        </h2>
        <div className="flex-basis:auto w-fit">
          <Link
            href="/find"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-2xl font-medium"
            )}
          >
            Cari Laptop
          </Link>
        </div>
      </div>
      <Image
        src="/test.svg"
        alt="laptop"
        className="md:px-0 px-10"
        width={500}
        height={500}
      />
      <section
        id="about"
        className="mt-20 flex flex-col justify-center items-center space-y-10 md:px-0 px-7"
      >
        <p className="scroll-m-20 pb-2 md:text-3xl text-xl font-medium tracking-tight first:mt-0 text-left max-w-4xl leading-7 [&:not(:first-child)]:mt-6">
          Finde hadir untuk menyederhanakan proses mencari laptop serta
          memberikan panduan yang informatif
        </p>
        <div className="max-w-4xl text-left space-y-5">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Kami berkomitmen untuk menyediakan informasi terkini dan
            terkualifikasi tentang berbagai laptop di pasaran, membantu Anda
            membuat keputusan yang cerdas saat mencari perangkat yang sesuai
            dengan kebutuhan Anda.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Misi utama kami adalah membantu pengguna seperti Anda menemukan
            laptop yang tepat, yang memenuhi kebutuhan sehari-hari maupun
            kebutuhan khusus seperti produktivitas, gaming, desain grafis, dan
            banyak lagi. Kami mengerti bahwa memilih laptop dapat menjadi tugas
            yang rumit, mengingat variasi luas dalam spesifikasi, merek, dan
            model yang ada.
          </p>
        </div>
      </section>
      {/* <Image src="/laptop-3.png" alt="laptop" width={1370} height={743} /> */}
      {/* <Model /> */}
    </MaxWidthWrapper>
  );
}
