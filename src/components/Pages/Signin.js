import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
    return (
        <div className="signin">
            <form>
                <h1>Sign In</h1>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email Required" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password Required" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                        <label className="form-check-label" for="inlineFormCheck">
                            Remember me
                        </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <Link to="/register" className="reg">Create an Account</Link>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>    
        </div>
    )
}