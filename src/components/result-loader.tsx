"use client";

import { InfinitySpin } from "react-loader-spinner";

export function ResultLoader() {
  return (
    <div className="p-5 rounded-xl mt-5 space-y-10">
      <div className="flex flex-col gap-5">
        <div className="h-[18rem] grid place-items-center">
          <InfinitySpin color="#f2cdcd" />
        </div>
      </div>
    </div>
  );
}
