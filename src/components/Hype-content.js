import React from 'react'
import image1 from '../images/img-6.jpg'
import image2 from '../images/img-7.jpg'
import image3 from '../images/img-8.jpg'
import image4 from '../images/img-9.jpg'

export default function HypeContent() {
    return (
        <div className="max-width">
            <div className="row">
                <div className="card text-center">
                    <div className="card-header">Batman</div>
                        <div className="card-image-left">
                            <img src={image1} alt="image6" className="img-hype" />
                        </div>
                    <div className="card-body">
                        <h5 className="card-title">Some Text</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Click Me</a>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-header">Avengers</div>
                        <div className="card-image-left">
                        <img src={image2} alt="image6" className="img-hype" />
                        </div>
                    <div className="card-body">
                        <h5 className="card-title">Some Text</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Click Me</a>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-header">Every Disney movie</div>
                        <div className="card-image-left">
                            <img src={image3} alt="image6" className="img-hype" />
                        </div>
                    <div className="card-body">
                        <h5 className="card-title">Some Text</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Click Me</a>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-header">Every film direct by Christopher Nolan</div>
                        <div className="card-image-left">
                        <img src={image4} alt="image6" className="img-hype" />
                        </div>
                    <div className="card-body">
                        <h5 className="card-title">Some Text</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Click Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

