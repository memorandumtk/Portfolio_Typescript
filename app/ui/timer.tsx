"use client";
import useTimer from "@/app/lib/calculate";
import { useState, useEffect } from "react";
import { inter } from "@/app/ui/fonts";

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
        <div className={`flex flex-row text-center items-baseline`}>
          <div className="flex flex-row p-1 bg-neutral text-neutral-content items-baseline">
            <span className="text-xl">{days}</span>
            &nbsp;days
          </div>
          <div className="flex flex-row p-1 bg-neutral text-neutral-content items-baseline">
            <span className="text-xl">{hours}</span>
            &nbsp;hours
          </div>
          <div className="hidden sm:flex flex-row p-1 bg-neutral text-neutral-content items-baseline ">
            <span className="text-xl">{minutes}</span>
            &nbsp;min
          </div>
          <div className="hidden sm:flex flex-row p-1 bg-neutral text-neutral-content  items-baseline">
            <span className="text-xl">{seconds}</span>
            &nbsp;sec
          </div>
          <span>&nbsp;passed.</span>
        </div>
    );
  } else {
    <div>this is done by server</div>;
  }
}
