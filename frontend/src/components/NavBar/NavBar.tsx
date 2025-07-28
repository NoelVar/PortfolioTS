import { Container, Nav, Navbar } from "react-bootstrap";
import './NavBar.css';

interface NavBarProps {
    classname?: string,
}

const NavBar = ({ classname }: NavBarProps) => {
    return (
        <Navbar className={classname} expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    Noel Varga
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link 
                                className="navbar-text"
                                href="#about"
                            >
                            About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                className="navbar-text"
                                href="#education"
                            >
                            Education
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                className="navbar-text"
                                href="#work"
                            >
                            Work & Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                className="navbar-text"
                                href="#resume"
                            >
                            Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default NavBar;