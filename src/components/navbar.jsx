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
          அரிச்சுவடி.
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0">
                <Link to ='/' className='text-decoration-none p-2' style={{color:"#f8fafc"}}> Home</Link>
                <Link to ='/table' className='text-decoration-none p-2' style={{color:"#f8fafc"}}>அரிச்சுவடி</Link>
                <Link to ='/about' className='text-decoration-none p-2' style={{color:"#f8fafc"}}>About</Link>
                <Link to ='/translator' className='text-decoration-none p-2' style={{color:"#f8fafc"}}>மொழிபெயர்</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarx