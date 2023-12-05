import Image from "next/image";
import profilePic from "@/public/myPicture.jpg";
import styles from "@/app/ui/styles.module.css";

// Image style reference site: https://stackoverflow.com/questions/60362442/cant-center-absolute-position-tailwind-css

export default function About() {
  return (
      <div className="flex flex-col gap-6">
        <div className="text-lg flex flex-col gap-4 leading-10">
            <div className="flex flex-row items-center gap-4">
          <p id="introduction" className="text-4xl">Introduction</p>
          <a href="mailto:memorandum876@outlook.com" className="hover:translate-x-6">
        <Image
        src={profilePic}
        alt="Picture of the author"
        width={150}
        height={150}
        className=" -z-10 rounded-full"
        />
        </a>
        </div>
          <p className="">
            I would like to be a web developer to be able to build web services
            that resonate with many people.&nbsp;When I am studying and thinking
            about the logic of coding (mainly Javascript), I can feel
            comfortable and enjoy it.&nbsp; if I can have the opportunity to
            work with the development team, I will appreciate and dedicate my
            power to it.&nbsp;I am seeking a web developer position where I
            could leverage my engineering background and my strong curiosity and
            motivation to build innovative and attractive web services.&nbsp;If
            you like my page and projects, please reach out to me.
          </p>
        </div>
      </div>
  );
}
