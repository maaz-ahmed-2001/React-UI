import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import headerLogo from '../assests/images/logo.svg'
import { Link, Outlet } from 'react-router-dom'
import { useState } from "react"

function Header() {
    const [blue, setBlue] = useState(false)
    const handleClick = () => {
        setBlue(!blue)
    }
    return (
        <>
            <header style={blue ? { backgroundColor: "#68BAE3" } : { backgroundColor: "transparent"}}>
                <Navbar variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand ><img src={headerLogo} alt="header-logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick} />
                        <Navbar.Collapse id="basic-navbar-nav" className="alignRight hide">
                            <Nav className="ml-auto">
                                <ul className="navLinksContainer">
                                    <li className="navLinks"><Link to="/">Our App</Link></li>
                                    <li className="navLinks"><Link to="/ForBusiness">For Business</Link></li>
                                    <li className="navLinks"><Link to="/AboutUs">About us</Link></li>
                                    <li className="navLinks"><Link to="/English">English</Link></li>
                                </ul>
                                <button className="navBtn">Sign up</button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <Outlet />
        </>
    )
}

export default Header