import { useEffect, useState } from 'react';
import { convertTime } from '../helpers';

const useClock = (time: number) => {
  // time: tính theo second
  const [timeLeft, setTimeLeft] = useState<number>(time);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) setTimeLeft((x) => x - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimeLeft, timeLeft]);

  return { timeLeft, formattedTimeLeft: convertTime(timeLeft) };
};

export default useClock;
