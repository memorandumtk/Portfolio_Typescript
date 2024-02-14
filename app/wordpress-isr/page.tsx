import React from "react";
import Link from "next/link";

const url = "https://isr-memorandumsblog.vercel.app/";
const name = "Wordpress ISR With Next.js";
const description =
  "This is my first project using ISR (Incremental Static Regeneration) feature from Next.js. I use Wordpress as the headless CMS.";

const Page = () => {
  return (
    <div className="px-24 lg:px-32 py-16 font-semibold text-lg leading-10">
      <h1 className="text-4xl">{name}</h1>
      <div className="pt-4">
        <Link href={url} className="text-xl underline hover:text-green-300">
          Site link
        </Link>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        <p className="indent-2">
          This is a project to use ISR (Incremental Static Regeneration) feature
          from Next.js<span className="pr-1">.</span> I use my Wordpress web
          site a headless CMS<span className="pr-1">.</span>{" "}
        </p>
        <div>
          What I did for this project are mainly following:
          <ol className="p-8 list-decimal">
            <li>
              <Link href={"#install"}>
                Install GraphQL plugin to my Wordpress site
              </Link>
            </li>
            <li>
              <Link href={"#create"}>
                Create a new Next.js project from Vercel template and Try the
                features of ISR
              </Link>
            </li>
            <li>
              <Link href={"#tag-implementation"}>
                Create a function to show the posts related to a tag
              </Link>
            </li>
          </ol>
        </div>

        <section>
          <p className="p-4 text-2xl" id="install">
            1. Install GraphQL plugin to my Wordpress site
          </p>
          <p className="indent-2">
            I installed WPGraphQL plugin to my Wordpress site
            <span className="pr-1">.</span> This plugin enables me to use
            GraphQL queries to get the data from my Wordpress site
            <span className="pr-1">.</span> You can access to the plugin from{" "}
            <Link
              href={"https://www.wpgraphql.com/docs/intro-to-wordpress"}
              className="underline hover:text-green-300"
            >
              here
            </Link>
            .
          </p>
        </section>

        <section>
          <p className="p-4 text-2xl" id="create">
            2. Create a new Next.js project from Vercel template and Try the
            features of ISR
          </p>
          <div className="indent-2">
            I used{" "}
            <Link
              href={
                "https://vercel.com/templates/next.js/isr-blog-nextjs-wordpress"
              }
              className="underline hover:text-green-300"
            >
              this template
            </Link>{" "}
            of Next.js from Vercel<span className="pr-1">.</span> I could try
            the feature of ISR easily by using this template
            <span className="pr-1">.</span> The only two things I can mention
            for avoiding the struggle are:
            <ol className="pl-8 p-4 list-disc flex flex-col gap-2 items-center">
              <li>
                <div>
                  <p>
                    When I encountered below error,{" "}
                    <Link
                      href={
                        "https://github.com/vercel/next.js/discussions/32927"
                      }
                      className="underline hover:text-green-300"
                    >
                      this article
                    </Link>{" "}
                    was helpful to solve the problem
                    <span className="pr-1">.</span>{" "}
                  </p>
                  <p>
                    <code
                      style={{
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                      }}
                    >
                      Error: Invalid src prop
                      (https://secure.gravatar.com/avatar/e8c62a4f73336fe17d9bf3a87dc982b5?s=96&d=mm&r=g)
                      on `next/image`, hostname &quot;secure.gravatar.com&quot;
                      is not configured under images in your `next.config.js`
                    </code>
                  </p>
                </div>
              </li>

              <li>
                <div>
                  <p>
                    In css module file in the template, Class name is not
                    working since dangerouslySetInnerHTML does not directly
                    support CSS module class names
                    <span className="pr-1">.</span> So, need to use tag name
                    directly<span className="pr-1">.</span> And I would you make
                    sure not wrap the content of blog by {`<p>`} tag because
                    blog content(body) likely includes {`<p>`} tag and
                    containing {`<p>`} tag inside of {`<p>`} tag is not allowed
                    <span className="pr-1">.</span> For example, If there was a{" "}
                    <span className="italic">label</span> element that has a
                    class name <span className="italic">toc-title</span> and I
                    wanted to hide it:
                  </p>
                  <pre>
                    <code>
                      {`
--- not worked ---
    .content .toc-title {
    display: none;
}`}
                    </code>
                    <code>
                      {`
--- worked ---
    .content label {
    display: none;
}
                            `}
                    </code>
                  </pre>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section>
          <p className="p-4 text-2xl" id="tag-implementation">
            3. Create a function to show the posts related to a tag
          </p>
          <p className="indent-2">
            This is only thing I did that is not included as instruction to do
            in the template<span className="pr-1">.</span> In order to do this,
            I created a new file
            <span className="italic">[tag].tsx</span> under the{" "}
            <span className="italic">tag</span> folder as a dynamic route and
            added GraphQL functions{" "}
            <span className="italic">getPostsByTag</span> and{" "}
            <span className="italic">getAllTags</span> into{" "}
            <span className="italic">api.ts</span>
            file to take the posts related to the tag
            <span className="pr-1">.</span> You can see the detail of the
            function from{" "}
            <Link
              href={"https://github.com/memorandumtk/isr-memorandumsblog"}
              className="underline hover:text-green-300"
            >
              my github
            </Link>
            <span className="pr-1">.</span> What I did in{" "}
            <span className="italic">api.ts</span> was making a function to
            inquiry using GraphQL taking <span className="italic">tagName</span>{" "}
            variable from argument which comes from params and a function to
            inquiry using GraphQL just getting all posts with tags
            <span className="pr-1">.</span>{" "}
          </p>
        </section>
      </div>

      <div>
        <h3 className="text-3xl py-4">Conclusion</h3>
        <p>
          Through doing this project, I leaned ISR, static site generation as
          well as how to use GraphQL to get the data from Wordpress site
          <span className="pr-1">.</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Page;
