import { useRef, useState } from "react";

function MyRegistration() {
  let formRef = useRef();

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };

  let registerAction = async () => {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }

    // BACKEND
    let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;
    await fetch(url);

    let newuser = {
      username: "",
      password: "",
      email: "",
      mobile: "",
    };
    setUser(newuser);

    formRef.current.classList.remove("was-validated");
  };

  return (
    <>
      <form ref={formRef} className="needs-validation">
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={user.username}
          onChange={handlerUsernameAction}
          required
        />
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={user.password}
          onChange={handlerPasswordAction}
          required
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email"
          value={user.email}
          onChange={handlerEmailAction}
          required
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter mobile"
          value={user.mobile}
          onChange={handlerMobileAction}
          required
        />
        <input
          type="button"
          value="Register"
          className="w-100"
          onClick={registerAction}
        />
      </form>
    </>
  );
}

export default MyRegistration;
