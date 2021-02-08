import React from 'react'
import s from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={s.main_navbar}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/home" className="nav-link">Home<span className="sr-only">(current)</span></Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}
export default Navbar;
