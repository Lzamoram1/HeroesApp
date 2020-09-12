import React from 'react'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">HISTORIETAS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <a className="nav-link" href="#">DC <span class="sr-only">(current)</span></a>

                    <a className="nav-link" href="#">MARVEL</a>
                </ul>
                <div className="text-right">

                    <a className="nav-link" href="#">LOGOUT<span class="sr-only">(current)</span></a>
                </div>

            </div>
        </nav>
    )
}

