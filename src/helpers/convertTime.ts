const convertTime = (time: number): string => {
  const min = Math.floor(time / 60); // số phút
  const sec = time % 60;

  let minStr = min < 10 ? `0${min}` : min;
  let secStr = sec < 10 ? `0${sec}` : sec;

  return `${minStr}:${secStr}`;
};

export default convertTime;
