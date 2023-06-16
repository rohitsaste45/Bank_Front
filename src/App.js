import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyTodo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
import MyNavigationLinks from "./pages/MyNavigationLinks";
import MyNavigationLinksUsingButton from "./pages/MyNavigationLinksUsingButton";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavigationLinks />

        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/todo" element={<MyTodo />} />
          <Route path="/registration" element={<MyRegistration />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>

        <MyNavigationLinksUsingButton />
      </BrowserRouter>
    </>
  );
}

export default App;
