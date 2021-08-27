import React from 'react';
import { NavLink } from 'react-router-dom';
import { Session } from '../requests';

const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
    <nav>
        <NavLink to='/'>Home</NavLink>
        |
        <NavLink to='/auctions'>Auctions Index</NavLink>
        |
        { currentUser ? (
            <React.Fragment> 
                <NavLink to='/auctions/new'>New Auction</NavLink>
                -
                <span>Welcome, {currentUser.first_name}</span>
                -
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
    </nav>
    )
}

export default NavBar;