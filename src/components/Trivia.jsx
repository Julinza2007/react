import React, { useState, useEffect } from 'react';

function Trivia() {
    const [trivias, setTrivias] = useState([]);
    const [puntaje, setPuntaje] = useState(0);
    const [index, setIndex] = useState(0);

useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=boolean')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => setTrivias(data.results))
        .catch(error => console.error('Error fetching data:', error));
}, []);

    function handleAnswer(answer){
        if (trivias[index].correct_answer === answer) {
            setPuntaje(puntaje =>  puntaje + 1);
        }
        setIndex(index + 1);
    };

    return (
        <div>
            {index < trivias.length ? (
                <div>
                    <h2>Pregunta Numero {index + 1}</h2>
                    <h3>{trivias[index].question}</h3>
                    <button class='question' onClick={() => handleAnswer('True')}>Verdadero</button>
                    <button class='question' onClick={() => handleAnswer('False')}>Falso</button>
                </div>
            ) : (
                <h2>Tu puntaje es: {puntaje}</h2>
            )}
        </div>
    );
}

export default Trivia;