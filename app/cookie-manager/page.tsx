import React from "react";
import Link from "next/link";
import Image from "next/image";
import PopupOfExtension from "@/public/cookie-manager/popup.png";
import { FaArrowLeft } from "react-icons/fa";

const url = "https://github.com/memorandumtk/cookie-manager-chrome-extension";
const name = "Cookie Manager Chrome Extension with React";
const link_to_video = "https://youtu.be/9Bh2NnpY460";
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
                    I&apos;ve been thinking if there is an application to be able to see what kind of cookie and how many cookies I have.
                    This extension is a simple cookie manager chrome extension! Which allows you to manipulate cookies in your browser with such following features. This extension uses indexedDB to store cookies, so you don&apos;t need to access to chrome&apos;s cookie API every time when you need information.
                </p>

                <p>
                    <a
                        href={link_to_video}
                        className={"text-cyan-500 hover:underline"}
                    >This</a> is a link to my video that you can see the demo
                    of this app.
                </p>

                <div>
                    <Image
                        src={PopupOfExtension}
                        alt={"Popup of cookie manager chrome extension."}
                        width={600}
                        height={300}
                        className={"hover:opacity-80 rounded-xl"}
                    />
                </div>
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
