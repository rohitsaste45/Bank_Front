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
  // let list = ["delhi"]
  // C1: Stateful Variable
  let [list, setList] = useState(["delhi"]);

  // C2: Acton Member Funcn
  let addItemAction = () => {
    // why didn u use push method, push method update the same object
    // setter method requires immutable object.
    // We have to pass new list.
    let newList = [...list, "mumbai"];
    console.log(newList);

    // DOM :: TRIGGER DOM
    setList(newList);
  };

  return (
    <>
      {/** C3: Event Binding */}
      <input type="button" value="Add New Item" onClick={addItemAction} />

      {/** C4: List */}
      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}
    </>
  );
}

export default App;
