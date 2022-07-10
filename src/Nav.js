function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://#">Mission Control Center (MCC)</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="https://#">Manage Confiugrations</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://#">Audit Trail</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;