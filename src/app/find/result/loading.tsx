import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ResultLoader } from "@/components/result-loader";

export default function ResultLoading() {
  return (
    <MaxWidthWrapper className="mb-[15rem] mt-20 flex flex-col items-center justify-center text-center md:px-0 px-5">
      <h1 className="md:text-left scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
        Laptop yang cocok untuk anda
      </h1>
      <ResultLoader />
    </MaxWidthWrapper>
  );
}
