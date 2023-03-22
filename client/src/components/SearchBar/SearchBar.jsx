import React from "react";

import estilo from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <form className={`${estilo.d_flex} ${estilo.align_items_center}`}>
            <input type="text" placeholder="Search..." className={estilo.search_control}/>
            <button className={estilo.btn}>&#128269;</button>
        </form>
    )
};


export default SearchBar;