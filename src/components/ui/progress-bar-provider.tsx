"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="linear-gradient(90deg, #FFC593 0%, #BC7198 100%)"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProviders;
