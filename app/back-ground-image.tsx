import Image from "next/image";
import myGrouseMtPic from "@/public/mypicture-grousemt.jpg";

const BackGround = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <svg
          className="fixed left-[max(50%,25rem)] top-0 h-screen w-[128rem] -translate-x-1/2
           dark:bg-slate-700 bg-slate-50
[mask-image:radial-gradient(64rem_64rem_at_top, white, transparent)]
           "
      >
          <defs>
              <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
              >
                  <path d="M100 200V.5M.5 .5H200" fill="none"/>
              </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-blue-50 dark:fill-slate-600">
              <path
                  d="
                  M100.5 200h201v201h-201Z
                  M100.5 200h201v201h-201Z
                  M300.5 0h201v201h-201Z
                  M300.5 400h201v201h-201Z
                  M300.5 400h201v201h-201Z
                  M500.5 600h201v201h-201Z
                  M500.5 200h201v201h-201Z
                  M-700.5 600h201v201h-201Z
                  M-100.5 400h201v201h-201Z
                  M-100.5 0h201v201h-201Z
                  M-300.5 200h201v201h-201Z
                  M-500.5 0h201v201h-201Z
                  M-500.5 400h201v201h-201Z
                  M-700.5 200h201v201h-201Z
                  M100.5 600h201v201h-201Z
                  M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
              />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"/>
      </svg>
    </div>
  );
};

export default BackGround;
