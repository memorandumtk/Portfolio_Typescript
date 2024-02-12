import React from "react";
import Link from "next/link";
import Image from "next/image";
import PreviewOfLaravelBlog from "@/public/preview-laravel-blog.png";
import {FaArrowRight} from "react-icons/fa";
import Project from "@/app/ui/me/projects/components/project";

const url = "https://github.com/memorandumtk/Laravel-Blog";
const name = "Blog System By Laravel";
const description =
  "This is my first blog project using Laravel. I used Inertia, so that I can combine React and Laravel and this project can be deployed with Docker.";
const slug = "blog-laravel";

const BlogLaravel = () => {
  return (
      <Project url={url} name={name} description={description} slug={slug} imagePath={PreviewOfLaravelBlog} />
)
    ;
};

export default BlogLaravel;
