import React from 'react'
import {Nav,NavDropdown,Container,Navbar,Form,FormControl,Button}  from 'react-bootstrap'
import './header.css'
const NavBar = () => {
    return (
        <div>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Mern E-commerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Product</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
        
      </Nav>
      <div>
      <Form  className="search">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      </div>
      <Form className="d-flex">
        
        <Button variant="outline-success"className='me-2'>Login</Button>
        <Button variant="outline-success"className='me-2'>SignUp</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  
        </div>
    )
}

export default NavBar
