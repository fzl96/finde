"use client";

import { InfinitySpin, ThreeDots } from "react-loader-spinner";

export function ResultLoader() {
  return (
    <div className="bg-[#181825] p-5 rounded-xl mt-5 space-y-10">
      <div className="flex flex-col gap-5">
        <div className="h-[18rem] grid place-items-center">
          <InfinitySpin color="#f2cdcd" />
        </div>
        <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {"__________"}
        </p>
      </div>
      <div className="flex items-center gap-2 float-end">
        <ThreeDots color="#f2cdcd" />
      </div>
    </div>
  );
}
