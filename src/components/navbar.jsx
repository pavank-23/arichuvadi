import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

function Navbarx() {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="md">
        <Container>
          <Navbar.Brand href="#">
            arichuvadi.
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0">
                <Nav.Link><Link to ='/' className='text-decoration-none' style={{color:"#f8fafc"}}> Home</Link></Nav.Link>
                <Nav.Link><Link to ='/table' className='text-decoration-none' style={{color:"#f8fafc"}}>Arichuvadi</Link></Nav.Link>
                <Nav.Link><Link to ='/about' className='text-decoration-none' style={{color:"#f8fafc"}}>About</Link></Nav.Link>
                <Nav.Link><Link to ='/translator' className='text-decoration-none' style={{color:"#f8fafc"}}>Phrases</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarx