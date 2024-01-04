import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
    return (
        <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-10 my-lg-0"
              style={{ maxHeight: '300px',
                       marginLeft: '40%', fontSize:'20px'}}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ fontWeight:'700', color:'black', fontSize:'25px' }}>LOGO</Nav.Link>
              <Nav.Link href="#action2" style={{ marginLeft:'130%' }}>Wishlist</Nav.Link>
              <Nav.Link href="#action2">Cart</Nav.Link>
              
              <Nav.Link href="#">
                Profile
              </Nav.Link>
            </Nav>
            
              <Button variant="outline-success">Search</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
  }
  
  export default NavScrollExample;