import React from "react";
import { Outlet, Link } from "react-router-dom";
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://#">Mission Control Center (MCC)</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Manage Confiugrations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/pending_approval">Pending Approval</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/audit_trail">Audit Trail</Link>
                        </li>
                    </ul>

                </div>
                <Outlet />
            </div>
        </nav>
    );
}

export default Nav;