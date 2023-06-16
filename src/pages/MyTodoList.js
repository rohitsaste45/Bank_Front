import { useEffect, useState } from "react";

function MyTodoList() {
  let [todoList, setTodoList] = useState([]);

  // spl function, useEffect()
  // useEffect(() => {}, []);
  // useEffect(() => getAllTodoAction(), []);
  useEffect(() => {
    getAllTodoAction();
  }, []);

  let getAllTodoAction = async () => {
    let url = `http://localhost:4000/find-all-todo`;
    let res = await fetch(url);
    let list = await res.json();

    // list updated.
    let newlist = [...list];
    setTodoList(newlist);
  };

  return (
    <>
      <h1>Display All Todo</h1>

      {todoList.map((item) => (
        <>
          <div className="alert alert-secondary mb-1">
            {item.task} <p>{item.description}</p>
          </div>
        </>
      ))}
    </>
  );
}

export default MyTodoList;
