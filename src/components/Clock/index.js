import moment from "moment";
import { useEffect, useState } from "react";

export default function Clock({ name, time, del, id }) {
  const [acualTime, setAcualTime] = useState();
  // get time, get timezone, set time on 0 timezone
  const d = new Date();
  const gmtHours = -d.getTimezoneOffset() / 60;
  const startTime = moment().add(-gmtHours, "hours").format("HH:mm:ss");

  const returnTime = (time) => {
    setAcualTime(
      moment(startTime, "HH:mm:ss").add(time, "hours").format("HH:mm:ss")
    );
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      returnTime(time);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  });

  return (
    <div>
      <h2>{name}</h2>
      <h2>{acualTime}</h2>
      <button onClick={() => del(id)}>X</button>
    </div>
  );
}
