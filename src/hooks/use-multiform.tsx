"use client";

import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function nextStep() {
    setCurrentStepIndex((prev) => {
      if (prev === steps.length - 1) return prev;
      return prev + 1;
    });
  }

  function prevStep() {
    setCurrentStepIndex((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    goTo,
    nextStep,
    prevStep,
    steps,
    first: currentStepIndex === 0,
    last: currentStepIndex === steps.length - 1,
  };
}
