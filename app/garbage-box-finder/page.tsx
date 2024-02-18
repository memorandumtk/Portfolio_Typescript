import React from "react";
import Link from "next/link";
import Image from "next/image";
import ExampleOfMap from "@/public/garbage-box-finder/map-example.png";
import ExampleOfRouteFile from "@/public/garbage-box-finder/route-example.png";
import ExampleOfGarbageBoxes from "@/public/garbage-box-finder/example-downtown-bins.jpg";
import {FaArrowLeft} from "react-icons/fa";

const url = "https://github.com/memorandumtk/garbage-app";
const name = "Garbage box finder app with Next.js";

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
          This is my first project that I tried to make an app from my own idea,
          which is it will be useful if people can know the place garbage boxes
          are. It came to my mind when I was in Canada since Canada has many public garbage boxes.
        </p>
        <div className="pt-4 flex gap-2 flex-col lg:flex-row justify-center items-center">
          <Image src={ExampleOfGarbageBoxes}
                 alt={"image of the garbage boxes"}
              width={400}
              height={200}
          />
        </div>

        <div>
          <p className="indent-2">
            As you can see below video, this app allow us to mark the place
            where a garbage box is. Considering Canada&apos;s case, in which
            there are mainly three types of garbage boxes in public space, I set
            three buttons for each. I imagine the color of the button, according
            actual color of garbage boxes.
          </p>
          <p className="indent-2">
            If you clicked <span className="italic">Paper</span> button assuming
            you found paper garbage box there, you can mark the place by yellow
            circle. If you choice several buttons the circle can be magenta
            color, if three of all buttons circle will be white. In addition,
            if you marked upon another mark in the same place, you can update the mark.
            ( not exactly same, within the degree of latitude and longitude I set, in this case +-0.0005 degree, which
            is approximately latitude:111.32m, longitude:75.92m )
          </p>
          <video
              width="320"
              height="240"
              controls
              preload="none"
              className="w-full pt-4"
          >
            <source
                src="/garbage-box-finder/Garbage-box-finder-demo.mp4"
                type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <p className="indent-2">
            You might have realized, that this app could be better especially design is not polished.
            But I spent a lot of time to make this and
            learned a lot same as the time I spent and To make this project was
            a good opportunity to think about how I should server-side and client-side
            component in Next.js. I&apos;m gonna write three main things that I
            learned from this project.
          </p>
          <ol className="py-4 px-8 list-decimal flex flex-col gap-2">
            <li>
              <Link href={"#leverage-leaflet"} className="hover:underline">How to use Leaflet</Link>
            </li>
            <li>
              <Link href={"#location-api"} className="hover:underline">Location API on the browser</Link>
            </li>
            <li>
              <Link href={"#next-api-prisma"} className="hover:underline">
                Next API using App/Router for taking data using Prisma for
                PostgresSQL
              </Link>
            </li>
          </ol>
        </div>

        <section>
          <p className="p-4 text-2xl" id="leverage-leaflet">
            1. How to use Leaflet
          </p>
          <div className="p-4" id="leverage-leaflet">
            To have a map, I used React-Leaflet library referencing{" "}
            <Link href="https://medium.com/@tomisinabiodun/displaying-a-leaflet-map-in-nextjs-85f86fccc10c"
                  className="underline hover:text-cyan-500">
              this article
            </Link>
            . After I read this article and I tried to display this map, I
            understood I needed to use &apos;use client&apos; mode at the top of
            the component. I added my own function to get marked spots
            information into the component, though the structure of the component
            code to display a map described by the article was really helpful.
          </div>
          <div className="pt-4 flex gap-2 flex-col lg:flex-row justify-center items-center">
            <Image
                src={ExampleOfMap}
                alt={"image after map is displayed."}
                width={400}
                height={200}
            />
          </div>
        </section>

        <section>
          <p className="p-4 text-2xl" id="location-api">
            2. Location API on the browser
          </p>
          <div className="p-4" id="location-api">
            I had no idea how to get{" "}
            <span className="italic">GeoLocation</span> in our browser. I could
            see how to do it on{" "}
            <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition"
                  className="underline hover:text-cyan-500">
              Mozilla official document
            </Link>
            . It can give Web app an access to to the location of the device
            based on this document, So useful, isn&apos;t it? As I mentioned
            previous section, I have put the function to get the location using
            this webAPI into the map component, Of course in order to use this
            API I needed to use client component in Next.js.
          </div>
        </section>

        <section>
          <p className="p-4 text-2xl" id="next-api-prisma">
            3. Using NextAPI and Prisma
          </p>
          <div className="p-4" id="location-api">
            I used Next.js App/Route&apos;s Route Handlers, we can create a file named route.js or route.ts under the
            directory of api. On the way to using that, one of the confusing points to me was that I could only use HTTP
            method
            as a function name in route.js or ts file as a function accessed from other, as a convention. I
            referred to{" "}
            <Link href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers"
                  className="underline hover:text-cyan-500">
              this
              document</Link>.
          </div>
          <div className="pt-4 flex gap-2 flex-col lg:flex-row justify-center items-center">
            <Image
                src={ExampleOfRouteFile}
                alt={"Example of the image of structuring of the route."}
                width={400}
                height={200}
            />
          </div>
        </section>

        <div>
          <h3 className="text-3xl py-4">Conclusion</h3>
          <p>I created this app as the first app from my idea. Cause, before this project, I only tried to make some
            tutorial projects from Vercel or Next.js template.
            As I mentioned at the beginning of this page, this app is not perfect and completed, but I can&apos;t come up with some good idea to go this app further though, I record this app&apos;s summary and my experience through this app into this page. Because I wanted to share and record my current capability to make an app.
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
