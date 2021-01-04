import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
            <Link to="/"><img className="logonav" src={logonav3} /></Link>
            <Link to="projects">projects</Link>
            <Link to="writings">writings</Link>
            <Link to="/about">about</Link>
            <Link to="doinggood">doing good</Link>
            <Link to="/contact">connect</Link>
            {/* <ThemeSwitch /> */}
        </div>
    )
}

export default Navbar;

