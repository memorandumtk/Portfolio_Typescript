"use client";
import useTimer from "@/app/lib/calculate";
import { useState, useEffect } from "react";

export default function Timer() {
  const { days, hours, minutes, seconds } = useTimer("2023-09-01T00:00:00");

  const [isClient, setIsClient] = useState(false);

  // ref1 https://stackoverflow.com/a/66374800/21951181
  // ref2 https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
        // Site reffered for timer design https://daisyui.com/components/countdown/
        // Site for using condition for class https://stackoverflow.com/questions/30533171/react-js-conditionally-applying-class-attributes
        // I didn't want to use margin, though I used it here.
        <div className={`m-4 text-2xl flex flex-row gap-5 text-center p-5 border-4 rounded-3xl ring-4 ring-offset-4 hover:border-double ${seconds % 10 == 0 ? 'border-red-500 ' : 'border-solid'}`}>

          <div className="flex flex-col p-2 bg-neutral text-neutral-content">
            <span className="font-bold text-4xl sm:text-6xl">{days}</span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral text-neutral-content">
            <span className="font-bold text-4xl sm:text-6xl">{hours}</span>
            hours
          </div>
          <div className="hidden sm:flex flex-col p-2 bg-neutral text-neutral-content ">
            <span className="font-bold sm:text-6xl">{minutes}</span>
            min
          </div>
          <div className="hidden sm:flex flex-col p-2 bg-neutral text-neutral-content ">
            <span className="font-bold sm:text-6xl">{seconds}</span>
            sec
          </div>
        </div>
    );
  } else {
    <div>this is done by server</div>;
  }
}
