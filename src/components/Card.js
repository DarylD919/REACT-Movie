import React from 'react'
import image1 from '../images/img-1.jpg'
import image2 from '../images/img-2.jpg'
import image4 from '../images/img-4.jpg'
import image3 from '../images/img-3.jpg'


export default function Card() {
    return (
        <div className="card-group">
            <div className="card text-center">
                <img src={image1} className="img-card" alt="card" />
                <div className="card-body">
                    <h5 className="card-title">Action</h5>
                    <p className="card-text">Action packed </p>
                    <a href="/" className="btn btn-primary">Library</a>
                </div>
            </div>
            <div className="card text-center">
                <img src={image2} className="img-card" alt="card"/>   
                <div className="card-body">
                    <h5 className="card-title">Romance</h5>
                    <p className="card-text">Need a little love</p>
                    <a href="/" className="btn btn-primary">Library</a>
                </div>
            </div>
            <div className="card text-center">
                <img src={image3} className="img-card" alt="card" />
                <div className="card-body">
                    <h5 className="card-title">Horror</h5>
                    <p className="card-text">Prepare to be scared</p>
                    <a href="/" className="btn btn-primary">Library</a>
                </div>
            </div>
            <div className="card text-center">
                    <img src={image4} className="img-card" alt="card" />
                <div className="card-body">
                    <h5 className="card-title">Adventure</h5>
                    <p className="card-text">Adventure awaits</p>
                    <a href="/" className="btn btn-primary">Library</a>
                </div>
            </div>
        </div>
    )
}
