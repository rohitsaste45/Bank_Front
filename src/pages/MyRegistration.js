import { useState } from "react";

function MyRegistration() {
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
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter username"
        value={user.username}
        onChange={handlerUsernameAction}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={user.password}
        onChange={handlerPasswordAction}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Enter Email"
        value={user.email}
        onChange={handlerEmailAction}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Enter mobile"
        value={user.mobile}
        onChange={handlerMobileAction}
      />
      <input
        type="button"
        value="Register"
        className="w-100"
        onClick={registerAction}
      />
    </>
  );
}

export default MyRegistration;
