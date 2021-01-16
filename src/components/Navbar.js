import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavBar() {
return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <Link to="/" className="navbar-brand"><h1>Hype Review<i className="fas fa-expand-arrows-alt"></i></h1></Link>
            <div class="d-flex" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" className="nav-links">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/library" className="nav-links">Library</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/hype" className="nav-links">Hype</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/signin" className="nav-links-button">SignIn</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
