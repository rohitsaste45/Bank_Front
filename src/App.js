function App() {
  return (
    <>
      <h1>Props Demo</h1>

      {/** Calling the MessageDemo(1, 'abcd') */}
      <MessageDemo />
      <MessageDemo name="Pawan" />
      <MessageDemo name="Vitthal" email="v@gmail.com" />
      <MessageDemo name="shivam" email="s@gmail.com" />
      <MessageDemo name="dipali" email="d@gmail.com" />
      <MessageDemo name="cdac" email="c@gmail.com" />
    </>
  );
}

// Reusable
// how to make this "dynmaic"
// props :: destructrued,
function MessageDemo({ email, name }) {
  return (
    <>
      <h1>
        Hello {name} {email}
      </h1>
    </>
  );
}

export default App;
