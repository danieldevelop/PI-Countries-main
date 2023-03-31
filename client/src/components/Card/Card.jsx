import React from "react";
import { Link } from "react-router-dom";

import estilo from "./Card.module.css";

const Card = ({countrie}) => {
    const {id, flag, name, continent} = countrie;
    return (
        <div>
            <section className={estilo.card}>
                <Link to={`/detail/${id}`} className={estilo.card__title}><h5>{name}</h5></Link>
                <div className={estilo.card__body}>
                    <img src={flag} alt={name} className={estilo.card__img}/>
                    <p className={estilo.card__info}>Continente: {continent}</p>
                </div>
            </section>
        </div>
    )
};


export default Card;