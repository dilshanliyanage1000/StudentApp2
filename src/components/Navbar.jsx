import React from "react";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#26A69A" }} data-bs-theme="dark">
            <div className="container-fluid">
                <a href="#" className={`navbar-brand`} to="/">Student Application #2</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );

}

export default Navbar;