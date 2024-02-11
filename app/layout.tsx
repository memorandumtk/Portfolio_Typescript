import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import { robotoSerif } from "@/app/ui/fonts";
import { alegreya } from "@/app/ui/fonts";
import { lusitana } from "@/app/ui/fonts";
import "./globals.css";
import { Providers } from "@/app/ui/theme-provider";
import BackGround from "@/app/back-ground-image";

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
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <body className={`${lusitana.className}`}>
      <BackGround />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
