import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button"

function OurNavbar() {
    return  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Neetcode Clone</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/courses">Courses</Nav.Link>
        <Nav.Link href="/practice">Practice</Nav.Link>
        <Nav.Link href="/roadmap">RoadMap</Nav.Link>
        <Nav.Link href="/pro">Pro</Nav.Link>
      </Nav>
        <div>                                        
          <Button variant="outline-primary" style={{ marginRight: "20px" }}>
             dark
          </Button>
          <Button variant="primary">
             Sign In
          </Button>
        </div>
    </Container>
  </Navbar>
}

export default OurNavbar;