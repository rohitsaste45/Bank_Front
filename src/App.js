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
        <div>
          <h1>{item}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            sit laborum quia non hic doloribus id quisquam consequuntur quis
            iusto quod, assumenda vitae, molestias ipsa ex labore quaerat
            ducimus accusamus.
          </p>
          <div>
            <input type="button" value="&#128077;" />
            <input type="button" value="&#128078;" />
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
