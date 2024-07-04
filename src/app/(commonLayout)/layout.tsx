import Container from "@/components/container";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fatwa in Bangla",
  description: "Bangla Fatwa knowlage",
};
export default function mainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {}
