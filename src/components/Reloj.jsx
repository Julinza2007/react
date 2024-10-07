import React, { useState, useEffect } from 'react';

function Reloj(){
// function Reloj() {
//   const [segundos, setSegundos] = useState(0);
//   const [minutos, setMinutos] = useState(0);
//   const [horas, setHoras] = useState(0);
//   const [fecha, setFecha] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const date = new Date();
//       setSegundos(date.getSeconds());
//       setMinutos(date.getMinutes());
//       setHoras(date.getHours());
//       setFecha(date.toLocaleDateString());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

  const [now, setNow] = useState(new Date());
  const [fecha, setFecha] = useState(now.toLocaleDateString());

  setInterval(() => setNow(new Date()), 1000);
  setInterval(() => setFecha(now.toLocaleDateString()), 1000);
  const s = now.getSeconds();
  const m = now.getMinutes();
  const h = now.getHours();
  
   return (
    // <div id='reloj'>
    //   <h1><span style={{textShadow: '3px 3px 4px blue'}}>{horas}</span>:<span style={{textShadow: '3px 3px 4px yellow'}}>{minutos}</span>:<span style={{textShadow: '3px 3px 4px blue'}}>{segundos}</span> de la fecha: <span style={{textShadow: '3px 3px 4px green'}}>{fecha}</span></h1>
    // </div>
    <div id='reloj'>
     <h1>
     <span style={{textShadow: '3px 3px 4px blue'}}>{h}</span>:<span style={{textShadow: '3px 3px 4px yellow'}}>{m.toString().padStart(2, "0")}</span>:<span style={{textShadow: '3px 3px 4px blue'}}>{s.toString().padStart(2, "0")}</span> de la fecha: <span style={{textShadow: '3px 3px 4px green'}}>{fecha}</span>
    </h1> 
    </div>
  );
}


export default Reloj