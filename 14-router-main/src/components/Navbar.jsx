import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

function NavbarExample() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home">VJ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
             <Link className='nav-link' to='/' > Home  </Link>  
             <Link className='nav-link' to='/about' > About  </Link>  
             <Link className='nav-link' to='/users' > Users  </Link>  
             <Link className='nav-link' to='/contact' > Contact  </Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExample;