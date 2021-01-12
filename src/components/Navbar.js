import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="max-width">
                <div className="brand">
                    <Link to="/">Hype Review</Link>
                </div>
                <ul className="nav">
                    <li>
                        <Link to="/" className="nav-links">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-links">Library</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-links">Hype</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-links">Signin</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}
