import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand mr-auto" to="/">Contact</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active"  to="/">Accueil</Link>
                        <Link className="nav-link"  to="/ajouter">Ajouter</Link>
                        <Link className="nav-link" to="/contacts">Listes de contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};