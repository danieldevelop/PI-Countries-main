const axios = require('axios');

const getAllCountrys = async () => {
    const countries = (await axios.get("https://restcountries.com/v3/all")).data;

    const country = countries.map((country) => {
        // destructuramos los datos necesarios de la api
        const { cca3, name, flags, continents, capital, subregion, area, poputation } = country;

        return {
            id: cca3,
            name: name.common,
            flag: flags[0], // me trae la img como svg y [1] me la trae como png
            continent: continents[0],
            capital: capital != null ? capital[0] : "No information found",
            subregion: subregion != null ? subregion : "No information found",
            area: area,
            poputation: poputation,
        }
    });

    return country;
}


module.exports = {
    getAllCountrys,
}