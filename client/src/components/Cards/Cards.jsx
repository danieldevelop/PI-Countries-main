import React from "react";

import Card from "../Card/Card";

import estilo from "./Cards.module.css";

const Cards = ({ allCountries }) => {
    return (
        <div className={estilo.card}>
            {
                allCountries?.map(countrie => <Card
                    key={countrie.id}
                    countrie={countrie}/>)
            }
        </div>
    )
}


export default Cards;