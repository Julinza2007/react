import React, { useState, useEffect } from 'react';

function Reloj() {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setSegundos(date.getSeconds());
      setMinutos(date.getMinutes());
      setHoras(date.getHours());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id='reloj'>
      <h1>{horas}:{minutos}:{segundos}</h1>
    </div>
  );
}

export default Reloj;