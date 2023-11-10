import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navrbar = () =>{
  return (
    <Navbar expand="lg" className="bg-secondary" >
      <Container>
        <Navbar.Brand href="#home">Tienda Oeste Outlet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Ofertas</Nav.Link>
            <Nav.Link href="#home">Outlet</Nav.Link>
            <Nav.Link href="#home">Contacto</Nav.Link>
            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hombres</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mujeres
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                SALE
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navrbar;