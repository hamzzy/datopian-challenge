
import React from "react"
import {Container,Navbar} from 'react-bootstrap';

const Header = () => {
  
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
  <Container>
    <Navbar.Brand href="#">Datopian</Navbar.Brand>
  </Container>
</Navbar>
  )
}

export default Header