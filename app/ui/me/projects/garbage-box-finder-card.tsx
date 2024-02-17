import React from "react";
import Link from "next/link";
import Image from "next/image";
// import DemoOfGarbageApp from "@/public/garbage-box-finder/Garbage-box-finder-demo.mp4";
import { FaArrowRight } from "react-icons/fa";
import MyProjectCard from "@/app/ui/me/projects/components/my-project-card";

const url = "https://github.com/memorandumtk/garbage-app";
const name = "Garbage box finder app with Next.js";
const description =
  "This is my first project that I tried to make an app from my own idea, which is it will be useful if people can know the place garbage boxes are. It was coming to my mind when I was in Canada since Canada has lots of public garbage boxes.";
const slug = "garbage-box-finder";

const WordpressIsrCard = () => {
  return (
      <MyProjectCard url={url} name={name} description={description} slug={slug} imagePath={null}/>
  // <Project url={url} name={name} description={description} slug={slug} imagePath={DemoOfGarbageApp} />
  );
};

export default WordpressIsrCard;
