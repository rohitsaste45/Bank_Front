import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();
  let [list, setList] = useState(["delhi"]);

  let addItemAction = () => {
    // console.log(inputRef.current);
    // console.log(document.querySelector("#id1"));

    let inputValue = inputRef.current.value;
    let newList = [inputValue, ...list];
    setList(newList);

    inputRef.current.value = "";
  };

  return (
    <>
      <input
        type="text"
        id="id1"
        ref={inputRef}
        placeholder="Enter user input..."
      />
      <input type="button" value="Add New Item" onClick={addItemAction} />

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default App;
