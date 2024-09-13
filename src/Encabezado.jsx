import kirito from './imagenes/kiritomatando.jpg'
import aincrad from './imagenes/aincrad.png'

function Encabezado(props) {
    return (
        <header className="header">
                <h1>{props.kirito}</h1>
            <img src={kirito} className="kirito" alt={props.kirito} />
            
                <h1>{props.aincrad}</h1>
            <img src={aincrad} className="aincrad" alt={props.aincrad} />
        </header>
    )
}

export default Encabezado