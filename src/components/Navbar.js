import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavBar() {
return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <Link to="/" className="navbar-brand">Hype Review</Link>
            <div class="d-flex" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/library" className="nav-links">Library</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/hype" className="nav-links">Hype</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/signin" className="nav-links">SignIn</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
