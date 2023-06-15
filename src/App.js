import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>My Todo</h1>
      <MyTodo />
    </>
  );
}

function MyTodo() {
  // let todo = { task: "" };
  // S1 :: FORM :: MULTIPLE INPUT FIELD
  let [todo, setTodo] = useState({ task: "" });

  // S3 :: gething the input object on chagne
  let handleChnageTaskAction = (e) => {
    console.log(e.target);
    // e.target === input object

    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };

  // S4 :: We will be making API call.
  let addTodoAction = () => {
    alert(todo.task);
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

      <input type="button" value="Add Todo" onClick={addTodoAction} />
    </>
  );
}

export default App;
