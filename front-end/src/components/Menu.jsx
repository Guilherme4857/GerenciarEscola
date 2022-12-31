import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand as={NavLink} to="/">Escola</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
                Home
                <i className='ms-1 fa solid fa-house'/>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/alunos">Alunos</Nav.Link>
            <Nav.Link as={NavLink} to="/cursos">Cursos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
