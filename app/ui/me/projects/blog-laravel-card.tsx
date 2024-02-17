import React from "react";
import Link from "next/link";
import Image from "next/image";
import PreviewOfLaravelBlog from "@/public/laravel-blog-images/landing.png";
import {FaArrowRight} from "react-icons/fa";
import MyProjectCard from "@/app/ui/me/projects/components/my-project-card";

const url = "https://github.com/memorandumtk/Laravel-Blog";
const name = "Blog System By Laravel";
const description =
  "This is my first blog project using Laravel. I used Inertia, so that I can combine React and Laravel and this project can be deployed with Docker.";
const slug = "blog-laravel";

const BlogLaravelCard = () => {
  return (
      <MyProjectCard url={url} name={name} description={description} slug={slug} imagePath={PreviewOfLaravelBlog} />
)
    ;
};

export default BlogLaravelCard;
