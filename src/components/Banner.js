import React from "react";

const Banner = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <h1 className="ms-4">SCROOM</h1>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <h4><a className="nav-item nav-link ms-4" href=" ">Nombre de usuario</a></h4>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const BannerNoUser = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <h1 className="ms-4">SCROOM</h1>
            </nav>
        </header>
    )
}

export { Banner, BannerNoUser };