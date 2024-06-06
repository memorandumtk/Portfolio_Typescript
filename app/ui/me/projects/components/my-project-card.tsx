import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  name: string;
  url: string;
  description: string;
  slug: string;
  imagePath: StaticImageData | null;
}

const MyProjectCard: React.FC<ProjectProps> = ({
  name,
  url,
  description,
  slug,
  imagePath,
}) => {
  return (
    <div className="flex gap-4 items-center rounded-xl border border-slate-500 dark:border-slate-100 p-2">
      <div className="flex flex-col items-center">
        <p className="text-lg p-4 font-bold">{name}</p>
        <Link href={url} target="_blank" className="w-full hover:underline">
          {url}
        </Link>
        <p className="p-2">{description}</p>
        <Link
          href={"/" + slug}
          className={
            "flex gap-2 items-center hover:text-cyan-500 underline transition ease-in-out hover:translate-x-1 duration-200"
          }
        >
          For detail
          <FaArrowRight />
        </Link>
      </div>
      <div>
        <Link href={url} target="_blank" className="w-full">
          {imagePath && (
            <Image
              src={imagePath}
              alt={"Preview of WordPress blog ISR project."}
              width={800}
              height={400}
              className={"hover:opacity-80 rounded-xl"}
            />
          )}
        </Link>
      </div>
    </div>
  );
};

export default MyProjectCard;
