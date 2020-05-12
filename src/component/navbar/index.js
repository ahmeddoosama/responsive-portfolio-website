import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return(
        <div>
            <NavLink exact to="/"> Home </NavLink>
            <NavLink exact to="/contact"> Contact </NavLink>
        </div>
    )
}


export default Navbar;