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
  let list = ["delhi", "calcutta", "chennai"];

  return (
    <>
      <h1>{data}</h1>

      {/** foreach is consumer function */}
      {list.forEach((item) => item)}

      {/** map is input/output */}
      {/** OUTPUT BCZ OF THIS */}
      {list.map((item) => item)}
    </>
  );
}

export default App;
