import React from "react";
import { Link } from "react-router-dom";

import estilo from "./Welcome.module.css";

const Welcome = () => {
    return (
        <div className={estilo.container}>
            <div className={estilo.box}>
                <h1 className={estilo.box_title}>¡Bienvenido a Countries <span>P</span>ro!</h1>
                <p className={estilo.box_leyend}>La información a tu alcance</p>
            </div>

            <Link to="/home" className={estilo.btnIngresar}>Ingresar <span>&#10140;</span></Link>
        </div>
    )
};

export default Welcome;