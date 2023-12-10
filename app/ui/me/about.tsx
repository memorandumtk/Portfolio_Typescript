import Image from "next/image";
import profilePic from "@/public/myPicture.jpg";
import styles from "@/app/ui/styles.module.css";
import { useEffect, useRef, useCallback, useState } from "react";
import Social from "@/app/ui/social-icon";
// Image style reference site: https://stackoverflow.com/questions/60362442/cant-center-absolute-position-tailwind-css

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <div className="title flex flex-col items-center gap-4">
        <div className="">About Me</div>
        <a
          href="mailto:memorandum876@outlook.com"
          className="hover:translate-x-6"
        >
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={100}
            height={100}
            className=" -z-10 rounded-full shadow-lg shadow-lime-800 dark:shadow-slate-200"
          />
        </a>
      </div>
      <p className="text-lg leading-10">
        I would like to be a web developer to be able to build web services that
        resonate with many people.&nbsp;When I am studying and thinking about
        the logic of coding (mainly Javascript), I can feel comfortable and
        enjoy it.&nbsp; if I can have the opportunity to work with the
        development team, I will appreciate and dedicate my power to it.&nbsp;I
        am seeking a web developer position where I could leverage my
        engineering background and my strong curiosity and motivation to build
        innovative and attractive web services.&nbsp;If you like my page and
        projects, please reach out to me.
      </p>
      <div className="pt-4">
        <Social />
      </div>
    </div>
  );
}
