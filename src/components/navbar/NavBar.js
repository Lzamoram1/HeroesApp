import React from 'react'
import {NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand" >HISTORIETAS</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <NavLink to="/dc" className="nav-link">DC <span className="sr-only">(current)</span></NavLink>

                    <NavLink to="/marvel" className="nav-link" >MARVEL</NavLink>
                </ul>
                <div className="text-right">

                    <NavLink to="/logout" className="nav-link">LOGOUT<span className="sr-only">(current)</span></NavLink>
                    </div>

            </div>
        </nav>
    )
}

