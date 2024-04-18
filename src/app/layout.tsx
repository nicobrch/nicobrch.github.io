import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"
import { ProgressBarProvider } from "@/components/progress-bar-provider";
import Navbar from "@/components/nav/navbar";
import ScrollToTopButton from "@/components/button/scroll-top-button";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: 'nicobrch',
    template: '%s | nicobrch',
  },
  description: "Engineer, student. I like to build things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head/>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressBarProvider/>
          <Navbar/>
          <main className="flex flex-col items-center justify-between py-8 mb-4">
            {children}
          </main>
          <ScrollToTopButton/>
        </ThemeProvider>
      </body>
    </html>
  );
}
