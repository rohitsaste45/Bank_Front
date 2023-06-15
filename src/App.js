import { useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let [list, setList] = useState(["delhi"]);

  let addItemAction = () => {
    // RESTRICATED :: WE SHOULD NOT USE DOCUMENT OBJECT :: STRICT NO
    let inputRef = document.querySelector("#id1");
    let inputValue = inputRef.value;

    // let newList = [...list, inputValue];
    let newList = [inputValue, ...list];
    setList(newList);

    inputRef.value = "";
  };

  return (
    <>
      <input type="text" id="id1" placeholder="Enter user input..." />
      <input type="button" value="Add New Item" onClick={addItemAction} />

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default App;
