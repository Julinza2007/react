import { useState, useEffect } from 'react';
import axios from 'axios';

const SAO = () => {
    
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
      axios.get('/react/characters.json')
      .then(res => setCharacters(res.data.characters))
      .catch(err => console.error(err));
  }, []);
  

    return (
    <>
          {characters.map(c => (
            <div key={c.name}>
              <h2>{c.name}</h2>
              <img src={c.img} alt={c.name} />
              <h3>Profesión: {c.profession}</h3>
              <h3>Tipo de espada: {c.typeOfSword}</h3>
              <p>Descripción: {c.description}</p>
            </div>
          ))}
    </>
    );
}

export default SAO;
