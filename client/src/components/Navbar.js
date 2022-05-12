import React from 'react';
import { Container, Navbar, Nav,  } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import logo from './Capture.PNG'

function NavBar() {

  const currentuser =JSON.parse(localStorage.getItem('current_user'))
  console.log(currentuser)
  
  return (<div className="navbarsticky"> 
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home"><img  src={logo} width="80" height="50"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      {currentuser? 

        <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
      :
      ""
      }
    <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
    <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
    </Nav>
    <Nav>
    {currentuser?
      <Nav.Link as={Link} to="/" onClick={()=>localStorage.clear()}>SignOut</Nav.Link>
      //  window.location.reload();
    :
    <Nav.Link  as={Link} to='/signin'>SignIn</Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


</div>);
}

export default NavBar;
