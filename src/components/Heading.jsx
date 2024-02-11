//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://drakensecurity.com/wp-content/uploads/2019/02/Logo-Draken-1.png" alt="navigation logo" className="navigationLogo"/></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
/*  
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
  </Navbar.Collapse>  

<Nav.Link href="#action1">Home</Nav.Link>   

<Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      />
    <Button variant="outline-success">Search</Button>
</Form> 
    */ 