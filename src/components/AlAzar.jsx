import { useState } from 'react'

function AlAzar() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
    setNumero(Math.floor(Math.random() * 1000 + 1));
  };

  return (
    <div id='alazar'>
      <button onClick={handleClick}>Dale</button>
      <h1>Tu número entre 1 y 1000 es igual a {numero}</h1>
    </div>
  );
}

export default AlAzar;
