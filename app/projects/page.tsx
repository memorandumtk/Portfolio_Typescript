import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div className={styles.shape}></div>
      </div>
        <Image
          src="/grouseMountainView.jpg"
          width={1000}
          height={760}
          alt="Gourse Mt"
        />
      <p
        className={`${lusitana.className} text-xl text-white-800 md:text-3xl md:leading-normal`}
      >
        test
      </p>
    </main>
  );
}
