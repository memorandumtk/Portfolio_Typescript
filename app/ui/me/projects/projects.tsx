import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import FCCProjects from "@/app/ui/me/projects/fcc-projects";
import WordpressIsr from "@/app/ui/me/projects/wordpress-isr";
import BlogLaravel from "@/app/ui/me/projects/blog-laravel";
import HorizontalLineThin from "@/app/ui/horizontal-line-thin";

export default function Projects() {
  return (
      <div className="flex flex-col gap-4 items-center text-center">
          <p className="title">Projects</p>
          <div className="">
              <p className="text-2xl font-bold italic">My Own Projects</p>
              <HorizontalLineThin />
              <div className="flex flex-col gap-4">
                  <WordpressIsr/>
                  <BlogLaravel/>
              </div>
          </div>

          <div className="">
              <p className="text-2xl font-bold italic pt-8">Free Code Camp Projects</p>
              <HorizontalLineThin />
              <FCCProjects/>
          </div>
      </div>
  );
}
