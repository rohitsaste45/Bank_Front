import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavigationLinks() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">My Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavigationLinks;
