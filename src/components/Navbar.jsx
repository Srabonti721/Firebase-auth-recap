import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav>
      <NavLink to={'/'} style={{margin:20}} >Home</NavLink>
      <NavLink to={'/signIn'}>SignIn</NavLink>
        </nav>
    );
};

export default Navbar;