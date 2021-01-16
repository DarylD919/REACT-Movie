import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Main() {
    return (
        <div className="home">
            <h1>Hype Review</h1>
            <Link to="/signin"><button className="btn">Get Started</button></Link>
        </div>
    )
}
