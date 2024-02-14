import Image from "next/image";
import profilePic from "@/public/myPicture.jpg";
import myGrouseMtPic from "@/public/mypicture-grousemt.jpg";
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
                  href=""
                  className=""
              >
                  <Image
                      src={profilePic}
                      alt="Picture of the author"
                      width={100}
                      height={100}
                      className="hover:shadow-xl z-10 aspect-auto rounded-full shadow-lg shadow-slate-500 dark:shadow-slate-300"
                  />
              </a>
          </div>
          <p className="text-lg leading-10 indent-1">
              I would like to be a web developer to be able to build web services that
              resonate with many people.&nbsp;When I am studying and thinking about
              the logic of coding, I can feel comfortable and
              enjoy during doing those.&nbsp; if I can have the opportunity to work with your
              development team, I will put all my effort into <span className="font-bold">having my task done</span> as
              soon as I can and
              <span className="font-bold"> befit the role of the team</span> and
              continue to learn how I can <span className="font-bold">improve my coding process by myself and hearing from coworkers as well</span>.&nbsp;
              Because I think it is one of the biggest benefits to work in a company.
          </p>
          <p className="text-lg leading-10 indent-1">
              I am seeking <span className="font-bold">a web developer position</span> where I could leverage my
              engineering background and my strong curiosity and motivation to build
              innovative and attractive web services.&nbsp;If you like my page and
              projects, please reach out to me.
          </p>
              <div className="pt-4">
                  <Social/>
              </div>
      </div>
);
}
