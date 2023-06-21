import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import "./App.css";
import { List } from "./components/List";

function App() {
  const [task, setTask] = useState(""); //esta es una tarea que nace en el input
  const [todos, setTodos] = useState([]); //este es el contenedor de las tareas

  function submit(e) {
    e.preventDefault();
    if (task !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  }

  function Task(e) {
    setTask(e.target.value);
  }

  const deleteTarea = (index) => {
    const updatedTarea = [...todos];
    updatedTarea.splice(index, 1);
    setTodos(updatedTarea);
  };

  return (
    <>
      <div className="card contenedor container width 20 ">
        <div className="card-body ">
          <h5 className="card-title">Todo List</h5>
          <div className="mb-3 bg">
            <form onSubmit={submit} name="task" className="tareas md-12">
              <input
                value={task}
                onChange={Task}
                type="text"
                className="tareas border my-1 rounded "
              />
            </form>
            <ul className="list-group list-group-flush justify rounded">
              {todos.length > 0 ? (
                todos.map((todo, index) => (
                  <List key={index} tarea={todo} deleteTarea={deleteTarea} />
                ))
              ) : (
                <p>no tienes tareas</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
