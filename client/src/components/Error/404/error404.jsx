import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../../NavBar/Navbar";

import estilo from "./error404.module.css";

const error404 = () => {
    return (
        <main>
            <NavBar />

            <section className={estilo.error404}>
                <div className={estilo.container}>
                    <img src="../assets/E404.svg" alt="page not found" />
                    <h2 className={estilo.error404_title}>Pagina no encontrada</h2>

                    <p className={estilo.error404_description}>
                        No se encontrado la página solicitada, puede que halla sido removido, que alla 
                        cambiando de nombre o que este temporalmente fuera de servicio 
                    </p>

                    <Link to="/home" className={estilo.btnGoHome}>Go to Home</Link>
                </div>
            </section>
        </main>
    )
};


export default error404;