import { useState } from "react";

function Lista() {
  const [tareas, setTareas] = useState(
    JSON.parse(localStorage.getItem("tareas")) || []
  );
  const [nuevaTarea, setNuevaTarea] = useState("");

function handleSubmit(event) {
  event.preventDefault();
  const nuevasTareas = [...tareas, nuevaTarea]; // ... despliega el contenido del array, es un spread operator.
  setTareas(nuevasTareas);
  localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
  setNuevaTarea("");
}

  function handleChange(event) {
    setNuevaTarea(event.target.value);
  }

  const listaTareas = tareas.map((tarea, index) => (
    <li key={index}>
        {tarea}
    </li>
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={handleChange}
        />
        <input type="submit" value="Guardame" />
      </form>

      <ul className="lista-tareas">
        {listaTareas}
      </ul>

    </>
  );
}

export default Lista;
