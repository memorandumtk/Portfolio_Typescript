import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p
        className={`${lusitana.className} text-xl text-white-800 md:text-3xl md:leading-normal`}
      >
      this page is project1.
      </p>
    </main>
  );
}
