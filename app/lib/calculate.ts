
// "use client";
import React from "react";
import { useState, useEffect } from "react";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

  function useTimer(startday: string, interval = SECOND) {
    const startDate = new Date(startday).valueOf();
    const [timespan, setTimespan] = useState(Date.now() - startDate);
    
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimespan((_timespan) => _timespan + interval);
      }, interval);

      return () => {
        clearInterval(intervalId);
      };
    }, [interval]);

    /* If the initial startday value changes */
    useEffect(() => {
      setTimespan(Date.now() - startDate);
    }, [startday]);

    return {
      days: Math.floor(timespan / DAY),
      hours: Math.floor((timespan / HOUR) % 24),
      minutes: Math.floor((timespan / MINUTE) % 60),
      seconds: Math.floor((timespan / SECOND) % 60),
    };
  }

  export default useTimer
