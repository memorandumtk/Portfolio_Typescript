import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import { robotoSerif } from "@/app/ui/fonts";
import { alegreya } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kosuke Takagi",
  description:
    "Kosuke's portfolio created by Next.js, Typescript, Tailwind etc...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={robotoSerif.className}>{children}</body>
      </html>
  );
}
