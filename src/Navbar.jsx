import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
            {/* <Link to="/"><img className="logonav" src={logonav3} /></Link> */}
            <Link to="menu">menu</Link>
            <Link to="/gotem">got 'em</Link>
            <Link to="/">home</Link>
        </div>
    )
}

export default Navbar;

