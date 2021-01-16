import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavBar() {
return (
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Hype Review</a>
        <div class="d-flex" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/library">Library</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/hype">Hype</a>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/signin">SignIn</Link>
                </li>
            </ul>
        </div>
  </div>
</nav>
    )
}
