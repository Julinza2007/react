function Productos(){
const productos = [
{producto: 'Agua', descripcion:'Agua mineral sin gas', precio: 800, img: 'https://static.vecteezy.com/system/resources/thumbnails/010/979/002/small_2x/water-bottle-3d-illustration-png.png'},
{producto: 'Cerveza', descripcion: 'Espumosa', precio: 1200, img: 'https://jetdrinks.com.ar/wp-content/uploads/2022/05/Cerveza-Quilmes-Clasica-Lata-473ml.png'},
{producto: 'Coca-cola', descripcion: 'Tradicional', precio: 1000, img:'https://dcdn.mitiendanube.com/stores/002/287/525/products/411-9e6dc56c0cc6a04bbe16620569858203-640-0.png'}
];
const producto = productos.map((produ, index) => (
    console.log('este es el index de cada producto flaco: ' + index),
  <div key={index} className="producto">
    <h2>{produ.producto}</h2>
    <img src={produ.img} draggable="false"></img>
    <h3>Precio: ${produ.precio}</h3>
    <p>Descripción: {produ.descripcion}</p>
  </div>
));
    return(
        <div className="productos">
            {producto}
        </div>
    )
}

export default Productos
