import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import estilo from "./NavBar.module.css";

const NavBar = () => {
    return(
        <nav className={estilo.navbar}>
            <div className={estilo.container}>
                <div className={estilo.d_flex}>
                    {/* Este redirecciona al welcome (landing page) */}
                    <Link className={estilo.nav_logo} to="/">Countries <span>P</span>ro</Link>

                    <div className={`${estilo.d_flex} ${estilo.gap_30}`}>
                        <Link className={estilo.nav_link} to="/home">Home</Link>
                        <Link className={estilo.nav_link} to='/about'>About</Link>
                        <Link className={estilo.nav_link} to='/contacto'>Contacto</Link>
                        <Link className={`${estilo.nav_link} ${estilo.btn} ${estilo.btn_primary}`} to='/add-activities'>Actividad Turistica</Link>
                        
                        <SearchBar />
                    </div>
                </div>
            </div>
        </nav>
    )
};


export default NavBar;