function App() {
  return (
    <>
      <h1>Props Demo</h1>

      {/** Calling the MessageDemo */}
      <MessageDemo />
      <MessageDemo />
      <MessageDemo />
    </>
  );
}

// Reusable + but returns static output
function MessageDemo() {
  return (
    <>
      <h1>Hello Message</h1>
    </>
  );
}

export default App;
