import { Container } from "react-bootstrap"
import headerLogo from '../assests/images/logo.svg'
import {Link,Outlet} from 'react-router-dom'

function Header() {
    return (
        <>
        <header>
            <Container>
                <nav>
                    <img src={headerLogo} alt="header-logo" />
                    <ul className="navLinksContainer">
                        <li className="navLinks"><Link to="/">Our App</Link></li>
                        <li className="navLinks"><Link to="/ForBusiness">For Business</Link></li>
                        <li className="navLinks"><Link to="/AboutUs">About us</Link></li>
                        <li className="navLinks"><Link to="/English">English</Link></li>
                    </ul>
                </nav>
            </Container>
        </header>
            <Outlet/>
        </>
    )
}

export default Header