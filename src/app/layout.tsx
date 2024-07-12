import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Fatwa in Bangla",
  description: "Bangla Fatwa knowlage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Toaster />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
