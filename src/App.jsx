import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Encabezado from './components/Encabezado.jsx'
import Navegacion from './components/Navegacion.jsx'
import AlAzar from './components/AlAzar.jsx'
import Productos from './components/Productos.jsx'
import Productos1 from './components/Productos1.jsx'
import Reloj from './components/Reloj.jsx'
import Cronometro from './components/Cronometro.jsx'
import Lista from './components/Lista.jsx';
import Trivia from './components/Trivia.jsx';

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
    <div style={{textAlign:'center', marginTop:'100px', marginBottom: '100px'}}>
      <Lista/>
    </div>

    <div id='trivia' style={{textAlign:'center', marginTop:'100px', marginBottom: '100px'}}>
    <Trivia/>
    </div>


    </div>
  );
}
export default App
