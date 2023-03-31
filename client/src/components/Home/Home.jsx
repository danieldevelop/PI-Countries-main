import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countriesAll } from "../../redux/actions";

import NavBar from "../NavBar/Navbar";
import Cards from "../Cards/Cards";

import estilo from "./Home.module.css";

const Home = () => {
    const allCountries = useSelector((state) => state.allCountries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(countriesAll());
    }, [dispatch]);

    return (
        <main>
            <NavBar />
            <Cards allCountries={allCountries}/>
        </main>
    )
}


export default Home;