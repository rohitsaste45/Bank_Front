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
        <MessageDemo message={item} />
      ))}
    </>
  );
}

function MessageDemo({ message }) {
  return (
    <>
      <h1>Hello {message}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        dolorem quas sequi tenetur quo odit cupiditate assumenda voluptas
        quibusdam blanditiis voluptatem quis mollitia eaque molestiae animi,
        provident eligendi facilis incidunt.
      </p>
      <div>
        <input type="button" value="&#128077;" />
        <input type="button" value="&#128078;" />
      </div>
    </>
  );
}

export default App;
