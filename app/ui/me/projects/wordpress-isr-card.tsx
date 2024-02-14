import React from "react";
import Link from "next/link";
import Image from "next/image";
import PreviewOfWordpressIsr from "@/public/preview-wordpress-isr.png";
import { FaArrowRight } from "react-icons/fa";
import Project from "@/app/ui/me/projects/components/project";

const url = "https://isr-memorandumsblog.vercel.app/";
const name = "Wordpress ISR With Next.js";
const description =
  "This is my first project using ISR (Incremental Static Regeneration) feature from Next.js. I use Wordpress as the headless CMS.";
const slug = "wordpress-isr";

const WordpressIsrCard = () => {
  return (
      <Project url={url} name={name} description={description} slug={slug} imagePath={PreviewOfWordpressIsr} />
  );
};

export default WordpressIsrCard;
