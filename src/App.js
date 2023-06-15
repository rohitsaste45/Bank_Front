function App() {
  return (
    <>
      <h1>Props Demo</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let data = "Hello Universe";
  let list = ["", "", "", "", ""];

  let list1 = [];
  for (let i = 0; i < 100; i++) {
    list1.push("");
  }

  return (
    <>
      <h1>{data}</h1>

      {list1.map((item) => (
        <div>
          <h1>Hello Universe</h1>
        </div>
      ))}

      <hr />
      {list.map((item) => (
        <div>
          <h1>Hello World</h1>
        </div>
      ))}
    </>
  );
}

export default App;
