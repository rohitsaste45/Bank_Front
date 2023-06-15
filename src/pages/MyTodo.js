import { useState } from "react";

function MyTodo() {
  let [sucessBox, setSuccessBox] = useState(false);
  let [todo, setTodo] = useState({ task: "", description: "" });

  let handleChnageTaskAction = (e) => {
    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };

  let handleChangeDescriptionAction = (e) => {
    // console.log(e.target);
    let newTodo = { ...todo, description: e.target.value };
    setTodo(newTodo);
  };

  let addTodoAction = async () => {
    console.log(todo);

    let url = `http://localhost:4000/addtodo?task=${todo.task}&description=${todo.description}`;
    await fetch(url);

    // clear the box
    let newtodo = { task: "", description: "" };
    setTodo(newtodo);

    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 5000);
  };

  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Enter task"
        value={todo.task}
        onChange={handleChnageTaskAction}
      />

      <textarea
        className="form-control"
        cols="30"
        rows="3"
        placeholder="Enter Description"
        value={todo.description}
        onChange={handleChangeDescriptionAction}
      ></textarea>

      <input type="button" value="Add Todo" onClick={addTodoAction} />

      {sucessBox && (
        <div className="alert alert-success">Operation Success</div>
      )}
    </>
  );
}

export default MyTodo;
