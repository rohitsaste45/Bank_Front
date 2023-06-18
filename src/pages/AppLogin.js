import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, NavDropdown, Navbar,border } from "react-bootstrap"

function AppLogin() {
  const navigate = useNavigate();
  const formRef = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlerPasswordAction = (e) => {
    const newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  const handlerEmailAction = (e) => {
    const newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  const loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      const formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND :: ...
      const url = `http://localhost:4000/login-by-post`;
      const data = { email: user.email, password: user.password };
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 500) {
        const errorMessage = await res.text();
        throw new Error(errorMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/home", { replace: true });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", height: "100%" }}
    >
      <div className="border border-1 p-4 rounded-lg shadow-lg text-primary" style={{ width: "400px" }}>
        <div className="fs-2 mb-4 text-center">Login Form</div>

        <form ref={formRef} className="needs-validation">
          <input
            type="email"
            className="form-control form-control-lg mb-2"
            placeholder="Enter Email"
            value={user.email}
            onChange={handlerEmailAction}
            required
          />

          <input
            type="password"
            className="form-control form-control-lg mb-2"
            placeholder="Enter password"
            value={user.password}
            onChange={handlerPasswordAction}
            required
          />

          <input
            type="button"
            value="Login"
            className="w-100 btn btn-lg btn-primary"
            onClick={loginAction}
          />
        </form>

        {isSuccess && <div className="alert alert-success">Success</div>}
        {isError && <div className="alert alert-danger">Error</div>}
      </div>
    </div>
  );
}

export default AppLogin;
