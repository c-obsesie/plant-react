  import React from 'react'
  import {Navbar,  Nav,    } from 'react-bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css';

  
  function navigationBar(){
 return (
    <Navbar 
     className="fixed-top navbar-transparent navbar navbar-expand-lg bg-transparent"
     collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
          
    <Navbar.Brand href="#home">Arbore</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
     
      <Nav className="ml-auto navbar-nav">
        <Nav.Link href="#deets">Plant Collection</Nav.Link>
        <Nav.Link href="#deets">About</Nav.Link>
        <Nav.Link href="#deets">Sing In</Nav.Link>
        <Nav.Link href="#deets">Icon Search</Nav.Link>
        <Nav.Link href="#deets">Icon Basket</Nav.Link>
    
      </Nav>
    </Navbar.Collapse>
     </div>
  </Navbar>)
 }


export default navigationBar;