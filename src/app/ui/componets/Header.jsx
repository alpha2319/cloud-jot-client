import {Link} from "react-router-dom";
import React from "react";

export default  function Header() {
    return (
        <nav className="navbar navbar-expand-md  bg-warning">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Cloud Jot</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/save">Save Files</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="/download">Download Files</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
