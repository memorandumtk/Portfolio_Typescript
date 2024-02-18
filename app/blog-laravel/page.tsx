import React from "react";
import Link from "next/link";
import PreviewOfLaravelBlog from "@/public/laravel-blog-images/landing.png";
import AllPosts from "@/public/laravel-blog-images/all-posts.png";
import MyPosts from "@/public/laravel-blog-images/my-posts.png";
import Compose from "@/public/laravel-blog-images/compose.png";
import DetailOfPost from "@/public/laravel-blog-images/detail-of-post.png";
import Image from "next/image";
import {FaArrowLeft} from "react-icons/fa";

const url = "https://github.com/memorandumtk/Laravel-Blog";
const name = "Blog System By Laravel";
const description =
  "This is my first blog project using Laravel. I used Inertia, so that I can combine React and Laravel and this project can be deployed with Docker.";

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
            This is a blog project using Laravel<span className="pr-1">.</span> I
            used Inertia, so that I can use React and Laravel together
            <span className="pr-1">.</span> This project can be deployed with
            Docker<span className="pr-1">.</span>{" "}
          </p>
          <div>
            What I implemented are mainly following:
            <ol className="py-4 px-8 list-decimal flex flex-col gap-2">
              <li>
                <Link href={"#separate-posts"}>
                  Separate the posts between others&apos; posts and the personal
                  posts<span className="pr-1">.</span> In the personal page, You
                  can edit and delete the posts<span className="pr-1">.</span>{" "}
                </Link>
              </li>
              <li>
                <Link href={"#create-post"}>
                  Create a new post as well as a draft post
                </Link>
              </li>
              <li>
                <Link href={"#like"}>
                  Make Like feature that is the only feature that uses pivot
                  tables<span className="pr-1">.</span>{" "}
                </Link>
              </li>
              <li>
                <Link href={"#seed"}>
                  Seed the data to the database for testing
                </Link>
              </li>
            </ol>
          </div>

          <section>
            <p className="p-4 text-2xl" id="separate-posts">
              1<span className="pr-1">.</span> Separate the posts between
              others&apos; posts and the personal posts
              <span className="pr-1">.</span> In the personal page, You can edit
              and delete the posts<span className="pr-1">.</span>{" "}
            </p>
            <div className="indent-2">
              I wanted to have a feature to have different space for the personal
              posts and others&apos; posts as lots of SNS have
              <span className="pr-1">.</span> I make some features for
              others&apos; page that are you can see a detail of each posts, you
              can comment and put Like, you can search based of text you enter in
              search box<span className="pr-1">.</span> In the personal page, You
              can edit and delete the posts using function as I mentioned section
              1<span className="pr-1">.</span>{" "}
            </div>
            <div className="pt-4 flex gap-2 flex-col lg:flex-row justify-center items-center">
              <Image
                  src={AllPosts}
                  alt={"all-posts image."}
                  width={400}
                  height={200}
              />
              <Image
                  src={MyPosts}
                  alt={"my-posts image."}
                  width={400}
                  height={200}
              />
            </div>
          </section>

          <section>
            <p className="p-4 text-2xl" id="create-post">
              2<span className="pr-1">.</span> Create a new post as well as a
              draft post
            </p>
            <p className="indent-2">
              I made a feature to create a new post and a draft post
              <span className="pr-1">.</span> This feature is helped by Inertia
              form helper <span className="italic">useForm</span> a lot
              <span className="pr-1">.</span> Since I decided to use React for
              this project, I could make the form to create a new post and a draft
              post easily by using Inertia form helper using POST method comes
              from <span className="italic">useForm</span>
              <span className="pr-1">.</span> I also made a feature to edit the
              post and delete the post, for this purpose I used PUT and DELETE
              method from <span className="italic">useForm</span>
              <span className="pr-1">.</span> You can see the detail of the
              feature from{" "}
              <Link
                  href={"https://inertiajs.com/forms"}
                  className="underline hover:text-green-300"
              >
                Inertia official site<span className="pr-1">.</span>{" "}
              </Link>
            </p>
            <div className="pt-4 flex gap-2 flex-col lg:flex-row justify-center items-center">
              <Image
                  src={Compose}
                  alt={"compose a post image."}
                  width={400}
                  height={200}
              />
            </div>
          </section>

          <section>
            <p className="p-4 text-2xl" id="like">
              3<span className="pr-1">.</span> Make Like feature that is the only
              feature that uses pivot tables<span className="pr-1">.</span>{" "}
            </p>
            <div className="indent-2">
              This is only thing I used pivot table, which named{" "}
              <span className="italic">likes</span>
              <span className="pr-1">.</span> Setting belongsToMany relation
              between <span className="italic">posts</span> and{" "}
              <span className="italic">users</span> models and liking each via{" "}
              <span className="italic">likes</span>
              table, I achieved to make Like feature
              <span className="pr-1">.</span> Below is example:
            </div>
          </section>

          <section>
            <p className="p-4 text-2xl" id="seed">
              4<span className="pr-1">.</span> Seed the data to the database for
              testing
            </p>
            <div className="indent-2">
              I was wondering how I can share the sample with team members or
              other people before knowing seed and factory function Laravel and
              faker library<span className="pr-1">.</span> Leveraging the
              function, I knew I can share the sample data with them easily even I
              can create some users you want to register when launching and image
              data as well<span className="pr-1">.</span> You can see detail of
              post below which is made by faker<span className="pr-1">.</span> It
              was most amazing thing I learned from this project
              <span className="pr-1">.</span>{" "}
            </div>
            <div className="pt-4 flex gap-2 flex-col lg:flex-row justify-center items-center">
              <Image
                  src={DetailOfPost}
                  alt={"detail of a post image."}
                  width={400}
                  height={200}
              />
            </div>
          </section>

          <div>
            <h3 className="text-3xl py-4">Conclusion</h3>
            <p>
              Through doing this project, I learned a lot of great points Laravel
              has even though I was overwhelmed at first
              <span className="pr-1">.</span> Such as Combination of Inertia, Sail
              environment that makes Docker easier to use, Debug function by dump
              function, Seeder and Factory function, and so on
              <span className="pr-1">.</span>{" "} You can build this blog system using the instruction of README.md in
              the github link above<span className="pr-1">.</span>{" "}
            </p>
          </div>
        </div>


        <div className="pt-8">
          <Link href="/"
                className="flex items-center hover:text-cyan-500">
            <FaArrowLeft/>Back to home.
          </Link>
        </div>
      </div>
  );
};

export default Page;
