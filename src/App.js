import { useRef, useState } from "react";
import MyTodo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";

function App() {
  return (
    <>
      <MyTodo />
      <hr />
      <MyRegistration />
    </>
  );
}

export default App;
