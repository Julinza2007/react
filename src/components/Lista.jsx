import { useState } from 'react';

function Lista() {
const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  function updateTask(updatedTask) {
    const updatedTasks = tasks.map(task => {
      if (task.id === updatedTask.id) return updatedTask;
      else return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function addTask(task) {
    setTasks([...tasks, task]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
  }

  function deleteTask(id) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}
  return (
    <>
      <h1>Lista de tareas</h1>
      <Form addTask={addTask} />
      <List deleteTask={deleteTask} tasks={tasks} updateTask={updateTask} />
    </>
  );
}

function Form(props) {
  const { addTask } = props;
  const [task, setTask] = useState('');
  const [count, setCount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    addTask({ id: count, task: task, done: false });
    setCount(count + 1);
    setTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        onChange={e => setTask(e.target.value)}
        value={task}
      />
      <input type="submit" value="subir" />
    </form>
  );
}

function List(props) {
  const { tasks, updateTask, deleteTask } = props;

  return (
    <div>
      {tasks.map((task, index) => (
        <Task updateTask={updateTask} deleteTask={deleteTask} key={index} task={task} />
      ))}
    </div>
  );
}

function Task(props) {
  const { task, updateTask, deleteTask } = props;
  const [done, setDone] = useState(task.done);

  function handleChange() {
    setDone(!done);
    updateTask({ ...task, done: !done });
  }

  function handleClick() {
    deleteTask(task.id);
  }

  return (
    <div>
      <input type="checkbox" onChange={handleChange} />
      <h2 style={{ textDecoration: done ? 'line-through' : 'none' }}>
        {task.task}
      </h2>
      <button onClick={handleClick}>Borrar</button>
    </div>
  );
}

export default Lista;