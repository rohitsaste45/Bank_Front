import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MyNavigationLinks() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login", { replace: true });
  };

  // Check login status
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>

                <Nav.Link as={Link} to={"/todo"}>
                  Todo
                </Nav.Link>
                <Nav.Link as={Link} to={"/todo-list"}>
                  Todo List
                </Nav.Link>
                <Nav.Link as={Link} to={"/registration"}>
                  Registration
                </Nav.Link>
                <Nav.Link as={Link} to={"/user-list"}>
                  User List
                </Nav.Link>

                <Nav.Link as={Link} to={"/validation-demo"}>
                  ValidationDemo
                </Nav.Link>
                <Nav.Link as={Link} to={"/loginpage"}>
                  LoginPage
                </Nav.Link>
                <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  } else {
    return null; // Return null when user is logged in to hide the navigation bar
  }
}

export default MyNavigationLinks;
