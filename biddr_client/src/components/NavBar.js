import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Session } from '../requests';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
    <Navbar bg="light">
        <Container>
        <Nav>
        <NavLink to='/'>Home</NavLink>
        |
        <NavLink to='/auctions'>Auctions Index</NavLink>
        |
        { currentUser ? (
            <React.Fragment> 
                <NavLink to='/auctions/new'>New Auction</NavLink>
                |
                <span>Welcome, {currentUser.name}</span>
                |
                <button onClick={handleSignOut}>Sign Out</button>
            </React.Fragment>
        ) : (
            <>
            <NavLink to='/sign_in'>Sign In</NavLink>
            |
            <NavLink to='/sign_up'>Sign Up</NavLink>
            </>
        )
    }
    </Nav>
    </Container>
    </Navbar>
    )
}

export default NavBar;