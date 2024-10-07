import React, { useState } from 'react';

function Productos1() {
  const [visible, setVisible] = useState(0);

  const productos = [
    { producto: 'Agua', descripcion: 'Agua mineral sin gas', precio: 800, img: 'https://static.vecteezy.com/system/resources/thumbnails/010/979/002/small_2x/water-bottle-3d-illustration-png.png' },
    { producto: 'Cerveza', descripcion: 'Espumosa', precio: 1200, img: 'https://jetdrinks.com.ar/wp-content/uploads/2022/05/Cerveza-Quilmes-Clasica-Lata-473ml.png' },
    { producto: 'Coca-cola', descripcion: 'Tradicional', precio: 1000, img: 'https://dcdn.mitiendanube.com/stores/002/287/525/products/411-9e6dc56c0cc6a04bbe16620569858203-640-0.png' }
  ];

  const producto = productos.map(produ => (
    <ul key={produ.producto} className="item">
      <li><h2>{produ.producto}</h2></li>
      <li><img src={produ.img} draggable="false"></img></li>
      <li><h3>Precio: ${produ.precio}</h3></li>
      <li><p>Descripción: {produ.descripcion}</p></li>
    </ul>
  ));

  function handleClick() {
    setVisible(!visible);
  }

  let displayStyle;
  if (visible) {
    displayStyle = 'block';
  } else {
    displayStyle = 'none';
  }

  return (
    <>
      <button id="desplegar" onClick={handleClick}>Desplegame</button>
      <div style={{ display: displayStyle }} className="lista">
        {producto}
      </div>
    </>
  );
}

export default Productos1;