import React from "react";
import Link from "next/link";
import Image from "next/image";
import PreviewOfVercelClone from "@/public/vercel-clone-laravel/vercel-clone-thumnail.png";
import { FaArrowRight } from "react-icons/fa";
import MyProjectCard from "@/app/ui/me/projects/components/my-project-card";

const url = "https://github.com/memorandumtk/vercel-clone-app-Laravel";
const name = "Vercel Clone By Laravel with sail";
const description =
  "I created Vercel clone app by using Laravel inspired by Hkirat's youtube clip.";
const slug = "vercel-clone";

const VercelCloneCard = () => {
  return (
      <MyProjectCard url={url} name={name} description={description} slug={slug} imagePath={PreviewOfVercelClone} />
  );
};

export default VercelCloneCard;
