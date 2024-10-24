import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/authContext";
import { userInformation } from "@/components/DataAction/DataHandle";
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
        <AuthProvider>
          <NextUIProvider>
            <Toaster />
            {children}
          </NextUIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
