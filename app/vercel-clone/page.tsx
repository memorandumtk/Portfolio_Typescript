import React from "react";
import Link from "next/link";
import Image from "next/image";
import ExampleOfMap from "@/public/garbage-box-finder/map-example.png";
import { FaArrowLeft } from "react-icons/fa";

const url = "https://github.com/memorandumtk/vercel-clone-app-Laravel";
const name = "Vercel Clone By Laravel with sail";

const Page = () => {
  return (
    <div className="px-24 lg:px-32 py-16 font-semibold text-lg leading-10">
      <h1 className="text-4xl">{name}</h1>
      <div className="pt-4">
        <Link href={url} className="text-xl underline hover:text-green-300">
          Git hub link
        </Link>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        <p className="indent-2">
          This is my first project that I tried to make a vercel clone app using
          Laravel. I was inspired by Hkirat&apos;s youtube clip. I built this
          app using Laravel and sail, which is a docker environment for Laravel
          and used Storage facade, Job worker, Laravel websocket server, Dnsmasq
          and so on as features to implement close similar thing asn what Hkirat
          described in his clip.
        </p>
        <p>
          I summarized what I did mainly for this project on README.md on the
          github repository. So, please check it out if you are interested in
          this project.
        </p>
        <p>
          <a
              href="https://twitter.com/TK47781211/status/1766566920663249330"
              className={"text-cyan-500 hover:underline"}
          >This</a> is a twitter post link that you can see the demo
          of this app.
        </p>
      </div>

      <div className="pt-8">
        <Link href="/" className="flex items-center hover:text-cyan-500">
          <FaArrowLeft />
          Back to home.
        </Link>
      </div>
    </div>
  );
};

export default Page;
