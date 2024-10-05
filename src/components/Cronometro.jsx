import React, { useState, useEffect } from 'react';

function Cronometro() {
  const [miliSeconds, setMiliSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMiliSeconds(miliSeconds + 1);

      if (miliSeconds == 100) {
        setMiliSeconds(0);
        setSeconds(seconds + 1);
      }

      if (seconds == 60) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }

      if (minutes == 60) {
        setMinutes(0);
        setHours(hours + 1);
      }

      if (hours == 24) {
        setHours(0);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [miliSeconds, seconds, minutes, hours]); /*Esto lo hizo chatGpt, es para algo de la memoria de la pagina qsy no me andaba sin esto asi que lo puse*/


    return (
        <div id='cronometro'>
            <h1>{hours}:{minutes}:{seconds}.{miliSeconds}</h1>
        </div>
    );
}

export default Cronometro