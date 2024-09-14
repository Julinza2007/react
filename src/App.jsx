import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Encabezado from './Encabezado.jsx'
import Navegacion from './Navegacion.jsx'
import AlAzar from './AlAzar.jsx'
import Productos from './Productos.jsx'
import Productos1 from './Productos1.jsx'
import Reloj from './Reloj.jsx'
import Cronometro from './Cronometro.jsx'

const numeros = [1, 2, 3, 4, 5]
const dobles = numeros.map(x => x*2);
console.log(dobles); 
function App() { 


 
  return (
    <div>
    <Encabezado hola="Buenas tardes" kirito="kirito" aincrad="aincrad"/>
    <Navegacion/>
    <AlAzar/>
    <Productos/>
    <Productos1/>
    <Reloj/>
    <Cronometro/>
    </div>
  )
}
export default App
