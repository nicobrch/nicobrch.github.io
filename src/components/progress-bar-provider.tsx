"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { useTheme } from "next-themes"

export const ProgressBarProvider = () => {
  const { theme } = useTheme();
  return (
    <ProgressBar
      height="2px"
      color={theme === "dark" ? "#f5f5f5" : "#171717"}
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};