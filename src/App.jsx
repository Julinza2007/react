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
import SAO from './components/SAO.jsx';


function App() {
  const [count, setCount] = useState(0);
  const [r, setR] = useState(255);
  const [g, setG] = useState(255);
  const [b, setB] = useState(255);
  const handleClick = () => {
    setCount(count + 1);
    setR(Math.floor(Math.random() * 255 + 1));
    setG(Math.floor(Math.random() * 255 + 1));
    setB(Math.floor(Math.random() * 255 + 1));
  }
  return (
    <div>
      <p style={{
        color: `rgb(${r}, ${g}, ${b})`,
        marginLeft: count < 92 ? count + '%' : setCount(0),
        cursor: 'pointer',
        userSelect: 'none'

      }} 
        onClick={handleClick}
        >
          Hola, presioname. {count != 0 ? count : ''}
      </p>
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
    
    <SAO/>

    </div>
  );
}
export default App
