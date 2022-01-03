import { BrowserRouter, Route, NavLink, Redirect  } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useContext } from 'react'
import { ThemeContext } from '../contex/ThemeContext';
import { useSelector } from 'react-redux'
import { selectUser } from '../Features/UserSlice';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {

  const user = useSelector(selectUser)



    return (
        <div >
         <Navbar expand="lg" className='navbar'>
            <Container fluid>
            <Navbar.Brand href="/"><b>My Fisrt React App</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavLink exact to="/" className='navLink'>Home</NavLink>
                <NavLink to="/contact" className='navLink'>Contact</NavLink>
                <NavLink to="/about" className='navLink'>About</NavLink>
                {!user  && <NavLink to="/login" className='navLink'>Login</NavLink>}
                {user && <NavLink to="/logout" className='navLink'>Dashboard</NavLink>}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        </div>
    )
}
